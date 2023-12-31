import FadeInAnimation from '@/app/components/Animations/FadeInAnimation'
import Value from './Value'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
export default function Values() {
  const t = useTranslations('AboutPage.values')

  return (
    <>
      <FadeInAnimation>
        <div className="py-20 w-full flex justify-center">
          <h2 className="text-gray-600 font-sans text-[32px] lg:text-[50px] tracking-widest text-center lg:w-2/3 px-10 lg:px-0">
            {t('title')}
          </h2>
        </div>
      </FadeInAnimation>
      <div className="relative bg-aeh_primary py-20 lg:px-20 w-full ">
        <div className="flex flex-row lg:block overflow-x-auto w-full space-x-20">
          <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
            <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
              <Value
                index={1}
                title={t('value_1.title')}
                subtitle={t('value_1.subtitle')}
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
            <div className="hidden lg:block lg:col-span-2" />
            <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
              <Value
                position="right"
                index={2}
                title={t('value_2.title')}
                subtitle={t('value_2.subtitle')}
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
            <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
              <Value
                index={3}
                title={t('value_3.title')}
                subtitle={t('value_3.subtitle')}
              />
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-5 lg:mb-20 w-screen lg:w-auto">
            <div className="hidden lg:block lg:col-span-2" />
            <div className="lg:col-span-3 w-screen p-5 lg:p-0 lg:w-auto">
              <Value
                position="right"
                index={4}
                title={t('value_4.title')}
                subtitle={t('value_4.subtitle')}
              />
            </div>
          </div>
        </div>
        <motion.img
          animate={{ translateX: 10 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
          src="https://res.cloudinary.com/caskchain/image/upload/v1695409776/AEHGroup/aeh_icon_arrow.png"
          className="absolute left-8 bottom-8 lg:hidden w-14 h-6"
        />
      </div>
    </>
  )
}
