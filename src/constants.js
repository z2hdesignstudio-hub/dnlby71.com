export function labelForType(matchTypeKey) {
  const labels = {
    mens_doubles: "Men's Doubles",
    mens_singles: "Men's Singles",
    womens_doubles: "Women's Doubles",
    womens_singles: "Women's Singles",
    mixed_doubles: 'Mixed Doubles',
    mixed_45_doubles: 'Over 40 Mixed Doubles',
  }
  return labels[matchTypeKey] || matchTypeKey
}

export const STAGE_LABELS = {
  qualifier1: 'Qualifier 1',
  eliminator: 'Eliminator',
  qualifier2: 'Qualifier 2',
  final: 'Final',
}

// Each team's name is rendered with its own gradient, matched by exact
// name. A team not in this list (a typo, or a team added later) safely
// falls back to plain white text rather than breaking.
export const TEAM_GRADIENTS = {
  'Fire Bees': 'linear-gradient(135deg, #FF8A00, #E8202B)',
  'Black Stingers': 'linear-gradient(135deg, #0A0A0C, #C81E2C)',
  'Golden Stingers': 'linear-gradient(135deg, #4FC3F7, #F4B93E)',
  'Hive Aces': '#E6007E',
  'Hive Hustlers': 'linear-gradient(135deg, #3DCB4A, #F0E64A)',
  'Bumble Bees': 'linear-gradient(135deg, #F4C724, #16130F)',
}
