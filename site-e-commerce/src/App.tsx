import { useState } from 'react';
import Header from './Components/Header';
import HomePage from './pages/Product';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dark:bg-slate-700 min-h-screen min-w-full flex flex-col justify-center items-center ">
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
