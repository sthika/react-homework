import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import { useCallback, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [contactList, setContactList] = useState([]);

  const updateContactList = useCallback(
    (list) => {
      setContactList(list);
    },
    [contactList]
  );

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main setCounter={setCounter} counter={counter} updateContactList={updateContactList}/>} />
          <Route path='/about' element={<About product={counter} />} />
          <Route
            path='/contacts'
            element={<Contacts list={contactList} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
