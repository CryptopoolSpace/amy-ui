import React from "react";

export default function useOutsideClickDetector(
  element: HTMLDivElement,
  isEnabled: boolean,
  callback: () => void
): void {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (element && !element.contains(event.target as Node)) callback();
    };

    if (isEnabled) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [element, isEnabled, callback]);
}
