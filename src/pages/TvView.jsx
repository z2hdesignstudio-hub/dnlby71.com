import React from 'react'
import { supabase } from '../supabaseClient'
import { useLiveData } from '../hooks/useLiveData'
import CourtPanel from '../components/CourtPanel.jsx'
import StandingsTable from '../components/StandingsTable.jsx'
import Bracket from '../components/Bracket.jsx'
import Logo from '../components/Logo.jsx'
import Footer from '../components/Footer.jsx'

export default function TvView() {
  const { data: courtN } = useLiveData(
    async () => (await supabase.rpc('get_public_court_status', { p_court: 'Court N' })).data,
    ['sub_matches']
  )
  const { data: courtB } = useLiveData(
    async () => (await supabase.rpc('get_public_court_status', { p_court: 'Court B' })).data,
    ['sub_matches']
  )
  const { data: settings } = useLiveData(
    async () => (await supabase.from('app_settings').select('show_knockout_bracket').single()).data,
    ['app_settings']
  )
  const { data: standings } = useLiveData(
    async () => (await supabase.from('standings').select('*').order('league_rank')).data,
    ['sub_matches', 'matchups']
  )
  const { data: bracketMatchups } = useLiveData(
    async () => (await supabase.rpc('get_public_bracket')).data,
    ['sub_matches', 'matchups']
  )

  const showBracket = settings?.show_knockout_bracket

  return (
    <div className="tv-shell">
      <div className="tv-header">
        <Logo height={56} />
        <div className="title">DNL <span className="accent">LIVE</span></div>
      </div>

      <div className="tv-columns">
        <div className="tv-col">
          <div className="tv-col-title">Court N</div>
          <CourtPanel courtName="Court N" status={courtN} />
        </div>

        <div className="tv-col">
          <div className="tv-col-title">{showBracket ? 'Knockout Stage' : 'League Standings'}</div>
          {showBracket ? <Bracket matchups={bracketMatchups} /> : <StandingsTable standings={standings} />}
        </div>

        <div className="tv-col">
          <div className="tv-col-title">Court B</div>
          <CourtPanel courtName="Court B" status={courtB} />
        </div>
      </div>

      <Footer variant="tv" />
    </div>
  )
}
