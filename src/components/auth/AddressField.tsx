import React from 'react'
import DaumPostcode from 'react-daum-postcode'

const AddressField = () => {
  const onCompletePost = (data: any) => {
    console.log(data)
  }
  return (
    <div className="h-full w-full">
      <DaumPostcode onComplete={onCompletePost}></DaumPostcode>
    </div>
  )
}

export default AddressField
