import React from 'react'
import './accordion-item.css'

const AccordionItem = ({ title, content }) => {

  const [isActive, setIsActive] = React.useState(false)

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}  className='accordion-item'>
        <span onClick={() => setIsActive(prev => !prev)}  style={{cursor: 'pointer'}}>{title}   {isActive ? '-' : '+'}</span>
        {isActive && <div className='accordion-content'>
            <p>{content}</p>
        </div>}
    </div>
  )
}

export default AccordionItem