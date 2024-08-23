interface LabelProps {
  id: string
  name: string
  require: boolean
}

export const Label: React.FC<LabelProps> = ({ id, name, require }) => {
  return (
    <div className="mb-2 flex">
      <label htmlFor={id}>{name}</label>
      {require && <p className="text-red-50">*</p>}
    </div>
  )
}
