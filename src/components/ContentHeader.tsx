import React from 'react'
import { BiNotification, BiSearch } from "react-icons/bi";

export default function ContentHeader() {
  return (
    <div className="content--header">
        <h1 className="header--title">Dashboard</h1>
        <div className="header--activity">
            <div className="search-box">
                <input type="text" placeholder='Arama alanı...' />
                <BiSearch className='icon' />
            </div>
            <div className="notify">
                <BiNotification className="icon" />
            </div>
        </div>
      
    </div>
  )
}
