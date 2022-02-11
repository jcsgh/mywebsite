import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav style={container}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
        </nav>
    )
}

const container = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#ff4757',
    textColor: "white",
    height: "40px"
  }

export default NavBar;