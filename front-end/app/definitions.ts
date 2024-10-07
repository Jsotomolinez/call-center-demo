// Definitions for the spreadsheets

export interface DateTimeType {
  date: string, // yyyy/mm/dd
  time: string // 24hrs hh:mm UTC
}

export interface NoteType {
  field: string,
  value: string | null
}

export interface BasicInfoType {
  field: string,
  value: string,
  isCorrect?: boolean | null
}

export interface CallInfoType {
  basicInfo: BasicInfoType[],
  notes: NoteType[],
  calls: DateTimeType[]
}

