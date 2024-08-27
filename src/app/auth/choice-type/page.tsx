import { TypeChoiceCard } from '@/components/auth/TypeChoiceCard'

export default function ChoiceTypePage() {
  return (
    <div className="mt-32 flex w-[690px] flex-col justify-center">
      <h2 className="mb-4 text-center text-3xl font-bold leading-9">
        회원 유형을 선택해주세요
      </h2>
      <p className="mb-16 text-center text-2xl font-normal leading-7 text-gray-70">
        두 타입으로 가입할 수 있습니다.
      </p>

      <div className="flex flex-col space-y-4">
        <TypeChoiceCard
          title="인플루언서 유저"
          discription="본인의 SNS를 등록하고 체험단에 참가해 리워드를 받고 리뷰를
          게시합니다"
          link="/auth/sign-up"
        />
        <TypeChoiceCard
          title="사업주 유저"
          discription="체험단을 등록해 선정된 인플루언서에게 서비스를 제공해 리뷰를
          수집합니다"
          link="/auth/sign-up"
        />
      </div>
    </div>
  )
}
