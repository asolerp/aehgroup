import { usePathname } from 'next/navigation'
import { useState } from 'react'
import debounce from 'lodash.debounce'

type Path = '/home' | '/projectos' | '/servicios' | '/nosotros'

type ImageMap = {
  '/home': string
  '/projectos': string
  '/servicios': string
  '/nosotros': string
  [key: string]: string | undefined
}

const mapImagesByPath: ImageMap = {
  '/home':
    'https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png',
  '/projectos':
    'https://res.cloudinary.com/caskchain/image/upload/v1695192615/AEHGroup/aeh_bg_3.png',
  '/servicios':
    'https://res.cloudinary.com/caskchain/image/upload/v1695115179/AEHGroup/aeh_bg_2.png',
  '/nosotros':
    'https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png',
}

export default function useMenuHandler() {
  const pathname = usePathname()
  const [imageSrc, setImageSrc] = useState(mapImagesByPath[pathname])

  const getIsMenuActive = (path: Path) => {
    return pathname === path
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
