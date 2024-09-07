import BackButton from '../BackButton'

const MobileSubtitleHeader = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className="flex h-full items-center justify-between lg:hidden">
      <BackButton />
      <div className="flex items-center gap-4">
        <p className="text-body-1 font-bold">{subtitle}</p>
      </div>
      <div className="w-3"></div>
    </div>
  )
}

export default MobileSubtitleHeader
