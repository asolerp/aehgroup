import React from 'react'

type Props = {
  label: string
  placeholder: string
  type: string
  onChange: (value: string) => void
}

const Input: React.FC<Props> = ({ label, placeholder, type, onChange }) => {
  const height =
    type === 'message' ? 'h-[250px] lg:h-[400px]' : 'h-[50px] lg:h-[100px]'

  return (
    <div className="w-full">
      <p className="font-sans text-aeh_primary text-2xl lg:text-3xl mb-4">
        {label}
      </p>
      {type === 'message' ? (
        <textarea
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`font-sans text-[20px] lg:text-[50px] outline-none text-aeh_primary placeholder-aeh_primary w-full tracking-widest align-top ${height}`}
        ></textarea>
      ) : (
        <input
          type={type}
          className={`font-sans text-[20px] lg:text-[50px] outline-none text-aeh_primary placeholder-aeh_primary w-full tracking-widest align-top ${height}`}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <div className="w-full h-[1px] bg-aeh_primary mt-4"></div>
    </div>
  )
}

export default Input
