'use client'

import { getDaysInMonth, subMonths } from 'date-fns'
import { useState } from 'react'

const DAY_OF_WEEK = 7

const useCalendar = (initialDate: any) => {
  const [currentDate, setCurrentDate] = useState(initialDate)

  const totalMonthDays = getDaysInMonth(currentDate)

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDay()

  // 이전 달의 마지막 날 계산
  const prevMonthDays = Array.from({ length: firstDayOfMonth }, (_, i) =>
    new Date(currentDate.getFullYear(), currentDate.getMonth(), -i).getDate()
  ).reverse()

  // 현재 달의 날짜 목록
  const currentDayList = Array.from({ length: totalMonthDays }, (_, i) => i + 1)

  // 다음 달의 날짜 계산
  const nextMonthDays = Array.from(
    { length: DAY_OF_WEEK - lastDayOfMonth - 1 },
    (_, i) => i + 1
  )

  // 전체 달력 목록 생성
  const currentCalendarList = prevMonthDays.concat(
    currentDayList,
    nextMonthDays
  )

  const weekCalendarList = currentCalendarList.reduce(
    (acc: number[][], cur, idx) => {
      const chunkIndex = Math.floor(idx / DAY_OF_WEEK)
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = []
      }
      acc[chunkIndex].push(cur)
      return acc
    },
    []
  )

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const handlenextMonth = () => {
    setCurrentDate(subMonths(currentDate, -1))
  }

  return {
    weekCalendarList,
    currentDate,
    handlePrevMonth,
    handlenextMonth
  }
}

export default useCalendar
