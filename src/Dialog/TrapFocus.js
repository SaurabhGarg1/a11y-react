import { useEffect, useRef } from "react";
import React from "react";

export const TrapFocus = ({ children }) => {
  const contentRef = useRef(null);
  useEffect(() => {
    const doc = ownerDocument(contentRef.current);
    if (contentRef.current && !contentRef.current.contains(doc.activeElement)) {
      contentRef.current.focus();
    }
  }, []);
  return React.cloneElement(children, { ref: contentRef });
};

function ownerDocument(node) {
  return (node && node.ownerDocument) || document;
}
