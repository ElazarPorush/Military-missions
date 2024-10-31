import Mission from "../models/missionModel"

interface Props {
  item: Mission
}

export default function Item({item}: Props) {
  return (
    <div className='row'>
        <div>
            <p>Name: {item.name}</p>
            <p>Status: {item.status}</p>
            <p>Priority: ({item.priority})</p>
            <p>Description: {item.description}</p>
        </div>
        <div className='buttons'>
            <button>Delete</button>
            <button>Progress</button>
        </div>
    </div>
  )
}
