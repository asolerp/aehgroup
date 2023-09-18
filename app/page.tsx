import Image from 'next/image'
import { CountDown } from './components/countDown/CountDown'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <Image
          alt="AEH Group"
          width={1920}
          height={1080}
          src="https://res.cloudinary.com/caskchain/image/upload/v1695035708/AEHGroup/aeh_bg_1.png"
          className="h-full object-cover lg:w-full "
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-auto lg:overflow-hidden bg-[#EFE9E2] bg-fixed opacity-80">
          <div className="flex flex-col justify-between h-full py-10 lg:py-20 items-center">
            <Image
              alt="AEH Group logo"
              width={236}
              height={159}
              src="https://res.cloudinary.com/caskchain/image/upload/v1695036478/AEHGroup/aeh_logo.png"
              className="h-36"
            />
            <div className="flex flex-col items-center space-y-10 w-full mt-22">
              <div className="flex flex-col items-center">
                <h1 className="text-[60px] lg:text-[128px] tracking-wider font-sans text-[#84A095] drop-shadow-lg mb-0">
                  WEBSITE
                </h1>
                <h1 className="text-[30px] lg:text-[64px] tracking-widest font-sans text-[#84A095] drop-shadow-lg">
                  EN CONSTRUCCIÓN
                </h1>
              </div>
              <CountDown />
            </div>
            <div className="flex flex-row space-x-4 mt-28 pb-10 lg:pb-0 lg:mt-0 lg:space-x-28">
              <a
                className="font-sans text-md lg:text-xl text-[#3F5032] underline"
                href="mailto: info@aehgroup.es"
              >
                info@aehgroup.es
              </a>
              {/* <Link href="https://www.instagram.com/aehgroup_construction"> */}
              <Image
                alt="AEH Group intagram"
                width={32}
                height={32}
                src="https://res.cloudinary.com/caskchain/image/upload/v1695040186/AEHGroup/aeh_instagram.png"
              />
              {/* </Link> */}
              <a
                className="font-sans text-md lg:text-xl text-[#3F5032] underline"
                href="tel:0034635157245"
              >
                +34 635157245
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
