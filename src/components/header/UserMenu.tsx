import DefaultUserIcon from '@/assets/icons/home/default-user-icon.svg'
import SearchIcon from '@/assets/icons/home/mobile/mobile-search.svg'
import Notification from './Notification'
import SearchButton from '../modal/SearchButton'

const UserMenu = ({ noti }: { noti: number | null }) => {
  return (
    <>
      <SearchButton />
      <Notification noti={noti} />
      <div className="flex items-center gap-[9px]">
        <DefaultUserIcon />
        <p className="text-body-2 text-gray-90">유저아이디</p>
      </div>
    </>
  )
}

export default UserMenu
