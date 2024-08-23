import React from 'react'
import Input from '../shared/Input'

import Button from '../shared/Button'
import { UseFormRegister } from 'react-hook-form'
import { Label } from '../shared/Label'
import { register } from 'module'

interface CertifyFieldProps {
  id: string
  name: string
  children: string
  placeholder: string
  require: boolean
}

const CertifyField = ({
  id,
  name,
  placeholder,
  require,
  children
}: CertifyFieldProps) => {
  return (
    <div className="flex w-full flex-col">
      <Label
        id={id}
        name={name}
        require={require}></Label>
      <div className="flex gap-1">
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          className=""
          // errors={errors}
        />

        <Button
          className="min-w-[74px]"
          variant="solid_primary">
          {children}
        </Button>
      </div>
    </div>
  )
}

export default CertifyField
