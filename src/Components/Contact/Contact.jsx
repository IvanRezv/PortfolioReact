import React,  { useContext, useRef, useState }  from 'react';
import './Contact.css'
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";


const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.
            sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                     <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
                    <span> Contact me </span>
                    <div
                    className="blur s-blur1"
                    style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" className="user" name="user_name" placeholder="Name" />
                    <input type="email" className="user" name="user_email" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact