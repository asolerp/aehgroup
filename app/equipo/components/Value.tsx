import { Parallax } from 'react-scroll-parallax'

export default function Value({ position = 'left' }) {
  const traslate: any = position === 'left' ? [0, 5] : [0, -5]

  return (
    <Parallax translateX={traslate} shouldAlwaysCompleteAnimation>
      <span className="font-sans text-white text-2xl lg:text-4xl">01/</span>
      <h3 className="font-sans text-white text-2xl lg:text-4xl">Passion</h3>
      <h4 className="font-sans text-white my-4 lg:my-8 text-2xl lg:text-4xl lg:w-2/3">
        We undertake each project with devotion, enthusiams and love.
      </h4>
      <p className="font-sans text-white font-light text-xl lg:text-2xl lg:w-4/5">
        Esta pasión se refleja en nuestra dedicación por ofrecer un servicio
        personalizado y orientado al cliente. Cada miembro de nuestro equipo
        está comprometido con alcanzar la perfección en cada etapa de la
        construcción, desde la planificación hasta la ejecución, asegurando que
        cada proyecto sea llevado a cabo con el máximo cuidado y precisión.
      </p>
    </Parallax>
  )
}
