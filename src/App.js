import React, { createRef } from "react";

const Item = ({ name, price }) => {
  return (
    <li>
      {name} = $ {price}
    </li>
  );
};

const App = () => {
  let [items, setItems] = React.useState([
    { id: 1, name: "Orange", price: 20 },
    { id: 2, name: "Apple", price: 12 },
  ]);

  let nameRef = createRef();
  let priceRef = createRef();

  let add = () => {
    let id = items.length + 1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    setItems([...items, { id, name, price }]);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {items.map((i) => {
          return <Item key={i.id} name={i.name} price={i.price}></Item>;
        })}
      </ul>
      <input type="text" ref={nameRef} />
      <input type="text" ref={priceRef} />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default App;
