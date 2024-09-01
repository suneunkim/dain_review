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

export default TagKeyword
