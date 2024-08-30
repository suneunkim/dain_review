import React from 'react'

interface WeekdayPickerProps {
  day: '일' | '월' | '화' | '수' | '목' | '금' | '토'
  isChecked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void // 체크박스 상태 변경 함수
}

const WeekdayPicker: React.FC<WeekdayPickerProps> = ({
  day,
  isChecked,
  onChange
}) => {
  const textColorClass =
    day === '일'
      ? 'text-red-30'
      : day === '토'
        ? 'text-blue-50'
        : 'text-gray-70'

  return (
    <label className="flex flex-col items-center">
      <span className={textColorClass}>{day}</span>
      <input
        type="checkbox"
        className="form-checkbox"
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  )
}

export default WeekdayPicker
