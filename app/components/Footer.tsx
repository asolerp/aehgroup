import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import TranslateYAnimation from './Animations/TranslateYAnimation'
import { useRouter } from 'next-intl/client'

export default function Footer() {
  const t = useTranslations('Footer')
  const t_menu = useTranslations('Menu')
  const router = useRouter()
  return (
    <div className="bg-aeh_secondary px-6 lg:px-20 divide-y-2 divide-aeh-700">
      <div className="flex flex-col items-start lg:grid lg:grid-cols-4 lg:gap-4 py-10 space-y-6 lg:space-y-0">
        <div className="col-span-1 lg:px-10 flex flex-col justify-end">
          <p className="font-sans  text-aeh-700 mb-1 text-lg lg:text-xl font-bold">
            Menu
          </p>
          <TranslateYAnimation>
            <p
              onClick={() => router.push('/home')}
              className="cursor-pointer font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700"
            >
              {t_menu('home')}
            </p>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <p
              onClick={() => router.push('/proyectos')}
              className="cursor-pointer font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700"
            >
              {t_menu('projects')}
            </p>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <p
              onClick={() => router.push('/servicios')}
              className="cursor-pointer font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700"
            >
              {t_menu('services')}
            </p>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <p
              onClick={() => router.push('/equipo')}
              className="cursor-pointer font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700"
            >
              {t_menu('about')}
            </p>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <p
              onClick={() => router.push('/contacta')}
              className="cursor-pointer font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700"
            >
              {t_menu('contact')}
            </p>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1 lg:px-10 flex flex-col justify-end">
          <p className="font-sans  text-aeh-700 mb-1 text-lg lg:text-xl font-bold">
            {t('legalTexts')}
          </p>
          <TranslateYAnimation>
            <Link href="/politica-de-privacidad">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700">
                {t('privacyPolicy')}
              </p>
            </Link>
          </TranslateYAnimation>
          <TranslateYAnimation>
            <Link href="/politica-de-cookies">
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700">
                {t('cookiesPolicy')}
              </p>
            </Link>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1 lg:px-10  flex flex-col justify-end">
          <p className="font-sans  text-aeh-700 mb-2 text-lg lg:text-xl font-bold">
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
          <p className="font-sans  text-aeh-700 mb-1 text-lg lg:text-xl font-bold">
            {t('contact')}
          </p>
          <div className="flex flex-col h-full w-wull">
            <TranslateYAnimation>
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700">
                info@aehgroup.es
              </p>
            </TranslateYAnimation>
            <TranslateYAnimation>
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700">
                {`+34 635 157 245`}
              </p>
            </TranslateYAnimation>
            <TranslateYAnimation>
              <p className="font-sans text-[15px] lg:text-lg tracking-widest text-aeh-700">
                +34 633 484 607
              </p>
            </TranslateYAnimation>
          </div>
        </div>
      </div>
      <div className="py-10">
        <p className="text-center text-aeh-700 font-sans text-xs lg:text-lg">
          © 2023 | AEH Group | Andratx
        </p>
      </div>
    </div>
  )
}
