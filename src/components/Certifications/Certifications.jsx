import LaunchIcon from '@material-ui/icons/Launch'
import { certifications } from '../../portfolio'
import './Certifications.css'

const Certifications = () => {
  if (!certifications.length) return null

  return (
    <section id='certifications' className='section certifications'>
      <h2 className='section__title'>Certificaciones</h2>

      <div className='certifications__grid'>
        {certifications.map((certification) => (
          <article key={`${certification.entity}-${certification.name}`} className='certification'>
            <p className='certification__entity'>{certification.entity}</p>
            <h3>{certification.name}</h3>

            {certification.id ? (
              <p className='certification__id'>
                ID / referencia: {certification.id}
              </p>
            ) : (
              <p className='certification__id'>ID pendiente de agregar</p>
            )}

            {certification.preview ? (
              <a
                href={certification.preview}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Ver certificado ${certification.name}`}
                className='link certification__link'
              >
                Ver certificación <LaunchIcon fontSize='small' />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
