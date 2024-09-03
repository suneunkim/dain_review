import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { ZodSchema } from 'zod'

interface FormProps {
  children: React.ReactNode
  onSubmit: (data: any) => void
  schema: ZodSchema<any>
}

const Form: React.FC<FormProps> = ({ children, onSubmit, schema }) => {
  const methods = useForm({
    resolver: zodResolver(schema)
  })
  console.log('methods', methods)
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
