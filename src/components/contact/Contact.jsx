
import './Contact.scss'
import AnimatedLetters from '../AnimatedLeterrs/AnimatedLetters'
import { useState, useEffect} from 'react'
import Loader from 'react-loaders'
import { useRef} from 'react'
import emailjs from '@emailjs/browser'



const Contact = () =>{

   



    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    useEffect(() =>{
        return setTimeout(() => {
                setLetterClass('text-animate-hover')
        }, 500);
    }, [])


    const sendEmail = (e) =>{
        e.preventDefault()
    
        emailjs
          .sendForm(
            'gmail',
            'CWjjyjaXEdRTPtzw8',
            form.current,
            'bLq2vusY-1awBlaVK4RQD'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    } 

   
    return(


        <>
        <div className="contact-page">
            <div className="text-zone">
                <h1>

                    <AnimatedLetters 
                    letterClass={letterClass }
              strArray={['C', 'o', 'n', 't', 'a', 'c', ' ', 'm', 'e' ]}
                idx={15}
                 />
                </h1>

                <p id="lap">
                I am interested in freelance opportunities - especially ambitious or
            <br/>  
            large projects about front-end, back-end, machine learning, web 3.0 and game projects. However, if you have other request or question,
            <br/>  

            don't hesitate to contact me using below form either.
                </p>

        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                        <input className='half'
                        type="text" name="name" placeholder="Name"
                        required
                        >
                        </input>
                        <input
                        type="email" name="email" placeholder="Email"
                        required
                        >
                        </input>
                    
                        <input 
                        placeholder="Subject" 
                        type="text" 
                         name="subject" required /> 
                         
                    <textarea
                    placeholder='Message'
                    name='message'
                    required
                    >   </textarea>
                        <input
                        
                         type="submit"
                         className='flat-button'
                         value="SEND"
                         />

                </ul>
            </form>
        </div>

            </div>

            <div className="info-map">
                Nicolas Ortiz Suarez,
                <br/>
                Colombia
                <br/>
            Quindio, armenia <br />
                <br/>
        <span>devxein@gmail.com</span>
            </div>
            {/*  <div className='map-wrap'> 
                {
                    
                }
            </div>  */}
        </div>
            <Loader type="pacman" />

    </>



    )
}

export default Contact;

         
            