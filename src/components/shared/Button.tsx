import React, { FC } from 'react'
interface ButtonProps {
  icon: React.ReactNode
  children?: string
  disable?: boolean
  height?: number
}

const Button: FC<ButtonProps> = ({ icon, children, disable, height }) => {
  return (
    <button
      disabled={disable}
      className={`flex w-full items-center justify-center h-[${height}px] gap-2 rounded-md border border-line-normal`}>
      {icon}
      <p className="leading-4">{children}</p>
    </button>
  )
}

export default Button
