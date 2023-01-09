import React from 'react'
import '../Styles/contact.css'
import {GrStatusGood} from 'react-icons/gr'

const modal = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  zIndex: 1000
}

const overlay = {
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000
}
  

export default function Sent({open, children, onClose}) {
    if(!open) return null
    return (
      <>
      <div style={overlay} className='sentoverlay' onClick={onClose}>
        <div style={modal} className="sentmodel">
          <div className='sentContent'>
            <h4>Thank you...</h4>
            <h5>Your message sent successfully!</h5>
            <div className='thankyou'>
              <GrStatusGood className='thanks-icon'/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
