import { useState } from 'react'

interface Props {
  changeMissions: number
  setChangeMissions: (x: number) => void,
}

export default function AddMission({changeMissions, setChangeMissions}: Props) {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('Pending')
  const [priority, setPriority] = useState('High')
  const [description, setDescription] = useState('')

  const addMissionToDB = () => {
    (async () => {
      try {
        const result = await fetch('https://reactexambackend.onrender.com/missions/9132635', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            status,
            priority,
            description
          })
        })
        setChangeMissions(changeMissions + 1)
      } catch (err) {
        console.log(err)
      }
    })()
    cleanTheForm()
  }

  const cleanTheForm = () => {
    setName('')
    setStatus('Pending')
    setPriority('High')
    setDescription('')
  }

  return (
    <div className='add-form'>
      <input type="text" placeholder='enter here your name' id='name' onChange={e => setName(e.target.value)}/>
      <select name="status" id="status" onChange={e => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" id="priority" onChange={e => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
      <textarea name="description" id="description" placeholder='hello there! please enter here your description' onChange={e => setDescription(e.target.value)}></textarea>
      <button onClick={addMissionToDB}>Add Mission</button>
    </div>
  )
}
