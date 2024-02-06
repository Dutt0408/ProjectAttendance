import React from 'react';
import './apple.css'
import './Images.css'

export default function Confirmation() {
  

  return (
    <div className="cookie-card">
  <h1 className="RegText">Thankyou </h1>
      <p className="description">
      <br></br>Thankyou for Attending International Student Event at  
       <b> XYZ Community </b> <br></br><br></br>Please Click Below  to join Whatsapp Community for Updates on <b>Job, Accomodation and Announcements</b>
        </p>
       
      <div className="actions">
     

        <button
  className="accepts"
  onClick={() => {
    window.open('https://web.whatsapp.com/', '_blank');
  }}
>
   Whatsapp Community
</button>

      </div>
    </div>
  );
}
