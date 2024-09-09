import CheckIcon from '@/assets/icons/product-detail/check.svg'

const TextFiledForm = () => {
  return (
    <div className="desktop:w-[905px]">
      <h4 className="text-heading-4 font-bold">사장님께 한마디</h4>
      <p className="mt-1 text-gray-60 lg:mt-4">
        신청 시 사업주에게 말하고 싶은 내용을 입력해주세요.
      </p>
      <div className="mt-4 flex flex-col gap-1">
        <textarea
          className="min-h-[181px] rounded-[4px] border border-line-normal px-3 py-[9px] desktop:h-[343px]"
          name=""
          id=""
          placeholder="500자 이내로 작성해주세요"
        />
        <div className="flex justify-end text-gray-30">
          <span>0 {`/ `}</span>
          <span>0000</span>
        </div>
        <div className="mt-8">
          <label
            htmlFor="agreeToPolicy"
            className="flex items-center gap-2 text-caption-1 text-gray-60">
            <input
              className="checked:bg-red-400"
              type="checkbox"
              id="agreeToPolicy"
            />
            개인정보 수집 및 이용 동의{' '}
            <span className="text-red-main">(필수)</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default TextFiledForm
