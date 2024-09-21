import { CampaignProps } from '@/models/campaignList'
import ReviewType from '../product/ReviewType'
import { calculateRemainingDays } from '@/utils/calculateRemainingDays'
import PlatformType from '../product/PlatformType'

interface Props {
  data: CampaignProps
  type: 'latest' | 'deadline'
}
const DeadlineProductCard = ({ data, type }: Props) => {
  const remainingDays = calculateRemainingDays(data.applicationEndDate)

  return (
    <div className="flex h-[104px] min-w-[320px] gap-2 md:w-[94.5vw] lg:h-[144px] lg:w-full lg:max-w-[580px] lg:gap-4">
      <img
        src={data.image}
        className="w-[104px] overflow-hidden rounded-md bg-gray-300 object-cover lg:min-w-[144px]"
      />

      <div className="flex w-full flex-col justify-between gap-1 lg:gap-2">
        <div>
          {type === 'deadline' ? (
            <p className="text-caption-2 font-bold text-red-main lg:text-body-1">
              오늘 자정 마감
            </p>
          ) : (
            <p className="text-caption-2 font-bold text-gray-70 lg:text-body-1">
              8일 남음
            </p>
          )}
          <p className="text-body-2 font-bold lg:text-heading-5">
            {data.title}
          </p>
          <p className="text-caption-1 font-medium text-gray-60 lg:text-body-2">
            {data.service}
          </p>
        </div>
        <div className="text-caption-2 text-gray-60 lg:text-body-2">
          {data.city ? `${data.city} ${data.district}` : '재택'}
        </div>
        <div className="flex w-full justify-between">
          <PlatformType
            platform={
              data.platform as '블로그' | '유튜브' | '인스타그램' | '틱톡'
            }
            labelType={data.type}
          />
          <div>
            <span className="text-caption-2 font-bold text-gray-80 lg:text-body-1">
              0명{' '}
              <span className="text-gray-60">
                {' '}
                / {data.recruiter ? data.recruiter : 1}명
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeadlineProductCard
