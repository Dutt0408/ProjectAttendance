import React from 'react';
import './apple.css'
import './Images.css'

export default function Confirmation() {
  

  return (
    <div className="cookie-card">
  <h1 className="RegText">Thankyou </h1>
      <p className="description">
      <br></br>Thankyou for Attending International Student Sabha at  
       <b> BAPS Swaminarayan Temple  </b> <br></br><br></br>Please Click Below  to join Whatsapp Community for Updates on <b>Job, Accomodation and Announcements</b>
        </p>
       
      <div className="actions">
     

        <button
  className="accepts"
  onClick={() => {
    window.open('https://chat.whatsapp.com/EUHAkZP5OdVKWDbnq3Ux5r', '_blank');
  }}
>
   Whatsapp Community
</button>

      </div>
    </div>
  );
}
