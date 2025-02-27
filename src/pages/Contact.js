// src/pages/ContactUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 p-6 border rounded-md shadow-md">
            <div className="flex-1 mb-6 md:mr-4">
                <h2 className="text-xl font-bold mb-4 text-red-700">Contact Us</h2>
                <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /><strong className="text-red-700">Address:</strong> <span className="text-blue-500">KOT ROAD, PANDUSAR MOHALLA, NABHA, 147201</span></p>
                <p className="mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /><strong className="text-red-700">Phone:</strong> <span className="text-blue-500">+91-9056744006, +91-9988332831</span></p>
                <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /><strong className="text-red-700">Email:</strong> <span className="text-blue-500">info@sunriseinstitute.com</span></p>
                <p className="mb-2"><FontAwesomeIcon icon={faClock} className="mr-2" /><strong className="text-red-700">Working Hours:</strong></p>
                <ul className="list ml-5 mb-4">
                    <li><FontAwesomeIcon icon={faClock} className="mr-2" /><span className="text-red-700">Monday - Saturday:</span><span className="text-blue-500"> 2:00 PM - 7:30 PM</span></li>
                    <li><FontAwesomeIcon icon={faClock} className="mr-2" /><span className="text-red-700">Sunday: </span><span className="text-blue-500">Closed</span></li>
                </ul>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9406694823083!2d76.1549221!3d30.381042600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910390887dd524f%3A0xe9ce3f487e70f623!2sSunrise%20Institute!5e0!3m2!1sen!2sus!4v1740137588045!5m2!1sen!2sus"
                      width="100%"
                      height="40%"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Contact Us Form"
                  >
                  </iframe>
              </div>
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-4 text-red-700">Contact Form</h2>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfraWGF6ZvytPNmtAA-_iPO6uJcOyspT4oTZwyBKF1kVo9JLg/viewform?embedded=true" // Replace with your Google Form URL
                    width="100%"
                    height="1000"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Contact Us Form"
                >
                </iframe>
            </div>
        </div>
    );
};

export default Contact;
