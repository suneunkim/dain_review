import DeadlineProductBox from './DeadlineProductBox'

const DeadlineProductContainer = ({ deadlineData, latestData }: any) => {
  return (
    <div className="mx-auto mb-20 mt-[48px] grid min-w-[328px] max-w-[1400px] grid-cols-1 gap-[48px] px-4 md:w-[calc(97vw)] lg:mb-[144px] lg:mt-[80px] lg:h-[823px] lg:grid-cols-2 lg:bg-background-gray lg:px-[60px] lg:py-[54px] desktop:gap-[129px]">
      <DeadlineProductBox
        data={deadlineData}
        title="마감임박 🚨"
        type="deadline"
      />
      <DeadlineProductBox
        data={latestData}
        title="신규 체험단 🐤"
        type="latest"
      />
    </div>
  )
}

export default DeadlineProductContainer
