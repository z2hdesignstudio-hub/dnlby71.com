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
