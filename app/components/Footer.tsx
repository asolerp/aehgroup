import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TranslateYAnimation from './Animations/TranslateYAnimation'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <div className="bg-aeh_secondary px-6 lg:px-20 divide-y-2 divide-aeh_tertiary">
      <div className="flex flex-col items-start lg:grid lg:grid-cols-4 lg:gap-4 py-10 space-y-6 lg:space-y-0">
        <div className="col-span-1 lg:px-10 flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-lg lg:text-xl font-bold">
            Menu
          </p>
          <TranslateYAnimation>
            <Link href="/contacta">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                Inicio
              </p>
            </Link>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <Link href="/proyectos">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                Proyectos
              </p>
            </Link>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <Link href="/servicios">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                Servicios
              </p>
            </Link>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <Link href="/equipo">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                Sobre nosotros
              </p>
            </Link>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <Link href="/contacta">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                Contacto
              </p>
            </Link>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1 lg:px-10 flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-lg lg:text-xl font-bold">
            Textos Legales
          </p>
          <TranslateYAnimation>
            <Link href="/contacta">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                Política de privacidad
              </p>
            </Link>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <Link href="/contacta">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                Política de cookies
              </p>
            </Link>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1 lg:px-10  flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-2 text-lg lg:text-xl font-bold">
            {t('followUs')}
          </p>
          <TranslateYAnimation>
            <div className="p-4 lg:p-3 bg-white rounded-full w-fit">
              <a href="https://www.instagram.com/aehgroup_construction/">
                <Image
                  src="https://res.cloudinary.com/caskchain/image/upload/v1695040186/AEHGroup/aeh_instagram.png"
                  alt="AEH Group Instagram"
                  width={15}
                  height={15}
                  className="object-contain lg:w-[20px] lg:h-[20px] w-[25px] h-[25px]"
                />
              </a>
            </div>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1 lg:px-10  flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-lg lg:text-xl font-bold">
            {t('contact')}
          </p>
          <div className="flex flex-col h-full w-wull">
            <TranslateYAnimation>
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                info@aehgroup.es
              </p>
            </TranslateYAnimation>
            <TranslateYAnimation>
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                {`+34 635 157 245`}
              </p>
            </TranslateYAnimation>
            <TranslateYAnimation>
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh_tertiary">
                +34 633 484 607
              </p>
            </TranslateYAnimation>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row lg:flex-col lg:space-y-2 justify-between items-center py-4">
        <div className="flex flex-row justify-between items-center">
          <TranslateYAnimation>
            <p className="font-sans text-lg lg:text-xl lg:text-[60px] font-light  tracking-widest text-aeh_tertiary">
              {t('followUs')}
            </p>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1 flex items-center">
          <div className="p-4 lg:p-8 bg-white rounded-full">
            <a href="https://www.instagram.com/aehgroup_construction/">
              <Image
                src="https://res.cloudinary.com/caskchain/image/upload/v1695040186/AEHGroup/aeh_instagram.png"
                alt="AEH Group Instagram"
                width={35}
                height={35}
                className="object-contain lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]"
              />
            </a>
          </div>
        </div>
      </div> */}
      <div className="py-10">
        <p className="text-center text-aeh_tertiary font-sans text-xs lg:text-lg">
          © 2023 | AEH Group | Andratx | <span>COOKIES POLICY</span> |{' '}
          <Link href="/privacidad">
            <span>PRIVACY POLICY</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
