import React from 'react';

const List = ({ list, btnIsActive, selectContact }) => {
  const isChecked = (el) => {
    selectContact(el);
  };

  return btnIsActive ? (
    <ul /*className= {btnIsActive===true? "student__list-active" : "student__list"}*/
    >
      {list.sort().map((el, idx) => {
        return (
          <li key={idx}>
            <input
              type='checkbox'
              onChange={(e) => {
                isChecked(el);
              }}></input>
            <label>{el}</label>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default List;
