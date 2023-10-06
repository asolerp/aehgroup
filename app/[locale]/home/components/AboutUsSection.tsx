import React from 'react'
import Button from '@/app/components/Button'
import FadeInAnimation from '@/app/components/Animations/FadeInAnimation'
import Spacer from '@/app/components/Spacer'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AboutUsSection() {
  const t = useTranslations('HomePage')
  return (
    <div className="px-6 lg:px-32">
      <div className="w-full">
        <div>
          <FadeInAnimation>
            <h3 className="font-sans text-3xl lg:text-[50px] text-gray-600 tracking-widest font-normal lg:w-3/5 lg:leading-tight">
              {t('about.title')}
            </h3>
          </FadeInAnimation>
        </div>
      </div>
      <Spacer className="h-10 lg:h-20" />
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 ">
        <div className="col-span-1 lg:self-end">
          <FadeInAnimation>
            <Link href="/equipo">
              <Button mode="primary" text={t('buttons.about')} />
            </Link>
          </FadeInAnimation>
        </div>
        <div className="col-span-1 mb-10 lg:mb-0 pl-14 lg:pl-0">
          <FadeInAnimation>
            <h4 className="text-xl lg:text-3xl font-thin font-sans text-gray-600 leading-normal tracking-widest">
              {t('about.subtitle')}
            </h4>
          </FadeInAnimation>
        </div>
      </div>
    </div>
  )
}
