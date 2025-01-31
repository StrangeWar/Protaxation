import './contact.css';
import whatsapp from '../asset/icons8-whatsapp-48.png';
import location from '../asset/icons8-location-50.png';
import email from '../asset/gmail_732200.png';

export default function Contact() {
    return (
        <div className="contact-container">
            <p className="main-head">Contact Us</p>
            <div className='m'>
                <div className='for'>
                    <img src={whatsapp} alt="WhatsApp" /> +1 607-564-5355
                </div>
                <div className='for'>
                    <img src={whatsapp} alt="WhatsApp" /> +1 213-799-4574
                </div>
                <div className='for'>
                    <img src={email} width={35} alt="Email" /> rishi@protaxations.com  saanvi@protaxations.com
                </div>
                <div className='for'>
                    <img src={location} alt="Location" /> 4795 Commercial Drive, New Hartford, NY 13413
                </div>
            </div>
        </div>
    );
}
