function getSelectedProfileData(columnName: ColumnData): string {
  const { range, index } = columnName
  const dropdownList = getDropdownList()
  const profilesList = getProfilesList()
  const dropdownValue = dropdownList.getRange(DROPDOWN_CELL).getValue()

  const profilesDataRange = profilesList.getRange(range).getValues()

  const result = vlookup(dropdownValue, profilesDataRange, index)
  return result
}
