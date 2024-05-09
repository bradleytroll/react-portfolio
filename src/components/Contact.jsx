import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormErrors(prev => ({ ...prev, [name]: '' })); // Clear errors as user types
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errorMsg = '';
        if (!value) {
            errorMsg = 'This field is required';
        } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMsg = 'Invalid email address';
        }
        setFormErrors(prev => ({ ...prev, [name]: errorMsg }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate all fields on submit
        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            const error = validateField(key, value);
            if (error) {
                newErrors[key] = error;
            }
        });

        // Check if there are any errors before logging or submitting the data
        if (Object.values(newErrors).every(error => error === '')) {
            console.log(formData);
            // Form data would be submitted here if you had an endpoint to handle it

            // Reset form data and errors after successful submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setFormErrors({
                name: '',
                email: '',
                message: ''
            });
        } else {
            setFormErrors(newErrors); // Update the formErrors state if there are validation errors
        }
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} noValidate>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    required 
                />
                {formErrors.name && <div style={{ color: 'red' }}>{formErrors.name}</div>}
                <span style={{ margin: '0 10px' }}></span>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    required 
                />
                {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
                <br></br>
                <br></br>
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    required 
                />
                <br></br>
                <button type="submit" disabled={Object.values(formErrors).some(error => error !== '')}>Send</button>
                <br></br>
                <br></br>
            </form>
        </section>
    );
};

export default Contact;
