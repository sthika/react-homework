import React, { useCallback, useEffect } from 'react';
import Button from '../components/Button';
import Counter from '../components/Counter';
import Input from '../components/Input';
import Toggler from '../components/Toggler';
import List from '../components/List';
import { useState } from 'react';
import Time from '../components/Time';

const studentList = [
  'Рустам',
  'Анна',
  'Светлана',
  'Вероника',
  'Нурсултан',
  'Каныкей',
  'Аяна',
];

const Main = ({ setCounter, updateContactList, counter }) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [selectedContactList, setSelectedContactList] = useState([]);

  const handleSelectContact = useCallback((contact) => {
    setSelectedContactList((state) => {
      return [...state, contact]
    });
  }, []);

  const setBtnState = useCallback(() => {
    setBtnIsActive(!btnIsActive);
  }, [btnIsActive]);

  useEffect(() => {
    if (selectedContactList.length) {
      updateContactList(selectedContactList);
    }
  }, [selectedContactList]);

  return (
    <div className='main'>
      <div className='container'>
        <div className='main__wrapper'>
          <Button />
          <Counter handleCounterChange={setCounter} counter={counter} />
          <Input />
          <Toggler btnState={btnIsActive} setBtnState={setBtnState} />
          <List
            btnIsActive={btnIsActive}
            list={studentList}
            selectContact={handleSelectContact}
          />
          <Time />
        </div>
      </div>
    </div>
  );
};

export default Main;
