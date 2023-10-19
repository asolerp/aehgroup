import { usePathname } from 'next/navigation'
import { useState } from 'react'
import debounce from 'lodash.debounce'

type Path = '/home' | '/projectos' | '/servicios' | '/nosotros'

type ImageMap = {
  '/home': string
  '/proyectos': string
  '/servicios': string
  '/equipo': string
  '/contacta': string
  [key: string]: string | undefined
}

const mapImagesByPath: ImageMap = {
  '/home':
    'https://res.cloudinary.com/caskchain/image/upload/v1697697796/AEHGroup/PP50/PP50-3.jpg',
  '/proyectos':
    'https://res.cloudinary.com/caskchain/image/upload/v1697698155/AEHGroup/B55/B55-18-min.jpg',
  '/servicios':
    'https://res.cloudinary.com/caskchain/image/upload/v1697697801/AEHGroup/S9/Serralet-11.jpg',
  '/equipo':
    'https://res.cloudinary.com/caskchain/image/upload/v1697698160/AEHGroup/B55/B55-52-min.jpg',
  '/contacta':
    'https://res.cloudinary.com/caskchain/image/upload/v1697699056/AEHGroup/JV22/JV22-14-min.jpg',
}

export default function useMenuHandler() {
  const pathname = usePathname()
  const [imageSrc, setImageSrc] = useState(mapImagesByPath[pathname])

  const getIsMenuActive = (path: Path) => {
    return pathname.includes(path)
  }

  const handleImageChange = debounce((path: Path) => {
    console.log('path', path)
    setImageSrc(mapImagesByPath[path])
  }, 300)

  return {
    handleImageChange,
    mapImagesByPath,
    getIsMenuActive,
    imageSrc,
  }
}
