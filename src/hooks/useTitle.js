import { useEffect } from "react";

// Hooks for disply dinamic title
export const useTitle = (title) => {
  useEffect(() => {
    document.title = `ToyVerseEmpire | ${title}`;
  }, [title]);
};
