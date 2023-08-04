import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import Navbar from './components/Navbar';
//Key = 1c016e7fa3204a229b71a37b45a1eb23


// API = https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1c016e7fa3204a229b71a37b45a1eb23
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
