'use client'

import Agreement from '../shared/Agreement'
import Button from '../shared/Button'
import Form from '../shared/Form'
import Input from '../shared/Input'
import { Label } from '../shared/Label'
import CertifyField from './CertifyField'
import GenderSelect from './GenderSelect'
import { InputField } from './InputField'
import { z } from 'zod'

import SocialInstagramLink from '@/assets/icons/auth/SocialInstagramLink.svg'
import SocialTikTokLink from '@/assets/icons/auth/SocialTikTokLink.svg'
import SocialNaverBlogLink from '@/assets/icons/auth/SocialNaverBlogLink.svg'
import SocialYoutubeLink from '@/assets/icons/auth/SocialYoutubeLink.svg'
import SocialAddButtonLink from '@/assets/icons/auth/SocialAddButtonLink.svg'
import ProfileImage from '@/assets/icons/auth/ProfileImage.svg'
import CameraProfile from '@/assets/icons/auth/CameraProfile.svg'

const userSchema = z.object({
  address: z.string().optional(),
  addressDetail: z.string().optional(),
  birthdate: z.string().optional(), // 날짜 형식 검사가 필요할 경우 refine 사용
  blog: z.string().url().optional(),
  email: z.string().email(),
  gender: z.number().int().optional(), // 정수형을 나타내며, 선택적 필드로 설정
  instagram: z.string().optional(),
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  nickname: z.string().optional(),
  other: z.string().optional(),
  phone: z.string().optional(), // 전화번호 형식 검사가 필요할 경우 refine 사용
  postalCode: z.string().optional(),
  profile: z.string().optional(), // 파일 업로드의 경우, URL로 처리하거나 파일 핸들링 방식 설정 필요
  pw: z
    .string()
    .min(8, { message: '패스워드는 최소 8자 이상이어야 합니다.' })
    .max(15),
  signupSource: z.string().optional(),
  tiktok: z.string().optional(),
  youtube: z.string().optional()
})
function ModifyMyForm() {
  const onSubmit = () => {}
  return (
    <Form
      onSubmit={onSubmit}
      schema={userSchema}>
      {/* 추가내용 1 */}

      <InputField
        id="email"
        type="text"
        name="아이디(이메일)"
        require={false}
        placeholder="Highfive5@naver.com"
      />

      <InputField
        id="pw"
        type="password"
        name="비밀번호"
        require={true}
        placeholder="8자 이상의 영문, 숫자, 특수문자 2가지 이상"
      />

      <InputField
        id="passwordConfirm" // 추가된 필드로 스키마에서 확인 필요
        type="password"
        name="새 비밀번호 확인"
        require={true}
      />

      <InputField
        id="name"
        type="text"
        name="이름"
        require={true}
        description="실명으로 등록하지 않을 경우 불이익이 있을 수 있습니다."
      />

      <CertifyField
        id="phone"
        name="전화번호"
        placeholder="‘-’ 없이 숫자만 작성"
        require={true}>
        인증
      </CertifyField>

      <InputField
        id="nickname"
        type="text"
        name="닉네임"
        require={true}
        description="커뮤니티 이용 시 사용할 닉네임을 입력해 주세요."
      />

      {/* 추가내용 2 */}
      <div className="my-24 space-y-2">
        <Label
          id={'link'}
          name={'SNS'}
          require={true}
        />

        <div className="">
          <div className="mb-10 flex gap-3">
            <SocialNaverBlogLink />
            <SocialInstagramLink />
            <SocialYoutubeLink />
            <SocialTikTokLink />
            <SocialAddButtonLink />
          </div>
        </div>

        <div className="">
          <div className="space-y-2">
            <Input
              id={'blog'}
              type={'text'}
            />
            <Input
              id={'instagram'}
              type={'text'}
            />
            <Input
              id={'youtube'}
              type={'text'}
            />
            <Input
              id={'tiktok'}
              type={'text'}
            />
          </div>
        </div>
      </div>

      {/* 추가 내용 3 */}
      <div className="mb-24 space-y-6 py-10">
        <div className="mb-6 space-y-2">
          <CertifyField
            id="address"
            name="주소"
            placeholder="우편번호"
            description="체험단 응모 시 사용할 주소를 입력해 주세요. / 체험단 모집 시 사용할 주소를 입력해 주세요."
            require={true}>
            검색
          </CertifyField>
          <Input
            id={'addressDetail1'}
            type={'text'}
            placeholder="기본 주소"
          />
          <Input
            id={'addressDetail2'}
            type={'text'}
            placeholder="상세주소"
          />
        </div>

        <div>
          <Label
            id="profile"
            name="프로필 이미지"
            require={false}
            description="10MB 미만의 이미지를 업로드해주세요."
          />
          <label className="relative block size-[100px]">
            <ProfileImage />
            <div className="absolute bottom-0 right-0">
              <CameraProfile />
            </div>
            <input
              type="file"
              className="hidden"
              id="profile"
            />
          </label>
        </div>

        <Label
          id="birthdate"
          name="생년월일"
          require={true}
        />
        {/* datePicker자리 */}
        <GenderSelect id="gender" />
      </div>

      <div className="my-10 space-y-4">
        <Button
          type="submit"
          variant="solid_primary_red"
          className="h-[57px] w-full">
          회원가입
        </Button>
        <Button
          type="button"
          weight={700}
          variant="ghost"
          className="h-[57px] w-full">
          회원탈퇴
        </Button>
      </div>
    </Form>
  )
}

export default ModifyMyForm
