import React from 'react'
import './LoadBall.css'
import ball from '../assets/load-ball.png'

export default function LoadBall() {
  return (
    <div className='load-ball'>
        <img className='ball-img' src={ball} alt=""/>
        <h6 className='title-ball'>Padel Crown</h6>
    </div>
  )
}
