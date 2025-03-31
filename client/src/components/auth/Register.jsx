import { Link } from "react-router"
export default function Register() {

    return (
        <>
            <div className="register">
                <section id="register-page" className="content auth">
                    <form id="register">
                    <img className="brand-logo" src="images/images (1).png"/>
                        <div className="container">
                            <h1>Register</h1>

                            <label  className="register" htmlFor="email">Email:</label>
                            <input  className="register" type="email" id="email" name="email" placeholder="maria@email.com" />

                            <label className="register" htmlFor="pass">Password:</label>
                            <input  className="register" type="password" name="password" id="register-password" />

                            <label className="register"  htmlFor="con-pass">Confirm Password:</label>
                            <input className="register"  type="password" name="confirm-password" id="confirm-password" />

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