function updateProfileData(): void {
  const dropdownList = getDropdownList()

  COLUMNS_DATA.forEach((service) => {
    const { index } = service
    const profileData = getSelectedProfileData(service)
    const cookies = profileData.match(/\((.*?)\)/)
    const restData = profileData.replace(/\(.*?\)/g, '')

    const dataItems = restData.split(';')

    dropdownList.getRange(`B${index}:I${index}`).clearContent()

    if (cookies) dropdownList.getRange(`I${index}`).setValue(cookies[1])

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

// function parseProfileData(data: ColumnData): void {
//   const dropdownList = getDropdownList()
//   const cookies = data.match(/\((.*?)\)/)
//
//   if (cookies) dropdownList.getRange('C8').setValue(cookies[1])
//
//   const restData = data.replace(/\(.*?\)/g, '')
//   const dataItems = restData.split(';')
//   const values = {} as TData
//
//   COLUMNS_DATA.forEach((service) => {
//     const serviceData = getSelectedProfileData(service)
//   })
//
//   dataItems.forEach((item) => {
//     if (item.includes(':')) {
//       const [key, value] = item.split(':')
//       const currentKey = key.trim()
//       const currentValue = value.trim()
//
//       if (currentKey === 'login') {
//         dropdownList.getRange('B2').setValue(currentValue)
//       }
//       if (currentKey === 'pass') {
//         dropdownList.getRange('C3').setValue(currentValue)
//       }
//       if (currentKey === 'mail') {
//         dropdownList.getRange('D4').setValue(currentValue)
//       }
//       if (currentKey === 'seed') {
//         dropdownList.getRange('E5').setValue(currentValue)
//       }
//       if (currentKey === 'address') {
//         dropdownList.getRange('F6').setValue(currentValue)
//       }
//       if (currentKey === 'answer') {
//         dropdownList.getRange('C7').setValue(currentValue)
//       }
//     }
//   })
//
//   return values
// }
