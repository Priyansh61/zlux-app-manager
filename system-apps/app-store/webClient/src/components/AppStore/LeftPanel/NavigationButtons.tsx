import React from "react";
import { Link } from "react-router-dom";

const options = [
  {
    id: 1,
    name: "Discover",
    href: "/",
  },
  {
    id: 2,
    name: "On-Premise",
    href: "/on-premise",
  },
  {
    id: 3,
    name: "Updates",
    href: "/updates",
  },
  {
    id: 4,
    name: "Installed",
    href: "/installed",
  },
  {
    id: 5,
    name: "Settings",
    href: "/settings",
  },
  {
    id: 6,
    name: "Help",
    href: "/help",
  },
];

const NavigationButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {options.map((opt) => (
        <Link key={opt.id} to={opt.href} className={"optionButton"}>
          {opt.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationButtons;