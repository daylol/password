import React from 'react'
import './style.css'

type pasType ={
    password: string
}

const EmptySection:React.FC<pasType> = ({password}) => {
  return (
    <>
    <div className={`${password ? '' : 'general'}`}>

</div>
<div className={`${password ? '' : 'general'}`}>

    </div>
    <div className={`${password ? '' : 'general'}`}>

    </div>
    </>
  )
}

export default EmptySection