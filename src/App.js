// import logo from './logo.svg';
import './App.css';
import Data from './utility/Data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
           
    };

  return (
    
    <div className="App">
      <Slider {...settings}>
      {
        Data.map((d)=>(
          // console.log(d)
          <div key ={d.id} className="img-card">
            <div className="img-part">
             <img src= {d.imgurl} alt ="img"/>
            </div>
            <div className="desc-part">
              <h1>{d.name}</h1>
              <p>{d.desc}</p>
            </div>
          </div>
        ))
      
      }
      </Slider>
    </div>
    
  );
}

export default App;
