import React, { type FC } from "react";
import TopBar from "../components/TopBar";
import HabitCardSimple from "../components/HabitCardSimple";
import FooterTabs from "../components/FooterTabs";

const Home: FC = () => {
  const habits = [
    { id: "h1", title: "Make bed", color: "var(--icon-bed)" },
    { id: "h2", title: "Follow To-do", color: "var(--icon-todo)" },
    { id: "h3", title: "Do sports", color: "var(--icon-dumbbell)" },
  ];

  return (
    <div className="app-container">
      <TopBar />

      <div className="habits-list">
        {habits.map((h, i) => (
          <HabitCardSimple
            key={h.id}
            id={h.id}
            title={h.title}
            iconColor={h.color}
          />
        ))}
      </div>

      <FooterTabs />
    </div>
  );
};

export default Home;
