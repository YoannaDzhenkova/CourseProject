import { Link } from 'react-router'

export default function Login() {


    return (
        <>
            <div className="login">
                <section id="login-page" className="auth">
                    <form id="login">
                    <img className="brand-logo" src='images/images (1).png' />
                        <div className="container">
                            
                            <h1>Login</h1>
                            <label className="login" htmlFor="email">Email:</label>
                            <input className="login" type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                            <label className="login" htmlFor="login-pass">Password:</label>
                            <input className="login" type="password" id="login-password" name="password" />
                            <input type="submit" className="btn submit login" value="Login" />
                            <p className="field">
                                <span>If you don't have profile click <Link to="/register">here</Link></span>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}