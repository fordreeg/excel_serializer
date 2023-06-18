function getColumnLetterByIndex(column: number) {
  let temp
  let letter = ''
  let currentColumn = column

  while (currentColumn > 0) {
    temp = (column - 1) % 26
    letter = String.fromCharCode(temp + 65) + letter
    currentColumn = (column - temp - 1) / 26
  }

  return letter
}
