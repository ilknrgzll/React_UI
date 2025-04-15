import React from 'react'
import ContentHeader from './ContentHeader'
import "../styles/content.css"
import Card from './Card'
import TeacherList from './TeacherList'
export default function Content() {
  return (
    <div className='content'>
      <ContentHeader/>
      <Card/>
      <TeacherList/>
    </div>
  )
}
