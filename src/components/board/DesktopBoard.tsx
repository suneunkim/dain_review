import BoardItem, { PostData } from './BoardItem'

const DesktopBoard = ({ data }: { data: PostData }) => {
  return (
    <div className="mx-auto flex max-w-[1400px] gap-14">
      <section className="w-[247px] px-6 py-10">
        <ul className="text-body-1 text-gray-90">
          <li className="min-w-[199px] border-b py-[20.5px] pl-[10px] font-bold">
            게시판
          </li>
          <li className="py-[20.5px] pl-[10px] font-bold">공지사항</li>
          <li className="py-[20.5px] pl-[10px]">커뮤니티</li>
          <li className="py-[20.5px] pl-[10px]">맞팔 / 서이추</li>
        </ul>
      </section>
      <section className="w-full px-4 py-10">
        <h3 className="text-display-2 font-bold">게시판</h3>
        <h4 className="mt-14 text-heading-2 font-bold">공지사항</h4>
        <div className="mt-[10px] max-w-[1065px] bg-background-gray px-[30px] py-6">
          <BoardItem data={data} />
        </div>
      </section>
    </div>
  )
}

export default DesktopBoard
