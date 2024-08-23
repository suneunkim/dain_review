import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

interface FormProps {
  children: React.ReactNode
  onSubmit: (data: any) => void
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  const methods = useForm()
  console.log('methods', methods)
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
