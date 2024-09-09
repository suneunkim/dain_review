import Link from 'next/link'

const GuestMenu = () => {
  return (
    <div className="flex items-center gap-[12px]">
      <Link href="/auth/login">
        <button className="px-[8px] py-[12px] text-center text-[14px] font-[500] leading-[19.6px] text-gray-40">
          Log in
        </button>
      </Link>
      <Link href="/auth/choice-type">
        <button className="flex h-[39px] w-[108px] items-center justify-center rounded-3xl bg-red-main px-[10px] py-[12px] text-[14px] font-[500] leading-[19.6px] text-gray-0">
          Get start
        </button>
      </Link>
    </div>
  )
}

export default GuestMenu
