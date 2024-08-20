import React, { FC, ReactNode } from 'react'
import { FieldErrors, UseFormRegister, useFormContext } from 'react-hook-form'

import classNames from 'classnames'
import { Label } from './Label'

interface InputProps {
  id: string
  label?: ReactNode
  type: string
  placeholder?: string
  disabled?: boolean
  // register: any // UseFormRegister<string>
  required?: boolean
  errors?: FieldErrors // FieldErrors 타입 수정
  className?: string
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  errors,
  placeholder,
  className,
  ...rest
}) => {
  const hasError = errors && errors[id]
  const { register } = useFormContext()
  return (
    <input
      id={id}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      {...register(id, { required: '내용을 입력해주세요' })}
      {...rest}
      className={classNames(
        `${className} box-border w-full rounded-[4px] border p-2 shadow-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-70 ${hasError ? 'focus:border-red-500 focus:ring-red-500' : ''}`
      )}
    />
  )
}

const InputIcon = () => {
  return <div>icon</div>
}

export default Input
