import React from 'react'

interface WeekdayPickerProps {
  day: string
  isChecked: boolean
  onChange: () => void // 체크박스 상태 변경 함수
}

const WeekdayPicker: React.FC<WeekdayPickerProps> = ({
  day,
  isChecked,
  onChange
}) => {
  return (
    <label className="flex flex-col items-center">
      <span
        className={`${
          day === '일'
            ? 'text-red-500'
            : day === '토'
              ? 'text-blue-500'
              : 'text-gray-80'
        }`}>
        {day}
      </span>
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
