import React from 'react'
import { Label } from '../shared/Label'
import { UseFormRegister, useFormContext } from 'react-hook-form'
import Input from '../shared/Input'

interface InputFieldProps {
  id: string
  name: string
  require: boolean
  type: string
  placeholder?: string
  description?: string
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  require,
  placeholder,
  description
}) => {
  return (
    <div>
      <Label
        id={id}
        name={name}
        require={require}
      />
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <p className="mt-2 text-sm text-gray-20">{description}</p>
    </div>
  )
}
