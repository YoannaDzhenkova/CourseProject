export default function Contacts() {

    return (
        <>
            <section id="contact">
                <form className="contact-form">
                    <h2>Contact Us</h2>

                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" placeholder="Enter your message" required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </section>
        </>
    )
}