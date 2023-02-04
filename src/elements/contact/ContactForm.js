import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.</p>
    )
}
function ContactForm({props}) {
    const [ result,showresult ] = useState(false);
    

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            '', 
            '', 
            e.target, 
            ''
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="rn-form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Nombre"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="email"
                name="email"
                placeholder="Email"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Teléfono"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Asunto"
                required
                />
            </div>
            
            <div className="rn-form-group">
                <textarea 
                name="message"
                placeholder="Mensaje"
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Contactar</button>
            </div> 

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
