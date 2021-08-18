import React, { useState, useEffect } from "react";
import "./styles.css";

const InputBox = () => {
  const [inputControlValue, setInputControlValue] = useState(""); //to set the input value

  const getItemsFromLocalStorage = () => {
    if (localStorage.getItem("todo-items") === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem("todo-items"));
  };

  const [items, setItems] = useState(getItemsFromLocalStorage); // to set the items array

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!inputControlValue) {
      alert("Please enter a todo item.");
    } else {
      setItems([
        ...items,
        { id: new Date().getTime().toString(), name: inputControlValue },
      ]);
      setInputControlValue("");
    }
  };

  const assignInputControlValue = (value) => {
    setInputControlValue(value);
  };

  const deleteItem = (id) => {
    let decision = window.confirm(
      "Do you really want to delete the todo item ?"
    );
    if (!decision) {
      return;
    }
    let filteredItems = items.filter((item) => {
      return item.id !== id;
    });

    setItems(filteredItems);
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            placeholder="Enter a todo item"
            value={inputControlValue}
            onChange={(e) => {
              assignInputControlValue(e.currentTarget.value);
            }}
          />
          <button
            onClick={() => {
              addItem();
            }}
          >
            Add
          </button>
        </div>
        <div className="item-container">
          <table>
            <tbody>
              {items.map((item, index) => {
                const { name, id } = item;
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <span>{name}</span>
                      </td>
                      <td
                        onClick={() => {
                          deleteItem(id);
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InputBox;
