import Image from 'next/image'
import React from 'react'

type Props = {
  text: string
  mode?: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({ text, mode = 'primary' }) => {
  const icon =
    mode === 'primary' ? 'aeh_circle_icon.png' : 'aeh_circle_icon_secondary.png'
  const bgContainer =
    mode === 'primary' ? 'bg-aeh_secondary' : 'bg-aeh_tertiary'
  const textButton =
    mode === 'primary' ? 'text-aeh_primary' : 'text-aeh_secondary'

  return (
    <div
      className={`flex flex-row w-fit items-center justify-between ${bgContainer} py-4 px-6 rounded-full space-x-6 cursor-pointer`}
    >
      <p className={`${textButton} text-2xl  font-sans`}>{text}</p>
      <Image
        alt="AEH Group circle icon"
        src={`https://res.cloudinary.com/caskchain/image/upload/v1695129447/AEHGroup/${icon}`}
        width={25}
        height={25}
        className="object-contain"
      />
    </div>
  )
}

export default Button
