import './App.css';
import Center from './Center';
import Follows from './Follows';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <Center 
        name = "kk_dark"
        musicName="a2dMusick , kamalakannan"
        aritstName ="Kamalkannan"
        movieName = "dead-pool"
        profilImg = "/images/water2.jpg"
      />

      <Follows />

      <Footer/>
    </div>
  );
}

export default App;
