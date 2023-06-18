function vlookup(searchKey: string, range: any[][], index: number): string | null {
  for (let i = 0; i < range.length; i += 1) {
    if (range[i][0] === searchKey) return range[i][index - 1]
  }

  return null
}
