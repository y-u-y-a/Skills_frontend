// model
export type User = {
  email: string
  password: string
  name: string
  //
  lastName: string
  firstName: string
  lastNameKana: string
  firstNameKana: string
  //
  birthYear: string
  birthMonth: string
  birthDay: string
  //
  gender: number
  phone_number: string
  station: string
  profile: string
}
export type Project = {
  // About
  title: string | null
  position: string | null
  memberCounts: string | null
  industryType: string | null
  // Work
  process: string[]
  detail: string | null
  // Period
  startAt: string | null
  endAt: string | null
  // Develop
  os: string[]
  db: string[]
  lang: string[]
  fw: string[]
  tool: string[]
}
// state
export type RootState = {
  version: string
}
export type CommonState = {
  isPreview: boolean
  isSidebar: boolean
  loading: boolean
}
export type AuthState = {
  loginUser: User | null
}
export type ProjectState = Project
export type UserState = User
