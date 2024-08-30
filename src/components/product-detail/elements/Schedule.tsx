const Schedule = () => {
  // 임시 데이터
  const experiencePeriods = [
    { label: '체험단 모집기간', period: '08.05 (월) ~ 08.14 (수)' },
    { label: '선정자 발표', period: '08.15 (목)' },
    { label: '리뷰 & 체험', period: '08.16 (금) ~ 08.25 (일)' },
    { label: '리뷰 마감', period: '08.26 (월)' }
  ]

  return (
    <div className="mt-2 flex min-h-[152px] flex-col rounded-2xl border border-line-neutral bg-white px-4 py-3 text-body-2">
      {experiencePeriods.map((item, i) => (
        <div
          key={i}
          className="flex justify-between py-[6px]">
          <p className="text-gray-40">{item.label}</p>
          <p className="font-medium text-gray-60">{item.period}</p>
        </div>
      ))}
    </div>
  )
}

export default Schedule
