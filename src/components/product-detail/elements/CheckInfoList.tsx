import React from 'react'

interface Props {
  info: string
}

const CheckInfoList = ({ info }: Props) => {
  return (
    <li className="flex gap-[5px]">
      <span>☑️</span>
      {info}
    </li>
  )
}

export default CheckInfoList
