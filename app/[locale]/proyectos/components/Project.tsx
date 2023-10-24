import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const Project: React.FC<any> = ({ project, orientation = 'left' }) => {
  const t = useTranslations('Common')
  const orientationClassName =
    orientation === 'left' ? 'lg:text-right' : 'lg:text-left'

  const orderFirstColumnClassName =
    orientation === 'left' ? 'lg:order-1' : 'lg:order-2'

  const orderSecondColumnClassName =
    orientation === 'left' ? 'lg:order-2' : 'lg:order-1'

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2">
      <div
        className={`col-span-1 flex items-center justify-center ${orderFirstColumnClassName}`}
      >
        <Image
          src={project.mainImage}
          alt="AEH Group project 1"
          width={620}
          height={620}
          className="object-cover w-full lg:h-[620px] h-[200px] mb-6 lg:mb-0"
        />
      </div>
      <div
        className={`col-span-1 space-y-3 lg:space-y-5 flex flex-col justify-center lg:px-14  ${orderSecondColumnClassName}`}
      >
        <h2
          className={`font-sans text-xl  lg:text-2xl text-aeh-700 tracking-widest ${orientationClassName}`}
        >
          {project.year}
        </h2>
        <h3
          className={`font-sans text-2xl lg:text-3xl text-aeh-300 tracking-widest ${orientationClassName}`}
        >
          {project.title}
        </h3>
        <p
          className={`font-thin font-sans text-aeh-800 leading-normal lg:text-lg tracking-widest ${orientationClassName} `}
        >
          {project.description}
        </p>
        <Link href={`proyectos/${project.title}`}>
          <h2
            className={`font-sans text-lg  lg:text-2xl text-aeh-700 tracking-widest underline ${orientationClassName}`}
          >
            {t('seeMore')}
          </h2>
        </Link>
      </div>
    </div>
  )
}

export default Project
