import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TranslateYAnimation from './Animations/TranslateYAnimation'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <div className="bg-aeh_secondary px-6 lg:px-20 divide-y-2 divide-aeh_tertiary">
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 py-10 space-y-6">
        <div className="col-span-1 lg:px-10 flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-xl">
            {t('contact')}
          </p>
          <TranslateYAnimation>
            <Link href="/contacta">
              <p className="font-sans text-[20px] lg:text-[35px] tracking-widest text-aeh_tertiary">
                {t('form')}
              </p>
            </Link>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1  flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-xl ">
            {t('callUs')}
          </p>
          <TranslateYAnimation>
            <p className="font-sans text-[20px] lg:text-[35px] tracking-widest text-aeh_tertiary">
              +34 633 484 607
            </p>
          </TranslateYAnimation>
        </div>
        <div className="col-span-1  flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-xl">
            {t('writeUs')}
          </p>
          <div className="flex flex-row h-full w-wull">
            <TranslateYAnimation>
              <p className="font-sans text-[20px] lg:text-[35px] tracking-widest text-aeh_tertiary">
                {`+34 635 157 245`}
              </p>
            </TranslateYAnimation>
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:flex-col lg:space-y-2 justify-between items-center py-4">
        <div className="flex flex-row justify-between items-center">
          <TranslateYAnimation>
            <p className="font-sans text-[30px] lg:text-[60px] font-light  tracking-widest text-aeh_tertiary">
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
      </div>
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
