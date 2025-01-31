import './contact.css';

export default function Contact() {
    return (
        <>
            <p className="main-head">Contact Us</p>
            <div className='m'>
                <a href='https://wa.me/16075645355' target='_blank' rel="noopener noreferrer">
                    <div className='for'>
                        <img src="/assets/icons8-whatsapp-48.png" alt="WhatsApp" />
                        +1 607-564-5355
                    </div>
                </a>
                <div className='for'>
                    <img src="/assets/icons8-whatsapp-48.png" alt="WhatsApp" />
                    +1 213-799-4574
                </div>
                <div className='for'>
                    <img src="/assets/gmail_732200.png" width={35} alt="Email" />
                    rishi@protaxations.com / saanvi@protaxations.com
                </div>
                <div className='for'>
                    <img src="/assets/icons8-location-50.png" alt="Location" />
                    4795 Commercial Drive, New Hartford, NY 13413
                </div>
            </div>
        </>
    );
}
