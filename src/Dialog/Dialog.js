import { useState, useRef, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import "./Dialog.css";

const FOCUSABLE_ELEMENT_SELECTORS =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [tabindex="0"], [contenteditable]';

// inspired by Material-ui modal https://github.com/mui-org/material-ui/tree/e168bc694a7c7a59e86990e2a3677938acf7e953/packages/material-ui/src/Modal
const Dialog = ({ onClose, domNodeFn }) => {
  const contentRef = useRef(null);
  const nodeToRestore = useRef(null);
  useEffect(() => {
    const focusableElements = contentRef.current.querySelectorAll(
      FOCUSABLE_ELEMENT_SELECTORS
    );
    const firstFocusableEl = focusableElements[0],
      lastFocusableEl = focusableElements[focusableElements.length - 1];
    firstFocusableEl.focus();
    const doc = ownerDocument(contentRef.current);

    const handleKeyDown = e => {
      if (e.keyCode === 9) {
        // tab key
        if (e.shiftKey && doc.activeElement === firstFocusableEl) {
          e.preventDefault();
          lastFocusableEl.focus();
        } else if (!e.shiftKey && doc.activeElement === lastFocusableEl) {
          e.preventDefault();
          firstFocusableEl.focus();
        }
      } else if (e.keyCode === 27) {
        //  Esc key
        onClose();
      }
    };
    doc.addEventListener("keydown", handleKeyDown, true);
    return () => {
      doc.removeEventListener("keydown", handleKeyDown, true);
      if (nodeToRestore.current) {
        nodeToRestore.current.focus();
      }
    };
  }, [onClose]);

  useMemo(() => {
    nodeToRestore.current = ownerDocument(domNodeFn()).activeElement;
  }, [domNodeFn]);

  return ReactDOM.createPortal(
    <>
      <div
        className="dialog-window"
        ref={contentRef}
        role="dialog"
        aria-labelledby="dialog_title"
      >
        <h3 id="dialog_title">This is my dialog</h3>
        <input type="text" name="search" placeholder="Enter your name" />
        <button id="searchbutton" type="submit" onClick={onClose}>
          Ok
        </button>
      </div>
      <div className="dialog-mask"></div>
    </>,
    getContainer(domNodeFn)
  );
};

const getContainer = container => {
  container = typeof container === "function" ? container() : container;
  return ReactDOM.findDOMNode(container);
};

function ownerDocument(node) {
  return (node && node.ownerDocument) || document;
}

export const ShowDialog = ({ domNodeFn }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <button onClick={() => setDialogOpen(true)} className="show-dialog">
        Show dialog
      </button>
      {dialogOpen && (
        <Dialog onClose={() => setDialogOpen(false)} domNodeFn={domNodeFn} />
      )}
    </>
  );
};
