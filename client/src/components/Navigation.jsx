import {Link} from 'react-router-dom'


//rfce
 export function Navigation() {
  return (
    <div>
        <Link to='/tasks'>
        <h1>Task App</h1>
        </Link>
    


        <Link to = "/tasks-create">create task</Link>
    </div>
  )
}

