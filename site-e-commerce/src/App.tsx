import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => {
            setShowModal(false);
          }}
        >
          {/* Vous pouvez également afficher un message comme "Cliquez pour fermer" ici */}
        </div>
      )}
    </>
  );
}

export default App;
