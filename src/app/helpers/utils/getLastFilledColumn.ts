function getLastFilledColumn() {
  const dropdownList = getDropdownList()
  const firstRowValues = dropdownList.getRange(1, 1, 1, dropdownList.getLastColumn()).getValues()[0]
  let lastFilledColumnIndex = 0

  for (let i = 0; i < firstRowValues.length; i++) {
    if (firstRowValues[i] !== '') lastFilledColumnIndex = i + 1
  }

  const indexLastFilledColumn = getColumnLetterByIndex(lastFilledColumnIndex)
  return indexLastFilledColumn
}
