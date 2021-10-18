import { useSelector } from 'react-redux'
import Interface from '../Interface';
import LoginPanel from '../LogInPanel';


import './App.css';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Messager</h1>
      </header>
      <main className="app__content">
        {
          user.id === undefined ? 
          <LoginPanel /> :
          <Interface />
        }
      </main>
    </div>
  );
}

export default App;
