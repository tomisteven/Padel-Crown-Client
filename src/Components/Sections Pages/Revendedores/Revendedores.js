import React from 'react'
import './Revendedores.css'
import { GlobalContext } from '../../../context/GlobalState'
import LoadBall from '../../LoadBall'


export default function Revendedores() {

  const $revendedores = React.useContext(GlobalContext)[1]
  console.log($revendedores);

  if(true) {
    return (
      <LoadBall title="Trabajando para mejorar Padel Crown, Proximamente...." />)
  }

  return (
    <div className='contenedor-revendedores'>Revendedores</div>
  )
}
