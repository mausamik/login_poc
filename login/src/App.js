// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
// import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <> 
    <div className="container-fluid">
      <Navbar title ="IQuizUAnswer"/>
      <div className="container">
        <Login/>
      </div>
      

    </div>
    </>
    );
}

export default App;
