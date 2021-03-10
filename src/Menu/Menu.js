import { useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

const menuItems = ["Inbox", "Draft", "Sent Items", "Junk"];

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const handleKeyDown = e => {
    const { keyCode } = e;
    switch (keyCode) {
      // up or left key
      case 37:
      case 38: {
        if (selectedItem > 0) {
          setSelectedItem(selectedItem - 1);
        } else {
          setSelectedItem(menuItems.length - 1);
        }
        break;
      }
      // down or right key
      case 39:
      case 40: {
        if (selectedItem < menuItems.length - 1) {
          setSelectedItem(selectedItem + 1);
        } else {
          setSelectedItem(0);
        }
        break;
      }
      default: {
      }
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        aria-expanded={isMenuOpen}
        className="mail"
      >
        Mail
      </button>
      {isMenuOpen && (
        <ul
          role="menu"
          className="menu"
          aria-label="Open menu"
          onKeyDown={e => handleKeyDown(e)}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isSelected={selectedItem === index}
              onMouseEnter={() => setSelectedItem(index)}
              onMouseLeave={() => setSelectedItem(-1)}
            />
          ))}
        </ul>
      )}
    </>
  );
}
