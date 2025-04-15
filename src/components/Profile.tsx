import React from 'react'
import Image1 from '../assets/overlay.jpg'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css'
import { BiBook } from 'react-icons/bi'

const courses = [
  {
    title: 'HTML CSS',
    duration: '2 Houres',
    icon: <BiBook />
  },
  {
    title: 'JavaScript',
    duration: '2 Houres',
    icon: <BiBook />
  },
  {
    title: 'React.js',
    duration: '2 Houres',
    icon: <BiBook />
  },
]

export default function Profile() {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={Image1} alt="" />
          <h3 className='username'>İlknur</h3>
          <span className="profession">Teacher</span>
        </div>
        <div className="user-courses">
          {courses.map((coures) => (<div className="course">
            <div className="course--detail">
              <div className="course--cover">{coures.icon}</div>
              <div className="course-name">
                <h5 className="title">{coures.title}</h5>
                <span className="duration">{coures.duration}</span>
              </div>
            </div>
            <div className="action">:</div>
          </div>))}
        </div>
      </div>
    </div>
  )
}
