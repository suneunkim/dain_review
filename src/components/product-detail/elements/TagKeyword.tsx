'use client'
import { notify } from '@/utils/toast'

interface Props {
  tag: string
  info: 'tag' | 'mission'
}

const TagKeyword = ({ tag, info }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span
        className={`rounded-[4px] bg-gray-5 px-4 py-[6px] ${info === 'mission' && 'border border-line-neutral bg-white'} `}>
        {tag}
      </span>
    </div>
  )
}

interface TagKeywordContainerProps {
  tagkeywordList: string[]
}

const TagKeywordContainer = ({ tagkeywordList }: TagKeywordContainerProps) => {
  const handleCopyKeywords = () => {
    // 키워드를 공백으로 구분된 문자열로 결합
    const keywords = tagkeywordList.join(' ')

    // 클립보드에 복사
    navigator.clipboard
      .writeText(keywords)
      .then(() => {
        notify('키워드가 복사되었습니다!') // 복사 완료 시 토스트 알림 표시
      })
      .catch(err => {
        console.error('키워드 복사 실패:', err)
      })
  }

  return (
    <div>
      <p className="mb-4 text-heading-5 font-bold">태그 키워드</p>
      <div className="flex flex-col gap-4 520:flex-row">
        <div className="flex flex-wrap gap-2">
          {tagkeywordList.map((tag, i) => (
            <TagKeyword
              info="tag"
              tag={tag}
              key={i}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={handleCopyKeywords}
          className="mt-[25px] w-[78px] border-b-2 border-gray-70 520:mt-0">
          키워드 복사
        </button>
      </div>
    </div>
  )
}

export { TagKeyword, TagKeywordContainer }
