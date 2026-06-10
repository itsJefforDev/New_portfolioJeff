import { useState } from "react";

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  className = "",
  headerClassName = "",
  titleClassName = "",
  iconClassName = "",
  contentClassName = "",
  bodyClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`border rounded-lg overflow-hidden shadow-sm ${className}`}
    >
      <button
        onClick={toggleAccordion}
        className={`w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-colors ${headerClassName}`}
      >
        <div className={`font-semibold ${titleClassName}`}>
          {title}
        </div>

        <span
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : ""}
            ${iconClassName}
          `}
        >
          ▼
        </span>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-900
          ease-in-out
          ${isOpen
            ? "max-h-max opacity-100"
            : "max-h-0 opacity-0"
          }
          ${contentClassName}
        `}>

        <div className={`p-4 ${bodyClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;