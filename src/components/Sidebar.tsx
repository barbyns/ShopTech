import { useState } from "react";
import "./Sidebar.css";

const navItems: string[] = ["Home", "Categoria", "Offerte", "Profilo"];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // forza apertura per test

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <header>
          <button
            type="button"
            className="burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-icons">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </header>

        <nav>
          {navItems.map((item) => (
            <button key={item} type="button">
              <span className="material-icons">chevron_right</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};
