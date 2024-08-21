import React from 'react';

const expensiveFunction = (value) => `Processed ${value}`;
const anotherPriceyFunction = (value) => `Transformed ${value}`;

const listOfItems = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

const UseMemoComponent = (props) => {
  const list = React.useMemo(() =>
    listOfItems.map(item => ({
      ...item,
      itemProp1: expensiveFunction(props.first),
      itemProp2: anotherPriceyFunction(props.second),
    })),
    [props.first, props.second]
  );

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.name} - {item.itemProp1} - {item.itemProp2}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoComponent;
