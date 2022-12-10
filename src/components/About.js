import React from 'react'
import '../components/styles/about.css'

function About() {
  return (
    <>
    <div className='about_section'>
    <h3>About Us</h3>
    <hr id='horizontal_line' />
    </div>

    <div className='about_info_container'>
      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Ann Karanja</span></p>
        </div>
        <div>
          <p>Title : FullStack Developer <br/> (Scrum master)</p>
        </div>
        <div>
          <p>Duty : Reactjs User Interface, Serializers</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Terah Mumuli</span></p>
        </div>
        <div>
          <p>Title : FullStack Developer</p>
        </div>
        <div>
          <p>Duty : Routes, Seeds, React Login & Signup</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Esther Ng'ang'a</span></p>
        </div>
        <div>
          <p>Title : FullStack Developer</p>
        </div>
        <div>
          <p>Duty :Migrations, Models ,React AboutSection</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Andrew Kigen</span></p>
        </div>
        <div>
          <p>Title : Frontend Developer</p>
        </div>
        <div>
          <p>Duty : Homepage</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Timothy Kibet</span></p>
        </div>
        <div>
          <p>Title : Frontend Developer</p>
        </div>
        <div>
          <p>Duty : Landing page</p>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default About

