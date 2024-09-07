import Link from 'next/link'
import React, { FC } from 'react'
import ChoiceType from '@/assets/icons/auth/ChoiceType.svg'

interface TypeChoiceCardProps {
  title: string
  discription: string
  link: string
}

export const TypeChoiceCard: FC<TypeChoiceCardProps> = ({
  title,
  discription,
  link
}) => {
  return (
    <Link
      href={link}
      className="box-border flex items-center justify-between border-2 p-10">
      <div>
        <h3 className="mb-3 text-2xl font-bold leading-8">{title}</h3>
        <p className="text-center text-lg font-medium leading-5">
          {discription}
        </p>
      </div>
      {/* <ChoiceType /> */}
    </Link>
  )
}
