import Mission from "../models/missionModel"

interface Props {
  item: Mission,
  changeMission: number,
  setChangeMissions: (x: number) => void
}

export default function Item({item, changeMission, setChangeMissions}: Props) {
  if (!item) {
    return <div><p>There is no Missions Yet</p></div>
  }
  const deleteMission = (id: string) => {
    ((async() => {
      try {
        await fetch(`https://reactexambackend.onrender.com/missions/9132635/${id}`, {
          method: 'DELETE'
        })
        setChangeMissions(changeMission - 1)
      } catch (error) {
        console.log(error)
      }
    }))()
  }
  return (
    <div className='row'>
        <div>
            <p>Name: {item.name}</p>
            <p>Status: {item.status}</p>
            <p>Priority: ({item.priority})</p>
            <p>Description: {item.description}</p>
        </div>
        <div className='buttons'>
            <button onClick={() => deleteMission(item.id)}>Delete</button>
            <button>Progress</button>
        </div>
    </div>
  )
}
