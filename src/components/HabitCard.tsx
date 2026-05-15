import React from 'react'

type Props = {
  title: string
  subtitle?: string
  color?: string
}

const HabitCard: React.FC<Props> = ({ title, subtitle, color = '#8b5cf6' }) => {
  return (
    <div className="habit-card p-3" style={{ borderColor: color }}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <div className="h6 mb-1">{title}</div>
          {subtitle && <div className="muted small">{subtitle}</div>}
        </div>
        <div className="streak">
          <div className="streak-value">7</div>
          <div className="muted small">days</div>
        </div>
      </div>
      <div className="progress mt-3" style={{ height: 6 }}>
        <div className="progress-bar" style={{ width: '60%', background: color }}></div>
      </div>
    </div>
  )
}

export default HabitCard
