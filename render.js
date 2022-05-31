import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './CompA'

const Render = ({contacto}) => {
  
  const defaultUser = new Contacto('Cesar', 'Oliveros', 'cesaugo92@hotmail.com', true)

  return (
    <div>
        <h1>Nombre: { defaultUser.Nombre } Apellido: { defaultUser.Apellido }</h1>
        <h2>Email: { defaultUser.Email }</h2>
        <h3>Status: { defaultUser.STATUS ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>
    </div>
  )
}
Render.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}
export default Render