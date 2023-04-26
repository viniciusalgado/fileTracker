import React from 'react'
import './styles.css'
import TopBar from '../TopBar'
import SideBar from '../SideBar'

const MainPage = () => (
  <div className="container">
    <TopBar />
    <SideBar />
    <div className="main-layout">
      <main className="main-content">Main Content</main>
    </div>
  </div>
)

export default MainPage
