'use client'

import { useForm } from 'react-hook-form'
import Input from '../shared/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LoginFormValues } from '@/models/auth'
import Form from '../shared/Form'

/**
 * 유효성검사 에러 메세지 주석
 * 디자인이 안되어 있어서 추후 회의해서
 */

const loginSchema = z.object({
  email: z.string().email('이메일 형식을 입력해주세요.'),
  pw: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
      '영문+숫자+특수문자(! @ # % $ & * ?) 조합 8~15자리를 입력해주세요.'
    )
})

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 space-y-2">
        <Input
          id="email"
          type="text"
          // register={register}
          placeholder="아이디(이메일)"
          errors={errors}
        />
        {/* {<p className="text-sm text-red-50">{errors.email?.message}</p>} */}
        <Input
          id="pw"
          type="password"
          // register={register}
          placeholder="비밀번호"
          errors={errors}
        />
        {/* {<p className="text-sm text-red-50">{errors.pw?.message}</p>} */}
      </div>
      <button className="mb-[10px] h-[46px] w-full rounded-sm bg-red-main text-white">
        로그인
      </button>
      <div className="flex items-center justify-end space-x-2">
        <a
          href=""
          className="text-sm leading-5 text-gray-70">
          아이디 찾기
        </a>
        <div className="h-3 w-[1px] bg-line-neutral"></div>
        <a
          href=""
          className="text-sm leading-5 text-gray-70">
          비밀번호 찾기
        </a>
      </div>
    </Form>
  )
}
