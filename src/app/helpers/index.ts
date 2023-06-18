function getDropdownList() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(DROPDOWN_LIST_NAME)
}

function getProfilesList() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(PROFILES_LIST_NAME)
}
