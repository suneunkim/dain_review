import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Input from '../shared/Input'
import Button from '../shared/Button'
import { Label } from '../shared/Label'
// import { CheckCircleIcon } from '@heroicons/react/solid' // 아이콘을 사용하기 위해 heroicons 패키지를 추가합니다.
import InputCheckedIcon from '@/assets/icons/auth/InputCheckedIcon.svg'

interface CertifyFieldProps {
  id: string
  name: string
  placeholder: string
  require: boolean
  description?: string
  children: string
}

const CertifyField: React.FC<CertifyFieldProps> = ({
  id,
  name,
  placeholder,
  require,
  description,
  children
}) => {
  const {
    register,
    formState: { errors },
    setValue
  } = useFormContext()
  const [isVerified, setIsVerified] = useState(false)
  const [verificationMessage, setVerificationMessage] = useState<string | null>(
    null
  )

  const checkEmailDuplication = async () => {
    const emailValue = (document.getElementById(id) as HTMLInputElement).value

    // 이메일 중복 체크 로직 (예: API 호출)
    try {
      const response = await fetch('/api/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailValue })
      })
      const result = await response.json()

      if (result.isDuplicate) {
        setVerificationMessage('이미 사용 중인 이메일입니다.')
        setIsVerified(false)
      } else {
        setVerificationMessage('사용 가능한 이메일입니다.')
        setIsVerified(true)
        setValue(id, emailValue) // 인증된 이메일을 폼에 설정
      }
    } catch (error) {
      console.error('이메일 중복 확인 중 오류 발생:', error)
      setVerificationMessage('이메일 확인 중 오류가 발생했습니다.')
      setIsVerified(false)
    }
  }

  return (
    <div className="flex w-full flex-col">
      <Label
        id={id}
        name={name}
        require={require}
        description={description}
      />
      <div className="flex place-items-start gap-2">
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          // register={register}
          // errors={errors}
        />
        <Button
          type="button"
          className="h-[42px] min-w-[74px]"
          variant="solid_primary"
          onClick={checkEmailDuplication}>
          {children}
        </Button>
        {isVerified && <InputCheckedIcon />}
      </div>
      {verificationMessage && (
        <p
          className={`mt-2 text-sm ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
          {verificationMessage}
        </p>
      )}
    </div>
  )
}

export default CertifyField
