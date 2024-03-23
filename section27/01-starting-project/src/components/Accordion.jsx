import React, { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("Accordion-related components must be wrapped by <Accordion>");
  }

  return ctx;
}

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.item = AccordionItem;

export default Accordion;
