import React from 'react'

export default function AddMission() {
  return (
    <div className='add-form'>
        <input type="text" placeholder='name'/>
        <select name="status" id="status">
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
        </select>
        <select name="priority" id="priority">
            <option value="high">High</option>
            <option value="low">Low</option>
        </select>
        <textarea name="description" id="description" placeholder='hello there! please enter here your description'></textarea>
        <button>Add Mission</button>
    </div>
  )
}
