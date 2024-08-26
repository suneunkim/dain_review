const AddressRequired = () => {
  return (
    <div className="mx-auto w-full min-w-[328px]">
      <div className="flex h-[168px] max-w-[1400px] items-center justify-between rounded-lg border bg-background-gray px-4 py-5 md:w-[calc(95.7vw)] lg:px-[118px] lg:py-[32px] desktop:h-[190px]">
        <section className="flex w-full flex-col items-center justify-center gap-[10px] lg:items-start">
          <div className="h-[20px] w-[24px] lg:hidden">
            <img
              className="object-cover"
              src="home-banner/red-flag.png"
              alt="flag"
            />
          </div>
          <div className="my-1 text-center lg:text-left">
            <p className="text-body-1 font-bold text-gray-90">
              주변에는 어떤 체험단이 있을까요?
            </p>
            <p className="mt-1 text-body-2 text-gray-60">
              가까운 체험단을 알려드릴게요
            </p>
          </div>
          <button className="rounded-[1000px] border border-line-normal bg-white px-3 py-[10px] text-body-2">
            주소 설정하기
          </button>
        </section>
        {/* 1024px 이상일 때 보이는 깃발 */}
        <div className="hidden h-[87px] w-[91px] lg:block">
          <img
            className="object-cover"
            src="home-banner/red-flag.png"
            alt="flag"
          />
        </div>
      </div>
    </div>
  )
}

export default AddressRequired
