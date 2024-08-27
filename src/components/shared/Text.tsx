import { HTMLAttributes } from 'react'
import classNames from 'classnames'

const sizeClasses = {
  t1: 'text-[30px] leading-[1.45]',
  t2: 'text-[24px] leading-[1.5]',
  t3: 'text-[20px] leading-[1.4]',
  t4: 'text-[20px] leading-[1.45]',
  t5: 'text-[18px] leading-6',
  t6: 'text-[15px] leading-3',
  t7: 'text-xs'
}

export const weightClasses = {
  300: 'font-extralight',
  400: 'font-light',
  500: 'font-medium',
  600: 'font-semibold',
  700: 'font-bold'
}

const colorClasses = {
  red: 'text-red-main',
  black: 'text-black',
  gray0: 'text-gray-0',
  gray5: 'text-gray-5',
  gray10: 'text-gray-10',
  gray20: 'text-gray-20',
  gray30: 'text-gray-30',
  gray40: 'text-gray-40',
  gray60: 'text-gray-60',
  gray70: 'text-gray-70',
  gray80: 'text-gray-80',
  gray90: 'text-gray-90'
}

export interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'> {
  size?: keyof typeof sizeClasses
  weight?: keyof typeof weightClasses
  color?: keyof typeof colorClasses
  children: React.ReactNode
}

function Text({
  children,
  size = 't5',
  weight = 400,
  color = 'black',
  className,
  ...props
}: TextProps) {
  const combinedClassName = classNames(
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    className
  )

  return (
    <p
      className={combinedClassName}
      {...props}>
      {children}
    </p>
  )
}

export default Text
