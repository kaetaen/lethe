import { Link } from 'react-router-dom'

function Dashboard () {
  return (
    <div>
      <h1> Welcome to the Lethe </h1>
      <p>A React boilerplate, based on Create React App</p>
      <Link to="/About"> About me </Link>
    </div>
 )
}

export default Dashboard
