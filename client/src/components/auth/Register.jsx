import { Link, useNavigate } from "react-router"
import { useRegister } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Register() {
    const { register } = useRegister();
    const navigate = useNavigate();
    const { userLoginHandler} = useContext(UserContext);

    const registerHandler = async (formData) => {
        const { email, password, confirmPass } = Object.fromEntries(formData);

        if(!email || !password || !confirmPass) {
            alert('All fields are required!')
            
            return;

        } else if (password !== confirmPass) {
            alert('Passwords must match!')

            return;
        }

        

        const authData = await register(email, password);
        
        userLoginHandler(authData);

        navigate('/');

    }

    return (
        <>
            <div className="register">
                <section id="register-page" className="content auth">
                    <form id="register" action={registerHandler}>
                        <img className="brand-logo" src="images/images (1).png" />
                        <div className="container">
                            <h1>Register</h1>

                            <label className="register" htmlFor="email">Email:</label>
                            <input className="register" type="email" id="email" name="email" placeholder="maria@email.com" />

                            <label className="register" htmlFor="pass">Password:</label>
                            <input className="register" type="password" name="password" id="register-password" />

                            <label className="register" htmlFor="con-pass">Confirm Password:</label>
                            <input className="register" type="password" name="confirmPass" id="confirm-password" />

                            <input className="btn submit register" type="submit" value="Register" />

                            <p className="field register">
                                <span>If you already have profile click <Link to="/login">here</Link></span>
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}