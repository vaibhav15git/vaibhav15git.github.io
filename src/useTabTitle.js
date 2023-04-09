import { useEffect } from "react";

const TabTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => (document.title = prevTitle);
  }, [title]);

  return null; // Return null as this component doesn't render any UI
};

export default TabTitle;
