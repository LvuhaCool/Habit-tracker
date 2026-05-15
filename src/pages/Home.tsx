import React from 'react'
import Header from '../components/Header'
import HabitCard from '../components/HabitCard'
import FAB from '../components/FAB'

const Home: React.FC = () => {
  return (
    <div className="home-root d-flex flex-column">
      <Header />

      <main className="flex-grow-1 px-3 py-3">
        <section className="section-cards mb-4">
          <h2 className="section-title">Today's Highlights</h2>
          <div className="cards-row d-flex gap-3 overflow-auto">
            <HabitCard title="Morning Run" subtitle="30 minutes" color="#06b6d4" />
            <HabitCard title="Read" subtitle="20 pages" color="#f97316" />
            <HabitCard title="Meditate" subtitle="10 minutes" color="#8b5cf6" />
          </div>
        </section>

        <section>
          <h2 className="section-title">All Habits</h2>
          <div className="list-grid mt-3">
            <HabitCard title="Drink Water" subtitle="8 glasses" color="#06b6d4" />
            <HabitCard title="Sleep Early" subtitle="8 hours" color="#10b981" />
            <HabitCard title="Study" subtitle="1 hour" color="#ef4444" />
          </div>
        </section>
      </main>

      <nav className="bottom-nav d-flex justify-content-around align-items-center py-2">
        <div className="nav-item muted">Home</div>
        <div className="nav-item muted">Stats</div>
        <div style={{ width: 64 }}></div>
        <div className="nav-item muted">Habits</div>
        <div className="nav-item muted">Profile</div>
      </nav>

      <FAB />
    </div>
  )
}

export default Home
