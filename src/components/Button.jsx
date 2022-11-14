import React from 'react'


const Button = (props) => {
  return (
    <button onClick={props.onClick} className='w-32 py-3 text-gold rounded-3xl font-light 
    bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-300 hover:to-primary-400
    hover:shadow-xl hover:shadow-primary-500/30'>
      
      {props.text}
      
    </button>
  )
}

export default Button