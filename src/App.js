import logo from './logo.svg';
import './App.css';
import Layout from './layout/Index.js'

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
