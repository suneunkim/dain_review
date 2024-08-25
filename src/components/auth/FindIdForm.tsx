'use client'

import { z } from 'zod'
import Button from '../shared/Button'
import Form from '../shared/Form'
import { InputField } from './InputField'

const findIdSchema = z.object({
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  phone: z
    .string()
    .min(10, { message: '전화번호는 10자 이상이어야 합니다.' })
    .max(11, { message: '전화번호는 11자 이하여야 합니다.' })
    .regex(/^\d+$/, { message: '전화번호는 숫자만 포함해야 합니다.' })
})

export function FindIdForm() {
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <Form
      onSubmit={onSubmit}
      schema={findIdSchema}>
      <InputField
        id={'name'}
        name={'이름'}
        require={false}
        type={'text'}
      />

      <InputField
        id={'phone'}
        name={'전화번호'}
        require={false}
        type={'number'}
        placeholder="‘-’ 없이 숫자만 작성"
      />
      <Button
        className="mt-6 h-[57px] w-full rounded-md text-lg font-bold"
        variant="solid_primary_red">
        전화번호 인증하고 아이디 찾기
      </Button>
    </Form>
  )
}
