import { useRecycleScroll } from "./useRecycleScroll";

interface RecycledListProps<T> {
  itemHeight: number;
  containerHeight: number;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const RecycledList = <T,>({ itemHeight, containerHeight, items, renderItem }: RecycledListProps<T>) => {

  const { containerRef, onScroll, totalHeight, startIndex, endIndex } = useRecycleScroll(itemHeight, containerHeight, items.length); 

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      onScroll={onScroll}
      ref={containerRef}
      style={{ height: containerHeight, overflowY: 'auto' }}>
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((item, index) => {
          const itemIndex = startIndex + index
          return (
            <div key={itemIndex} style={
              {
                position: 'absolute',
                top: itemIndex * itemHeight,
                left: 0, right: 0,
                height: itemHeight
              }}>
              {renderItem(item)}
            </div>
          )
        })}
      </div>
    </div>
  );
}