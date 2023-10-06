import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <div className="bg-aeh_secondary px-6 lg:px-20 divide-y-2 divide-aeh_tertiary">
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 py-10 space-y-6">
        <div className="col-span-1 lg:px-10 flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-xl">
            {t('contact')}
          </p>
          <Link href="/contacta">
            <p className=" cursor-pointer font-sans text-xl lg:text-4xl text-aeh_tertiary">
              {t('form')}
            </p>
          </Link>
        </div>
        <div className="col-span-1  flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-xl ">
            {t('callUs')}
          </p>
          <p className="font-sans text-xl lg:text-4xl text-aeh_tertiary">
            +34 633 484 607
          </p>
        </div>
        <div className="col-span-1  flex flex-col justify-end">
          <p className="font-sans  text-aeh_tertiary mb-1 text-xl">
            {t('writeUs')}
          </p>
          <p className="font-sans text-xl lg:text-4xl text-aeh_tertiary">
            +34 635 157 245
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center py-4">
        <div className="flex flex-row justify-between items-center">
          <p className="font-sans text-[20px] lg:text-[50px] tracking-widest text-aeh_tertiary">
            {t('followUs')}
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <div className="p-4 lg:p-8 bg-white rounded-full">
            <Image
              src="https://res.cloudinary.com/caskchain/image/upload/v1695040186/AEHGroup/aeh_instagram.png"
              alt="AEH Group Instagram"
              width={35}
              height={35}
              className="object-contain lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]"
            />
          </div>
        </div>
      </div>
      <div className="py-10">
        <p className="text-center text-aeh_tertiary font-sans text-xs lg:text-lg">
          © 2023 | AEH Group | Andratx | LEGAL NOTICE COOKIES POLICY | PRIVACY
          POLICY
        </p>
      </div>
    </div>
  )
}
