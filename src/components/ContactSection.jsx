import React, { useState } from 'react'

const ContactSection = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    })

    const submitHandeler = () => {
        if(contact.email.length == 0 || contact.name.length == 0 || contact.message.length == 0) return alert("All fields are required!")
        alert(`Name : ${contact.name}\n Email : ${contact.email}\n Message : ${contact.message}`);
        setContact({
            name: "",
            email: "",
            message: ""
        })
    }

  return (
    <>
    <div className="contact">
        <div className="form-container">
            <h1>Contact Us</h1>
            <input value={contact.name} type="text" name="name" placeholder='Name'  onChange={(e) => setContact({...contact, name : e.target.value})}/>
            <input value={contact.email} type="email" name="email" placeholder='Email'  onChange={(e) => setContact({...contact, email : e.target.value})}/>
            <textarea value={contact.message} name="messege" placeholder='Messege' onChange={(e) => setContact({...contact, message : e.target.value})}></textarea>
            <button onClick={submitHandeler}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default ContactSection