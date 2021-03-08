import { useEffect, useRef } from "react";
import "./MenuItem.css";

const MenuItem = ({ item, isSelected, onMouseEnter, onMouseLeave }) => {
  const itemRef = useRef(null);
  useEffect(() => {
    if (isSelected) {
      itemRef.current.focus();
    }
  }, [isSelected]);
  return (
    <li
      role="menuitem"
      tabIndex={isSelected ? 0 : -1}
      ref={itemRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item}
    </li>
  );
};

export default MenuItem;
