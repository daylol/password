import React from 'react'
import './style.css'

type StrangeProps = {
    strong: boolean, 
    medium: boolean, 
    easy: boolean,
    pas: string
}



const Section:React.FC<StrangeProps> = ({strong, medium, easy, pas}) => {
  
  return (
      <>

        <div className={`general 
          ${pas.length >= 8 ? '' : 'red'}
          ${pas.length >= 8 && easy ? 'red' : ''} 
          ${pas.length >= 8 && medium ? 'yellow' : ''}
          ${pas.length >= 8 && strong ? 'green' : ''}
        `}></div> 
        <div className={`general 
          ${pas.length >= 8 ? '' : 'red'}
          ${pas.length >= 8 && easy ? '' : 'grey'} 
          ${pas.length >= 8 && medium ? 'yellow' : ''}
          ${pas.length >= 8 && strong ? 'green' : ''}
        `}></div>
        <div className={`general 
          ${pas.length >= 8 ? '' : 'red'}
          ${pas.length >= 8 && easy ? '' : 'grey'} 
          ${pas.length >= 8 && medium ? '' : 'grey'}
          ${pas.length >= 8 && strong ? 'green' : ''}
        `}></div> 
      </>
  )
}

export default Section