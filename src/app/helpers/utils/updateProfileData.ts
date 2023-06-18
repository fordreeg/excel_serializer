function updateProfileData(): void {
  const dropdownList = getDropdownList()

  COLUMNS_DATA.forEach((service) => {
    const { index } = service
    const profileData = getSelectedProfileData(service)
    const cookiesItem = profileData.match(/\((.*?)\)/)
    const restData = profileData.replace(/\(.*?\)/g, '')

    const dataItems = restData.split(';')

    dropdownList.getRange(`B${index}:I${index}`).clearContent()

    if (cookiesItem) dropdownList.getRange(`I${index}`).setValue(cookiesItem[1])

    dataItems.forEach((item) => {
      if (item.includes(':')) {
        const [key, value] = item.split(':')
        const currentKey = key.trim()
        const currentValue = value.trim()

        if (currentKey === 'login') {
          dropdownList.getRange(`B${index}`).setValue(currentValue)
        }
        if (currentKey === 'pass') {
          dropdownList.getRange(`C${index}`).setValue(currentValue)
        }
        if (currentKey === 'token') {
          dropdownList.getRange(`D${index}`).setValue(currentValue)
        }
        if (currentKey === 'mail') {
          dropdownList.getRange(`E${index}`).setValue(currentValue)
        }
        if (currentKey === 'answer') {
          dropdownList.getRange(`F${index}`).setValue(currentValue)
        }
        if (currentKey === 'seed') {
          dropdownList.getRange(`G${index}`).setValue(currentValue)
        }
        if (currentKey === 'address') {
          dropdownList.getRange(`H${index}`).setValue(currentValue)
        }
      }
    })
  })
}
