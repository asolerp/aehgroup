const projects = [
  {
    id: 1,
    mainImage:
      'https://res.cloudinary.com/caskchain/image/upload/v1697698150/AEHGroup/B55/B55-46-min.jpg',
    images: [
      'https://res.cloudinary.com/caskchain/image/upload/v1697698152/AEHGroup/B55/B55-7-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698152/AEHGroup/B55/B55-8-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698160/AEHGroup/B55/B55-52-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698153/AEHGroup/B55/B55-12-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698154/AEHGroup/B55/B55-14-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698151/AEHGroup/B55/B55-4-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698151/AEHGroup/B55/B55-3-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698155/AEHGroup/B55/B55-19-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698156/AEHGroup/B55/B55-24-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698157/AEHGroup/B55/B55-25-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698157/AEHGroup/B55/B55-28-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698159/AEHGroup/B55/B55-36-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697698149/AEHGroup/B55/B55-53-min.jpg',
    ],
    year: 2023,
    title: 'B55',
    description: `
        Reforma integral de vivienda modificando la distribución inicial para un mejor aprovechamiento de los espacios. En este proyecto unificamos calidez, diseño y funcionalidad. 
        Distribución e interiorismo: Laura Martínez – Arquitecta técnica de AeH Group.
        `,
  },
  {
    id: 2,
    mainImage:
      'https://res.cloudinary.com/caskchain/image/upload/v1697699058/AEHGroup/JV22/JV22-16-min.jpg',
    images: [
      'https://res.cloudinary.com/caskchain/image/upload/v1697699051/AEHGroup/JV22/JV22-1-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697699053/AEHGroup/JV22/JV22-3-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697699054/AEHGroup/JV22/JV22-5-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697699055/AEHGroup/JV22/JV22-13-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697699057/AEHGroup/JV22/JV22-15-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697699051/AEHGroup/JV22/JV22-17-min.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697699052/AEHGroup/JV22/JV22-18-min.jpg',
    ],
    year: 2022,
    title: 'JV22',
    description: `
    Remodelación de baños y sustitución de pavimento existente con la finalidad de aportar frescura y luminosidad a la vivienda.
        `,
  },
  {
    id: 3,
    mainImage:
      'https://res.cloudinary.com/caskchain/image/upload/v1697697802/AEHGroup/S9/Serralet-2.jpg',
    images: [
      'https://res.cloudinary.com/caskchain/image/upload/v1697697802/AEHGroup/S9/Serralet-1.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697802/AEHGroup/S9/Serralet-10.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697801/AEHGroup/S9/Serralet-11.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697800/AEHGroup/S9/Serralet-9.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697799/AEHGroup/S9/Serralet-3.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697799/AEHGroup/S9/Serralet-8.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697797/AEHGroup/S9/Serralet-5.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697799/AEHGroup/S9/Serralet-7.jpg',
      'https://res.cloudinary.com/caskchain/image/upload/v1697697802/AEHGroup/S9/Serralet-4.jpg',
    ],
    year: 2022,
    title: 'S9',
    description: `
    Reforma integral y ampliación de vivienda unifamiliar manteniendo el carácter tradicional mallorquín y fusionándolo con sistemas de construcción actuales. Arquitectos: Pérez Studio
        `,
  },
]

const useGetProjects = () => {
  const getProjectById = (id: any) => {
    return projects.find((project) => project.title === id)
  }

  return {
    getProjectById,
    projects,
  }
}

export default useGetProjects
