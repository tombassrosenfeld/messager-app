import { useSelector } from 'react-redux'
import Chats from '../Chats'
import LoginPanel from '../LogInPanel';


import './App.css';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Messager</h1>
      </header>
      <main>
      {user.id === undefined ? 
      <LoginPanel /> :
      <Chats />}

      </main>


    </div>
  );
}

export default App;
