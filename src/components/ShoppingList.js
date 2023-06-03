import React, { useState } from 'react';
import '../css/style.css'

const ShoppingList = () => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const addItem = () => {
    if (item !== '') {
      const newItem = { item, price, checked: false };
      setItemsList([...itemsList, newItem]);
      setItem('');
      setPrice('');
    }
  };

  const toggleItem = (index) => {
    const updatedList = [...itemsList];
    updatedList[index].checked = !updatedList[index].checked;
    setItemsList(updatedList);
  };

  const editList = () => {
    const updatedList = itemsList.filter((item) => !item.checked);
    setItemsList(updatedList);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <div>
        <label>Item:</label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button onClick={addItem}>Adicionar Item</button>
      <button onClick={editList}>Excluir Itens</button>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index} style={item.checked ? { textDecoration: 'line-through' } : {}}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItem(index)}
            />
            {item.item} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
