import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  text: string
  disabled?: boolean
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

const Button: React.FC<Props> = ({ text, mode = 'primary', disabled }) => {
  const icon =
    mode === 'primary' ? 'aeh_circle_icon.png' : 'aeh_circle_icon_secondary.png'
  const bgContainer =
    mode === 'primary' ? 'bg-aeh_secondary' : 'bg-aeh_tertiary'
  const textButton =
    mode === 'primary' ? 'text-aeh_primary' : 'text-aeh_secondary'

  return (
    <motion.div
      whileHover="hover"
      className={`flex flex-row w-fit items-center justify-between ${bgContainer} ${
        disabled ? 'opacity-60' : ''
      } lg:py-4 lg:px-6 py-2 px-4 rounded-full space-x-6 cursor-pointer shadow-lg`}
    >
      <p
        className={`${textButton} text-lg lg:text-2xl  font-sans tracking-widest`}
      >
        {text}
      </p>
      <motion.img
        variants={imageVariants}
        alt="AEH Group circle icon"
        src={`https://res.cloudinary.com/caskchain/image/upload/v1695129447/AEHGroup/${icon}`}
        className="object-contain lg:w-[25px] lg:h-[25px] w-[15px] h-[15px]"
      />
    </motion.div>
  )
}

export default Button
