import React from 'react'

export default function Item() {
  return (
    <div className='row'>
        <div>
            <p>Name: Elazar</p>
            <p>Status: Completed</p>
            <p>Priority: (Low)</p>
            <p>Description: Finish to build the exem</p>
        </div>
        <div className='buttons'>
            <button>Delete</button>
            <button>Progress</button>
        </div>
    </div>
  )
}
