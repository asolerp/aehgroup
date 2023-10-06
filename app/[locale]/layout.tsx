import { NextIntlClientProvider, createTranslator } from 'next-intl'
import { notFound } from 'next/navigation'
import MainLayout from '../components/MainLayout'
import { ReactNode } from 'react'
import Script from 'next/script'

type Props = {
  children: ReactNode
  params: { locale: string }
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return ['en', 'de', 'es'].map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale)

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages })

  return {
    title: t('LocaleLayout.title'),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages
  try {
    messages = await getMessages(locale)
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <Script
        src="https://cdn-cookieyes.com/client_data/ba962d7afd13c79e2665a087/script.js"
        id="cookieyes"
        type="text/javascript"
      />
      {/* <head>
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/ba962d7afd13c79e2665a087/script.js"
        ></script>
      </head> */}
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
