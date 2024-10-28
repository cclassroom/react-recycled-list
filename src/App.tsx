import { RecycledList } from "./RecycledList";

function App() {  

  const itemHeight = 100;
  const containerHeight = 900;
  const items = Array.from({ length: 100000 }, (_, i) => i + 1); // List of numbers from 1 to 1000

  const renderItem = (item: number) => (
    <div
      key={`item-${item}`} // Add a key for each item
      style={{
        height: itemHeight,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
        borderBottom: '1px solid #ccc',
      }}
    >
      Item {item}
    </div>
  );

  return (
    <RecycledList
      itemHeight={itemHeight}
      containerHeight={containerHeight}
      items={items}
      renderItem={renderItem} />
  )
}

export default App;
