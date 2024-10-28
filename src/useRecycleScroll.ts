import { useState, useRef, useCallback } from "react";

export const useRecycleScroll = (
  itemHeight: number,
  containerHeight: number,
  itemCount: number
) => {

  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, [])


  const totalHeight = itemCount * itemHeight;
  const itemsToRender = Math.ceil(containerHeight / itemHeight) + 2;
  const startIndex = Math.floor(scrollTop / itemHeight);


  const endIndex = startIndex + itemsToRender;


  return {
    containerRef, onScroll: handleScroll, totalHeight, startIndex, endIndex
  }

}