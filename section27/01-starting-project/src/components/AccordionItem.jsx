import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItem = ({ id, children, title, className }) => {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
    </li>
  );
};

export default AccordionItem;
