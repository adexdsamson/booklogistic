import React from 'react'

type ThisTypes = {
  text: string
}

const Button = (props:ThisTypes) => {

  const {text} = props;

  return (
    <div className='w-full text-center py-2 bg-[#DF6E1E] text-white font-bold uppercase rounded-md'> {text} </div>
  )
}

export default Button