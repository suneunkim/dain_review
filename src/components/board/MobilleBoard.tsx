import BoardItem, { PostData } from "./BoardItem"

const MobilleBoard = ({ data }: { data: PostData }) => {
  return <div className="mx-auto max-w-[1023px]">
    <section className="p-5">
        <h2 className="text-center text-heading-2 font-bold">게시판</h2>
        <div className="mx-auto mt-[29px] flex w-[303px] text-heading-5">
          <h3 className="border-b border-gray-90 px-[19px] py-[5px]">
            공지사항
          </h3>
          <h3 className="border-b border-line-neutral px-[19px] py-[5px]">
            커뮤니티
          </h3>
          <h3 className="border-b border-line-neutral px-[8px] py-[5px]">
            맞팔/서이추
          </h3>
        </div>
      </section>
      <section className="p-5">
        <div className="px-2 pb-[14px] pt-[10px]">
          <BoardItem data={data}/>
        </div>
      </section>
  </div>
}

export default MobilleBoard
