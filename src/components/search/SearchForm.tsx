import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useSearchModalStore } from '@/store'
import SearchIcon from '@/assets/icons/home/mobile/mobile-search.svg'

type SearchFormData = {
  searchTerm: string
}

type Props = {
  onSubmit: SubmitHandler<SearchFormData>
}

const SearchForm = ({ onSubmit }: Props) => {
  const { closeModal } = useSearchModalStore()
  const { handleSubmit, register } = useForm<SearchFormData>()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-10 items-center gap-2 border-b border-gray-90">
      <SearchIcon />
      <input
        className="text-body-1 text-gray-40 outline-none ring-0 focus:text-gray-80"
        placeholder="찾고있는 체험단을 검색해보세요"
        {...register('searchTerm', { required: true })}
      />
      <button
        className="ml-auto"
        type="button"
        onClick={closeModal}>
        닫기
      </button>
    </form>
  )
}

export default SearchForm
