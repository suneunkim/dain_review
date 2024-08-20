import error from 'next/error'
import input from 'postcss/lib/input'
import React, { FC, ReactNode } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label?: ReactNode
  type: string
  placeholder?: string
  disabled?: boolean
  register: any // UseFormRegister<string>
  required?: boolean
  errors?: FieldErrors // FieldErrors 타입 수정
}

const Input: React.FC<InputProps> & {
  Label: FC<{ id: string; name: string }>
} = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
  placeholder,
  ...rest
}) => {
  const hasError = errors && errors[id]
  console.log(errors)
  return (
    <div className="relative">
      {label}
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        {...register(id, { required: '내용을 입력해주세요' })}
        {...rest}
        className={`box-border w-full rounded-[4px] border p-2 shadow-sm transition focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 disabled:cursor-not-allowed disabled:opacity-70 ${hasError ? 'border-red-500 bg-red-100 focus:border-red-500 focus:ring-red-500' : ''}`}
      />
    </div>
  )
}

const InputLabel: FC<{ id: string; name: string }> = ({ id, name }) => {
  return (
    <label
      htmlFor={id}
      className={`peer-focus-:scale-75 mb-1 block pl-1 text-sm font-medium text-neutral-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-neutral-400`}>
      {name}
    </label>
  )
}

Input.Label = InputLabel

export default Input
