import { useCallback, useEffect, useMemo, useState } from "react";
import getCurrentPageArray from "../utils/getCurrentPageArray";

type MoveToPageProps = number | "first" | "last" | "plus" | "minus";

const useGetPages = (limit: number) => {
  const a = sessionStorage.getItem("selectedPage");
  const [selectedPage, setSelectedPage] = useState<number>(() => {
    const storedPage = sessionStorage.getItem("selectedPage");
    return storedPage ? JSON.parse(storedPage) : 1;
  });
  const lastPage = useMemo(() => Math.ceil(limit / 10), [limit]);
  const array = Array.from({ length: lastPage }, (_, index) => index + 1);
  const pageArray = getCurrentPageArray(array, selectedPage);

  const moveToPage = useCallback(
    (input: MoveToPageProps) => {
      if (input === "last") {
        setSelectedPage(lastPage);
      } else if (input === "first") {
        setSelectedPage(1);
      } else if (input === "plus") {
        setSelectedPage((prev) => prev + 1);
      } else if (input === "minus") {
        setSelectedPage((prev) => prev - 1);
      } else {
        setSelectedPage(input);
      }
    },
    [lastPage]
  );
  useEffect(() => {
    sessionStorage.setItem("selectedPage", JSON.stringify(selectedPage));
  }, [selectedPage]);

  return { selectedPage, moveToPage, pageArray } as {
    selectedPage: number;
    moveToPage: (number: MoveToPageProps) => void;
    pageArray: number[];
  };
};

export default useGetPages;
