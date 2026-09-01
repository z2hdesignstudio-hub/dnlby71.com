import React from 'react'
import { TEAM_GRADIENTS } from '../constants'

// Renders text in a team's brand gradient (or solid color, for a team
// with just one) - by default the team's own name, but `text` can
// override what's actually displayed (e.g. player names styled in their
// team's colors) while `name` still controls which gradient is used.
// Winner highlighting uses a drop-shadow glow rather than a background/
// box-shadow, since those don't render correctly around gradient-clipped
// (effectively transparent-colored) text.
export default function TeamName({ name, text, isWinner, className = '' }) {
  const gradient = TEAM_GRADIENTS[name]
  const style = gradient
    ? {
        backgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
      }
    : {}

  return (
    <span className={`${className} ${isWinner ? 'team-winner' : ''}`} style={style}>
      {text ?? name}
    </span>
  )
}
