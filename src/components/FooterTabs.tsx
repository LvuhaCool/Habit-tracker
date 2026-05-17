import React, { type FC } from "react";

const FooterTabs: FC = () => {
  return (
    <div className="footer">
      <div className="tabs">
        <div className="tab habits">
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "#eee",
              margin: "0 auto 6px",
            }}
          />
          <div style={{ fontSize: 12 }}>Habits</div>
        </div>
        <div className="tab">
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              margin: "0 auto 6px",
            }}
          />
          <div style={{ fontSize: 12 }}>Profile</div>
        </div>
        <div className="tab">
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              margin: "0 auto 6px",
            }}
          />
          <div style={{ fontSize: 12 }}>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default FooterTabs;
