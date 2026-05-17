import React, { useState, type FC } from "react";

const TopBar: FC = () => {
  const [active, setActive] = useState(2);
  return (
    <header className="topbar">
      <h1>Time to lock in</h1>

      <div className="digits-row" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={`digit ${n === active ? "active" : ""}`}
            onClick={() => setActive(n)}
            role="button"
            tabIndex={0}
          >
            {n}
          </div>
        ))}
      </div>
    </header>
  );
};

export default TopBar;
