import React from 'react';

const Contacts = ({ list }) => {
  console.log(list);

  return (
    <section className='contacts'>
      <div className='container'>
        <div className='contacts__wrapper'>
          <h2 className='contacts__title'>Выбранные студенты</h2>
          {list && list.length ? (
            <ul>
              {list.map((contact, idx) => {
                return <p key={idx}>{contact}</p>;
              })}
            </ul>
          ) : (
            <p>Нет выбранных студентов</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
