import React from 'react'

type Props = {
  type: string
  name: string
  label: string
  register?: any
  placeholder: string
  required?: boolean
}

const Input: React.FC<Props> = ({
  type,
  name,
  label,
  register,
  required,
  placeholder,
}) => {
  const height =
    type === 'message' ? 'h-[250px] lg:h-[250px]' : 'h-auto lg:h-auto'

  return (
    <div className="w-full">
      <p className="font-sans text-aeh_primary text-lg lg:text-2xl mb-2">
        {label}
      </p>
      {type === 'message' ? (
        <textarea
          {...register(name, { required })}
          placeholder={placeholder}
          className={`font-sans border-[0.5px] border-gray-400 rounded-lg px-6 py-4 text-[16px] md:text-[20px] lg:text-[20px] outline-none text-aeh_primary placeholder-aeh_primary w-full tracking-widest align-top ${height}`}
        ></textarea>
      ) : (
        <input
          {...register(name, { required })}
          type={type}
          className={`font-sans border-[0.5px] border-gray-400 rounded-lg px-6 py-4 text-[16px] md:text-[20px] lg:text-[20px] text-aeh_primary placeholder-aeh_primary w-full tracking-widest align-top ${height}`}
          placeholder={placeholder}
        />
      )}
      {/* <div className="w-full h-[1px] bg-aeh_primary mt-4"></div> */}
    </div>
  )
}

export default Input
