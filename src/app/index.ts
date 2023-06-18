function onEdit(e: OnEditEvent) {
  if (!e) return

  const activeListName = e?.range?.getSheet?.()?.getName?.()
  const currentTargetCell = e?.range?.getA1Notation?.()
  const isDropdownList = activeListName === DROPDOWN_LIST_NAME
  const isDropdownCell = currentTargetCell === DROPDOWN_CELL

  if (!isDropdownList || !isDropdownCell) return

  updateProfileData()
}
