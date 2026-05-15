import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="app-header d-flex align-items-center justify-content-between px-3 py-2">
      <div className="d-flex align-items-center gap-3">
        <div className="app-avatar bg-primary rounded-circle d-flex align-items-center justify-content-center">HT</div>
        <div>
          <div className="muted">Good morning</div>
          <div className="h5 mb-0">Your Habits</div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="today-date muted">May 15</div>
        <div className="profile-img rounded-circle"></div>
      </div>
    </header>
  )
}

export default Header
