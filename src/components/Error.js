import React from 'react'

function Error(props) {
  return (
    <section className="bar error">
      <span role="img">❌</span>
      {props.type === 'tickCheck' && 'Error: Please confirm'}
      {props.type === 'stringCheck' &&
        'Error: Please fill in the neccessary field'}
    </section>
  )
}

export default Error
