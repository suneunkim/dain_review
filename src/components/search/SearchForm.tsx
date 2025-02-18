import { useSearchModalStore } from '@/store'
import { SubmitHandler, useForm } from 'react-hook-form'
import SearchIcon from '@/assets/icons/home/mobile/mobile-search.svg'
import Xicon from '@/assets/icons/home/mobile/mobile-input-x-icon.svg'

type SearchFormData = {
  searchTerm: string
}

type Props = {
  onSubmit: SubmitHandler<SearchFormData>
  searchPage?: boolean // SearchModal 닫기 또는 검색어 삭제
  keyword?: string
}

const SearchForm = ({ onSubmit, searchPage = true, keyword = '' }: Props) => {
  const { closeModal } = useSearchModalStore()
  const { handleSubmit, register, setValue, watch } = useForm<SearchFormData>({
    defaultValues: { searchTerm: keyword }
  })

  const handleClear = () => {
    setValue('searchTerm', '')
  }

  const isKeyword = watch('searchTerm')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex h-10 items-center gap-2 ${searchPage && 'mx-auto w-[328px] lg:mt-[48px] lg:w-[746px]'} `}>
      <div className="flex w-full items-center justify-center gap-2 border-b border-gray-90 py-2">
        <SearchIcon />
        <input
          className="w-full text-body-1 text-gray-40 outline-none ring-0 focus:text-gray-80"
          placeholder="찾고있는 체험단을 검색해보세요"
          {...register('searchTerm', { required: true })}
        />
        {isKeyword && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-auto">
            <Xicon />
          </button>
        )}
      </div>
      {!searchPage && (
        <button
          className="ml-auto min-w-[36px]"
          type="button"
          onClick={closeModal}>
          닫기
        </button>
      )}
    </form>
  )
}

export default SearchForm
