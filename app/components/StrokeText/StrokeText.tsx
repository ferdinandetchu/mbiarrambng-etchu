import React from 'react'
import './stroketext.css'

export default function StrokeText({text=''}) {
  return (
    <svg>
        <symbol id='text'>
              <text textAnchor='' x="0%" y="70%">{ text }</text>
        </symbol>
        <use xlinkHref='#text'></use>
    </svg>
  )
}
