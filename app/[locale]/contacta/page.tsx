'use client'

import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'
import { useTranslations } from 'next-intl'
import Spacer from '@/app/components/Spacer'

export default function Contacta() {
  const t = useTranslations('ContactPage')
  return (
    <LayoutWithMainTitleAnimation title={t('title')} subtitle={t('subtitle')}>
      <div className="flex flex-col w-full ">
        <div className="flex flex-col mt-20 md:px-40 px-10 md:grid md:grid-cols-2 md:gap-8">
          <div>
            <ContactForm />
            <Spacer className="pb-10 lg:pb-0" />
          </div>
          <ContactInfo />
        </div>
      </div>
    </LayoutWithMainTitleAnimation>
  )
}
