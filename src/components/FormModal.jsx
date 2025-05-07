import React, { useState } from "react";
import "../styling/FormModel.css"; 


const FormModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  const validate = () => {
    const newErrors = {};
  
   
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name should not contain numbers";
    }
  
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
  
    
    const phoneDigits = formData.phone.replace(/\D/g, ""); // Strip non-digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phoneDigits)) {
      newErrors.phone = "Phone must be exactly 10 digits and digits only";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setShowThankYou(true);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {showThankYou ? (
          <div className="thank-you-modal">
            <div className="thank-you-content">
              <div className="thank-you-icon">✓</div>
              <h3>Thank you for connecting with us</h3>
              <p>Our team will be contacting you soon</p>
              <p className="signature">- Mahesh Sathe </p>
              <button 
                className="thank-you-close-btn"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="form-modal-content">
            <div className="modal-header">
              <h2>Get Started</h2>
              <button className="close-btn" onClick={onClose}>
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormModal;