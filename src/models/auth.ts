// 로그인
export type LoginFormValues = {
  email: string
  pw: string
}

//  사업주 회원가입
export interface SignUpBusiness {
  address: string
  addressDetail: string
  company: string
  email: string
  name: string
  phone: string
  postalCode: string
  profile: File
  pw: string
  signupSource: string
}

// 인플루언서 회원가입
export interface SignUpInfluencer {
  address: string
  addressDetail: string
  birthdate: string
  blog: string
  email: string
  gender: string
  instagram: string
  name: string
  nickname: string
  other: string
  phone: string
  postalCode: string
  profile: File
  pw: string
  signupSource: string
  tiktok: string
  youtube: string
}
