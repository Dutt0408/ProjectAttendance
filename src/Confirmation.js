import React from 'react';
import './apple.css'

export default function Confirmation() {
  

  return (
    <div className="cookie-card">
      <span className="title">Thankyou for Attending </span> 
      <p className="description">
      <br></br><b>Topic:</b> Embaracing the Good In Others <br></br>
        <br></br>
        <b> Venue: </b> BAPS Swaminarayan Temple ,Toronto 
        </p>
        <p className="description">
        <b>  Date: </b> January 28th ,2024
       



        <br />
        <br />
        <a href="https://www.baps.org/Global-Network/North-America/Toronto/News.aspx">Previous Events</a>.
      </p>
      <div className="actions">
      <button
  className="accept"
  onClick={() => {
    window.open('https://na.baps.org/learn', '_blank');
  }}
>
  Learn
</button>

        <button
  className="accepts"
  onClick={() => {
    window.open('https://chat.whatsapp.com/EUHAkZP5OdVKWDbnq3Ux5r', '_blank');
  }}
>
   Whatsapp Group
</button>

      </div>
    </div>
  );
}
