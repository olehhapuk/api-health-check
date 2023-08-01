import { useState } from 'react';
import axios from 'axios';
import { TailSpin as Loader } from 'react-loader-spinner';
import './App.css';

function App() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function runCheck() {
    setIsLoading(true);
    axios
      .get(import.meta.env.VITE_API_URL)
      .then(() => setStatusMessage('Success'))
      .catch(() => setStatusMessage('Error'))
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <h1>Status Check</h1>
      <div className="card">
        <button onClick={runCheck} disabled={isLoading}>
          {isLoading ? (
            <Loader color="white" height={18} wrapperClass="loader" />
          ) : (
            'Run check'
          )}
        </button>
        {statusMessage && (
          <p className={statusMessage.toLowerCase()}>{statusMessage}</p>
        )}
      </div>
    </>
  );
}

export default App;
