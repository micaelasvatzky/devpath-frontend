import React from 'react'

const PathCard = ({path}) => {
  return (
    <div className='h-100 w-100 bg-amber-700'>
        <h3>{path.name}</h3>
        <p>{path.description}</p>
        <ul>
            {path.steps.map((step => (
                <li key={step.title}>{step.title}</li>
            )))}
        </ul>
    </div>
  )
}

export default PathCard