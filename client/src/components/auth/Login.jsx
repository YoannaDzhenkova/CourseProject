import { Link, useNavigate } from 'react-router'

export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();
    const loginAction = (formData) => {
        const email = formData.get('email');

        onLogin(email);
        navigate('/services')
        
    }

    return (
        <>
            <div className="login">
                <section id="login-page" className="auth">
                    <form id="login" action={loginAction}>
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