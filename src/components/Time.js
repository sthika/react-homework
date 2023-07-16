import React, { useEffect } from 'react';
import { useState } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState('');

  const getCurrentTime = () => {
    const date = new Date();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const min =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const sec =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return `${hour}:${min}:${sec}`;
  };

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
  }, []);

  return (
    <div className='time'>
      <p>{currentTime}</p>
    </div>
  );
};

export default Time;
