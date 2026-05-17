import React, { useState, type FC } from "react";
import SquareIcon from "./SquareIcon";

type Props = {
  id: string;
  title: string;
  iconColor?: string;
  showMenu?: boolean;
};

const HabitCardSimple: FC<Props> = ({ id, title, iconColor = "#DDD" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="habit-card">
      <div className="habit-left">
        <SquareIcon color={iconColor} />
        <div>
          <div className="habit-title">{title}</div>
        </div>
      </div>

      <div className="card-menu">
        <div
          className={`three-dots ${open ? "active" : ""}`}
          onClick={() => setOpen((s) => !s)}
          role="button"
          aria-label="Open menu"
        >
          <div
            style={{
              width: 4,
              height: 4,
              background: "currentColor",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              width: 4,
              height: 4,
              background: "currentColor",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              width: 4,
              height: 4,
              background: "currentColor",
              borderRadius: 2,
            }}
          />
        </div>

        {open && (
          <div className="menu-popup">
            <div className="menu-row">
              <div
                style={{
                  width: 12,
                  height: 12,
                  background: "#ddd",
                  borderRadius: 3,
                }}
              />
              <div style={{ color: "var(--menu-edit)" }}>Edit</div>
            </div>
            <div className="menu-row">
              <div className="dot" />
              <div
                style={{
                  background: "linear-gradient(90deg,#24c24f,#0077ff)",
                  padding: "0 4px",
                }}
              >
                See stats
              </div>
            </div>
            <div className="menu-row mark">
              <div
                style={{
                  width: 12,
                  height: 12,
                  background: "var(--menu-mark)",
                  borderRadius: 3,
                }}
              />
              <div>Mark done</div>
            </div>
            <div className="menu-row delete">
              <div
                style={{
                  width: 12,
                  height: 12,
                  background: "var(--menu-delete)",
                  borderRadius: 3,
                }}
              />
              <div>Delete</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HabitCardSimple;
