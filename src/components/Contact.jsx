import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <textarea name="message" placeholder="Message" required onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;