import Button from '@/app/components/Button'
import Image from 'next/image'
import ScaleYAnimation from '@/app/components/Animations/ScaleYAnimation'
import { Parallax } from 'react-scroll-parallax'
import FadeInAnimation from '@/app/components/Animations/FadeInAnimation'
import Spacer from '@/app/components/Spacer'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function ServicesSection() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <FadeInAnimation>
          <h2 className="text-gray-600 font-sans text-3xl lg:text-[70px] tracking-widest text-center">
            {t('services.header')}
          </h2>
        </FadeInAnimation>
      </div>
      <Spacer className="mb-10 lg:mb-32" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 px-4 lg:px-0">
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_3.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_2.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_3.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
      </div>
      <div className="px-6 lg:px-32">
        <div className="w-full mt-20">
          <FadeInAnimation>
            <div className="flex flex-row justify-end">
              <h3 className="font-sans text-3xl lg:text-[50px] text-gray-600 tracking-widest font-normal lg:w-3/5 lg:leading-tight self-end">
                {t('services.title')}
              </h3>
            </div>
          </FadeInAnimation>
        </div>
        <Spacer className="h-10 lg:h-20" />
        <div className="flex flex-col lg:grid lg:grid-cols-2 ">
          <div className="col-span-1 mb-10 lg:mb-0 pl-14 lg:pl-0">
            <FadeInAnimation>
              <h4 className="text-xl lg:text-3xl font-thin font-sans text-gray-600 leading-normal tracking-widest">
                {t('services.subtitle')}
              </h4>
            </FadeInAnimation>
          </div>
          <div className="col-span-1 flex flex-col justify-end items-start lg:items-end">
            <FadeInAnimation>
              <Link href="/servicios">
                <Button mode="primary" text={t('buttons.services')} />
              </Link>
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
