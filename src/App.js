import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import AgentsList from './pages/AgentsList/index'

function App() {
  return (
    <div className="App">
      <AgentsList />
      <ToastContainer />
    </div>
  );
}

export default App;
