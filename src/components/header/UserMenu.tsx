import DefaultUserIcon from '@/assets/icons/home/default-user-icon.svg'
import Notification from './Notification'
import SearchButton from './SearchButton'

const UserMenu = ({ noti }: { noti: number | null }) => {
  return (
    <>
      <SearchButton />
      <Notification noti={noti} />
      <div className="flex items-center gap-[9px]">
        <DefaultUserIcon />
        <p className="text-body-2 text-gray-90">검색모달 확인용(임시)</p>
      </div>
    </>
  )
}

export default UserMenu
