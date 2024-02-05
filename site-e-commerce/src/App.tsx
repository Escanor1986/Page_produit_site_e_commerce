import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Product';
import ErrorPage from './pages/Error';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dark:bg-slate-700 min-h-screen min-w-full flex flex-col justify-center items-center ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {showModal && (
          <div
            className="modal-overlay"
            onClick={() => {
              setShowModal(false);
            }}
          ></div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
