import './contact.css'
import whatsapp from '../asset/icons8-whatsapp-48.png';
import location from '../asset/icons8-location-50.png';
import email from '../asset/gmail_732200.png';

export default function Contact(){

    return(
        <>
        <p className="main-head ">Contact US</p>
        <div className='m'>
        <a href='https://wa.me/+16072951196' target='_blank' ><div className='for'>

        <img src={whatsapp}  />+1 607-295-1196
        </div></a>
        <a href='https://wa.me/+12092004304' target='_blank' > <div className='for'>
        <img src={whatsapp}/>+1 209-200-4304
        </div></a>
        <div className='for'>
        <img src={email} width={35}/>rishi@protaxation.net
        <img src={email} width={35}/>rishi@protaxation.net
        </div>
        <div className='for'>
            <img src={location}/>4795 Commercial Drive
New Hartford, NY 13413
         </div>
         </div>
        </>
    );
}