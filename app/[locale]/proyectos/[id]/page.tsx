'use client'

import LayoutWithMainTitleAnimation from '@/app/components/LayoutWithMainTitleAnimation'

import useGetProjects from '../hooks/useGetProjects'
import Image from 'next/image'
import ImageViewer from 'react-simple-image-viewer'

import { useParams } from 'next/navigation'
import { useCallback, useState } from 'react'

export default function ProjectScreen() {
  const params = useParams()
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const { id } = params

  const { getProjectById } = useGetProjects()
  const project: any = id && getProjectById(id)

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <>
      {isViewerOpen && (
        <ImageViewer
          src={project.images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
      <LayoutWithMainTitleAnimation title={project?.title || ''}>
        {project ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 px-4 lg:px-32 mb-20">
            {project?.images?.map((image: any, index: number) => (
              <div className="col-span-1" key={index}>
                <Image
                  alt="AEH Group Hero"
                  onClick={() => openImageViewer(index)}
                  placeholder="blur"
                  blurDataURL="https://res.cloudinary.com/caskchain/image/upload/v1696229637/AEHGroup/AEHGROUP_LOGO.jpg"
                  src={image}
                  width={480}
                  height={480}
                  className="object-cover lg:w-[480px] lg:h-[480px] w-[200px] h-[200px]"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full w-screen flex justify-center items-center">
            <h2 className="font-sans text-4xl text-aeh-800 tracking-widest">
              El proyecto seleccionado no existe
            </h2>
          </div>
        )}
      </LayoutWithMainTitleAnimation>
    </>
  )
}
