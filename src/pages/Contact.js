import './contact.css'
import whatsapp from '../asset/icons8-whatsapp-48.png';
import location from '../asset/icons8-location-50.png';
export default function Contact(){

    return(
        <>
        <p className="main-head ">Contact US</p>
        <div className='m'>
        <div className='for'>

        <img src={whatsapp}  />+16-072951196
        </div>
        <div className='for'>
        <img src={whatsapp}/>+12-092004304
        </div>
        <div className='for'>
            <img src={location}/>4795 Commercial Drive,
New Hartford, NY 13413
         </div>
         </div>
        </>
    );
}