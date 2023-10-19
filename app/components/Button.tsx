import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  text: string
  disabled?: boolean
  outline?: boolean
  mode?: 'primary' | 'secondary'
}

const imageVariants = {
  hover: {
    scale: 1.6,
    transition: {
      duration: 0.3,
    },
  },
}

const Button: React.FC<Props> = ({
  text,
  mode = 'primary',
  outline = false,
  disabled,
}) => {
  const icon =
    mode === 'primary' ? 'aeh_circle_icon.png' : 'aeh_circle_icon_secondary.png'
  const bgContainer = outline
    ? 'bg-transparent'
    : mode === 'primary'
    ? 'bg-aeh_secondary'
    : 'bg-aeh-500'
  const textButton = outline
    ? 'text-white'
    : mode === 'primary'
    ? 'text-aeh-500'
    : 'text-aeh_secondary'

  return (
    <motion.div
      whileHover="hover"
      className={`flex flex-row w-fit items-center justify-between ${bgContainer} ${
        disabled ? 'opacity-60' : ''
      } lg:py-4 lg:px-6 py-2 px-4 rounded-full space-x-6 cursor-pointer shadow-md ${
        outline ? 'border-2 border-white bg-transparent' : ''
      }'}`}
    >
      <p
        className={`${textButton} text-sm lg:text-2xl  font-sans tracking-widest`}
      >
        {text}
      </p>
      {!outline && (
        <motion.img
          variants={imageVariants}
          alt="AEH Group circle icon"
          src={`https://res.cloudinary.com/caskchain/image/upload/v1695129447/AEHGroup/${icon}`}
          className="object-contain lg:w-[25px] lg:h-[25px] w-[15px] h-[15px]"
        />
      )}
    </motion.div>
  )
}

export default Button
