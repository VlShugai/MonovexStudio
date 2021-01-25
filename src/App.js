import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import  Button  from './Components/Button';
import VideoBackground from './Pages/VideoBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
    <Header/>
    <VideoBackground/>
    <Button text="some"/>
    
    </div>
    )  }

export default App;
