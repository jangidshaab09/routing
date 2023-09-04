import React from 'react'

function Contact() {
  return (
    <div className="contact content">
    <h2>Contact</h2>
    <form>
      <div className="form-group">
        <input type="text" placeholder="Enter your Name" />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Enter your Email" />
      </div>
     
      <div className="form-group">
        <button type="submit">send</button>
      </div>
    </form>
  </div>
  )
}

export default Contact