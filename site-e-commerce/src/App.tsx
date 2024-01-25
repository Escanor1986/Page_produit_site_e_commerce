import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { useState } from 'react';
import { ArticleProvider } from './contexts/ArticleProvider';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dark:bg-slate-700 min-h-screen min-w-full flex flex-col justify-center items-center ">
      <ArticleProvider>
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
      </ArticleProvider>
    </div>
  );
}

export default App;
