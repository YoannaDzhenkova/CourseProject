import { useActionState, useContext } from 'react';
import { Link, useNavigate } from 'react-router'
import { useLogin } from '../../api/authApi';
import { UserContext } from '../../contexts/UserContext';

export default function Login() {
    const navigate = useNavigate();
    const {userLoginHandler} = useContext(UserContext);
    const { login } = useLogin();
    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        const userData = await login(values.email, values.password);

        userLoginHandler(userData);

        navigate('/')
        
        return userData;
    }

    const [_, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''})

    
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
                            <input type="submit" className="btn submit login" value="Login" disabled={isPending}/>
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