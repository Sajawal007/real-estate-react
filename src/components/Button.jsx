import React from 'react'

const Button = (props) => {
  return (
    <button className={`bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded hover:bg-indigo-400 
    duration-500 ${props.className}`}>
      {props.children}
    </button>
  )
}

export default Button