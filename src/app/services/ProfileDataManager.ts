class ProfileDataManager {
  dropdownList: GoogleAppsScript.Spreadsheet.Sheet
  profilesList: GoogleAppsScript.Spreadsheet.Sheet
  lastFilledColumn: string
  data: typeof COLUMNS_DATA

  constructor() {
    this.dropdownList = getDropdownList()
    this.profilesList = getProfilesList()
    this.lastFilledColumn = getLastFilledColumn()
    this.data = COLUMNS_DATA
  }

  getSelectedProfileData(column: ColumnData): string {
    const { range, index } = column
    const dropdownValue = this.dropdownList.getRange(DROPDOWN_CELL).getValue()
    const profilesDataRange = this.profilesList.getRange(range).getValues()

    const profileData = vlookup(dropdownValue, profilesDataRange, index)
    return profileData
  }

  setCellValue(cell: string, value: string) {
    this.dropdownList.getRange(cell).setValue(value)
  }

  setItemData({
    key, value, index,
  }: SetNewItemDataProps): void {
    const currentKey = key.trim()
    const currentValue = value.trim()

    if (currentKey === 'login') this.setCellValue(`B${index}`, currentValue)
    if (currentKey === 'pass') this.setCellValue(`C${index}`, currentValue)
    if (currentKey === 'token') this.setCellValue(`D${index}`, currentValue)
    if (currentKey === 'mail') this.setCellValue(`E${index}`, currentValue)
    if (currentKey === 'answer') this.setCellValue(`F${index}`, currentValue)
    if (currentKey === 'seed') this.setCellValue(`G${index}`, currentValue)
    if (currentKey === 'address') this.setCellValue(`H${index}`, currentValue)
  }

  resetItemData(index: number) {
    this.dropdownList.getRange(`B${index}:${this.lastFilledColumn}${index}`).clearContent()
  }

  updateCookiesItemData(profileData: string, index: number) {
    const cookiesItem = profileData.match(/\((.*?)\)/)

    if (cookiesItem) this.dropdownList.getRange(`I${index}`).setValue(cookiesItem[1])
  }

  update() {
    this.data.forEach((service) => {
      const { index } = service
      const profileData = this.getSelectedProfileData(service)

      this.updateCookiesItemData(profileData, index)

      const restData = profileData.replace(/\(.*?\)/g, '')
      const dataItems = restData.split(';')

      this.resetItemData(index)
      dataItems.forEach((item) => {
        if (item.includes(':')) {
          const [key, value] = item.split(':')

          this.setItemData({
            key,
            value,
            index,
          })
        }
      })
    })
  }
}

const profileDataManager = new ProfileDataManager()
