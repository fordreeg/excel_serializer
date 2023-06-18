type OnEditEvent = GoogleAppsScript.Events.SheetsOnEdit | undefined

interface ColumnData {
  range: string
  index: number
}

interface SetNewItemDataProps {
  key: string
  value: string
  index: number
}
