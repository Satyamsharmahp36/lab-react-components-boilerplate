import './App.css';
import MainBody from "./components/ImgGallery";
import Header from "./components/Header";
import GallaryFooter from './components/GallaryFooter';



function App(props) {
  return (
    <div>
    <Header />  
      <div>
          <MainBody data={props.ourdata}/>
      </div> 
    <GallaryFooter/> 
  
    </div>

  )
}

export default App;
