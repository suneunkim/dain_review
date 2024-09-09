import RefreshIcon from '@/assets/icons/home/mobile/mobile-refresh.svg'

interface Props {
  onReset: () => void
  onClose: () => void
  onSubmit: () => void
}

const FilterActionsButtons = ({ onReset, onClose, onSubmit }: Props) => {
  return (
    <div className="flex justify-between gap-[10px]">
      <div className="flex items-center gap-[10px] font-bold">
        <button
          onClick={onReset}
          className="min-h-[50px] min-w-10 rounded-md px-2">
          <RefreshIcon />
        </button>
        <button
          onClick={onClose}
          className="min-h-[50px] min-w-[109px] rounded-md bg-gray-5 text-center text-heading-5">
          닫기
        </button>
      </div>
      <button
        onClick={onSubmit}
        className="min-h-[50px] w-full rounded-md bg-red-main text-heading-5 text-white">
        확인
      </button>
    </div>
  )
}

export default FilterActionsButtons
