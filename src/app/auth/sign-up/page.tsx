'use client'

import CertifyField from '@/components/auth/CertifyField'
import { InputField } from '@/components/auth/InputField'
import { SocialLinkGroups } from '@/components/auth/SocialLinkGroups'
import { SocialLinkMobileGroups } from '@/components/auth/SocialLinkMobileGroups'
import Form from '@/components/shared/Form'
import { Label } from '@/components/shared/Label'

import Text from '@/components/shared/Text'

import SocialInstagramLink from '@/assets/icons/auth/SocialInstagramLink.svg'
import SocialTikTokLink from '@/assets/icons/auth/SocialTikTokLink.svg'
import SocialNaverBlogLink from '@/assets/icons/auth/SocialNaverBlogLink.svg'
import SocialYoutubeLink from '@/assets/icons/auth/SocialYoutubeLink.svg'
import SocialAddButtonLink from '@/assets/icons/auth/SocialAddButtonLink.svg'
import Input from '@/components/shared/Input'

export default function SignUpPage() {
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <section className="flex w-[690px] flex-col justify-center">
      <div className="mt-24">
        <h2 className="text-center text-[34px]">인플루언서 회원가입</h2>
        <Text
          color="black"
          size="t2"
          weight={400}
          className="text-center">
          다인리뷰에서 새로운 체험단을 접해보세요.
        </Text>
      </div>

      <div className="mb-11 flex gap-4 max-lg:justify-center">
        <SocialLinkGroups
          color={true}
          border={false}
        />
        <SocialLinkMobileGroups />
      </div>

      <Form onSubmit={onSubmit}>
        <div className="mb-9 space-y-2 border-2 bg-white px-10 py-10">
          <CertifyField
            id="email"
            name="아이디(이메일)"
            children="중복확인"
            placeholder="사용하실 아이디를 입력해주세요"
            require={true}
          />

          <InputField
            id="pw"
            type="password"
            name="비밀번호"
            require={true}
            placeholder="8자 이상의 영문, 숫자, 특수문자 2가지 이상"
          />

          <InputField
            id="passwordConfirm"
            type="password"
            name="비밀번호 확인"
            require={true}
          />

          <InputField
            id="name"
            type="text"
            name="이름"
            require={true}
          />

          <CertifyField
            id="phone"
            children="인증"
            name="전화번호"
            placeholder="‘-’ 없이 숫자만 작성"
            require={true}
          />

          <InputField
            id="nickname"
            type="text"
            name="닉네임"
            require={true}
          />
          <Label
            id="signupSource"
            name="가입경로"
            require={false}
          />
          <select
            className="h-10 w-full rounded-e border-2"
            name=""
            id="">
            <option value="">포털 검색</option>
            <option value="">SNS</option>
            <option value="">지인 소개</option>
            <option value="">기타</option>
          </select>
        </div>
        <div className="space-y-2 border-2 bg-white px-10 py-10">
          <Label
            id={'link'}
            name={'SNS'}
            require={true}
          />
          <div className="flex gap-3">
            <SocialInstagramLink />
            <SocialTikTokLink />
            <SocialNaverBlogLink />
            <SocialYoutubeLink />
            <SocialAddButtonLink />
          </div>
          <Input
            id={'socialLink'}
            type={'text'}
          />
          <Input
            id={'socialLink'}
            type={'text'}
          />
          <Input
            id={'socialLink'}
            type={'text'}
          />
        </div>
      </Form>
    </section>
  )
}
