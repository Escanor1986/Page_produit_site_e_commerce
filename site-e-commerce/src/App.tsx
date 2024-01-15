import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col justify-center content-center ">
      <Header />
      <HomePage />
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => {
            setShowModal(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default App;
