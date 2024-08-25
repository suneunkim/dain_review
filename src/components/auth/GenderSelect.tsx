import React, { useState } from 'react'
import { Label } from '../shared/Label'
import Button from '../shared/Button'

const GenderSelect = ({ id }: { id: string }) => {
  const [selectedGender, setSelectedGender] = useState(null)

  const handleGenderSelect = (gender: any) => {
    setSelectedGender(gender)
  }

  return (
    <div className="my-4">
      <Label
        id={id}
        name="성별"
        require={true}
      />

      <div className="flex w-full gap-2">
        <Button
          type="button"
          variant={
            selectedGender === '남성'
              ? 'outline_secondary_red'
              : 'outline_disable'
          }
          className="flex-1"
          onClick={() => handleGenderSelect('남성')}>
          남성
        </Button>
        <Button
          type="button"
          variant={
            selectedGender === '여성'
              ? 'outline_secondary_red'
              : 'outline_disable'
          }
          className="flex-1"
          onClick={() => handleGenderSelect('여성')}>
          여성
        </Button>
      </div>
    </div>
  )
}

export default GenderSelect
