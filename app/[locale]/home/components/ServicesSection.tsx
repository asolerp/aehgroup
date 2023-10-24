import Button from '@/app/components/Button'
import Image from 'next/image'

import FadeInAnimation from '@/app/components/Animations/FadeInAnimation'
import Spacer from '@/app/components/Spacer'
import { useTranslations } from 'next-intl'

import { useRouter } from 'next-intl/client'

export default function ServicesSection() {
  const t = useTranslations('HomePage')
  const router = useRouter()

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <FadeInAnimation>
          <h2 className="text-aeh-700 font-sans text-3xl lg:text-[50px] tracking-widest text-center">
            {t('services.header')}
          </h2>
        </FadeInAnimation>
      </div>
      <Spacer className="mb-10 lg:mb-32" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 px-4 lg:px-0">
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697697802/AEHGroup/S9/Serralet-2.jpg"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697698151/AEHGroup/B55/B55-4-min.jpg"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697699052/AEHGroup/JV22/JV22-18-min.jpg"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697698152/AEHGroup/B55/B55-8-min.jpg"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697698153/AEHGroup/B55/B55-12-min.jpg"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            alt="AEH Group Hero"
            src="https://res.cloudinary.com/caskchain/image/upload/v1697698158/AEHGroup/B55/B55-34-min.jpg"
            width={480}
            height={480}
            className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
          />
        </div>
      </div>
      <Spacer className="h-10 lg:h-20" />
      <div className="px-6 md:px-10 lg:px-32">
        <div className="w-full">
          <FadeInAnimation>
            <div className="flex flex-row justify-end md:justify-start lg:justify-start">
              <h3 className="font-sans text-3xl lg:text-[40px] text-aeh-700 tracking-widest font-normal lg:w-full lg:leading-tight self-end">
                {t('services.title')}
              </h3>
            </div>
          </FadeInAnimation>
        </div>
        <Spacer className="h-10 lg:h-8" />
        <div className="flex flex-col">
          <div className="mb-10 lg:mb-0 md:pl-0 pl-14 lg:pl-0 space-y-4">
            <FadeInAnimation>
              <h4 className="text-lg lg:text-xl font-thin font-sans text-aeh-700 leading-normal tracking-widest">
                {t('services.subtitle_1')}
              </h4>
            </FadeInAnimation>
            <FadeInAnimation>
              <h4 className="text-lg lg:text-xl font-thin font-sans text-aeh-700 leading-normal tracking-widest">
                {t('services.subtitle_2')}
              </h4>
            </FadeInAnimation>
          </div>
          <Spacer className="h-0 lg:h-10" />
          <div className="flex flex-col justify-start items-start lg:items-start">
            <FadeInAnimation>
              <Button
                mode="primary"
                onClick={() => router.push('/servicios')}
                text={t('buttons.services')}
              />
            </FadeInAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
