import { useContext } from 'react'
import { Link } from 'react-router'
import { UserContext } from '../contexts/UserContext'

export default function Header() {
    const { email } = useContext(UserContext);

    return (
        <>
            <header>
                <div className="header">
                    <img src="/images/images (1).png" alt="logo" />
                    <Link to='/' className='title'>Fitnessline</Link>
                    <img src="/images/images (1).png" alt="logo" />
                </div>
                <div className="navigation">
                    <nav>
                        {email
                            ? (<div id="user">
                                <Link to="/services">All services</Link>
                                <Link to="/create">Create Service</Link>
                                <Link to="/logout">Logout</Link>
                            </div>)
                            : (
                                <div id="guest">
                                    <Link to="/services">All services</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </div>
                            )}


                    </nav>
                </div>
            </header>
        </>
    )
}