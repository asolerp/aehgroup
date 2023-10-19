import React from 'react'
import Button from '@/app/components/Button'
import FadeInAnimation from '@/app/components/Animations/FadeInAnimation'
import Spacer from '@/app/components/Spacer'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AboutUsSection() {
  const t = useTranslations('HomePage')
  return (
    <div className="px-6 md:px-10 lg:px-32">
      <div className="w-full">
        <div>
          <FadeInAnimation>
            <h3 className="font-sans text-2xl lg:text-[40px] text-aeh-700 tracking-widest font-normal lg:w-full lg:leading-tight">
              {t('about.title')}
            </h3>
          </FadeInAnimation>
        </div>
      </div>
      <Spacer className="h-10 lg:h-8" />
      <div className="flex flex-col-reverse">
        <div className="">
          <FadeInAnimation>
            <Link href="/equipo">
              <Button mode="primary" text={t('buttons.about')} />
            </Link>
          </FadeInAnimation>
        </div>
        <Spacer className="h-0 lg:h-10" />
        <div className="mb-10 lg:mb-0 md:pl-0 pl-14 lg:pl-0 space-y-4">
          <FadeInAnimation>
            <h4 className="text-lg lg:text-xl font-thin font-sans text-aeh-700 leading-normal tracking-widest">
              {t('about.subtitle_1')}
            </h4>
          </FadeInAnimation>
          <FadeInAnimation>
            <h4 className="text-lg lg:text-xl font-thin font-sans text-aeh-700 leading-normal tracking-widest">
              {t('about.subtitle_2')}
            </h4>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  )
}
