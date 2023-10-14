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
    type === 'message' ? 'h-[250px] lg:h-[400px]' : 'h-[50px] lg:h-[100px]'

  return (
    <div className="w-full">
      <p className="font-sans text-aeh_primary text-2xl lg:text-2xl mb-4">
        {label}
      </p>
      {type === 'message' ? (
        <textarea
          {...register(name, { required })}
          placeholder={placeholder}
          className={`font-sans text-[20px] md:text-[20px] lg:text-[30px] outline-none text-aeh_primary placeholder-aeh_primary w-full tracking-widest align-top ${height}`}
        ></textarea>
      ) : (
        <input
          {...register(name, { required })}
          type={type}
          className={`font-sans text-[20px] md:text-[20px] lg:text-[30px] outline-none text-aeh_primary placeholder-aeh_primary w-full tracking-widest align-top ${height}`}
          placeholder={placeholder}
        />
      )}
      <div className="w-full h-[1px] bg-aeh_primary mt-4"></div>
    </div>
  )
}

export default Input
