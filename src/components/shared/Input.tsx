import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type: string
  disabled?: boolean
  register: any // UseFormRegister<string>
  required?: boolean
  errors?: FieldErrors // FieldErrors 타입 수정
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
  ...rest
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`peer-focus-:scale-75 mb-1 block pl-1 text-sm font-medium text-neutral-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-neutral-400`}>
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        type={type}
        {...register(id, { required: '내용을 입력해주세요' })}
        {...rest}
        className={`w-full rounded-md border p-2 shadow-sm transition focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 disabled:cursor-not-allowed disabled:opacity-70`}
      />
    </div>
  )
}

const InputIcon = () => {
  return <div>icon</div>
}

export default Input
