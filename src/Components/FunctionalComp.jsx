import React from 'react'
import ReactProps from './Intro/ReactProps'

export default function FunctionalComp() {
  return (
    <div>
      <h2>This is a functional component</h2>
      <ReactProps title='this is the title' description='this tis the description'/>
    </div>
  )
}

