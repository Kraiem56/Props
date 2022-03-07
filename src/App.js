import ProductList from './Profile/ProductList';
import './App.css';
import Navbar from './Profile/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Profile/Footer';

function App() {
  const cars = [  {JName:'JAGUAR XE', JPicture:'https://cars.usnews.com/pics/size/776x517/images/Auto/custom/14140/2020_Jaguar_XE_10.jpg', JPrice:'$39,900 - $46,295',},
                {JName:'JAGUAR XF​', JPicture:'https://cars.usnews.com/pics/size/350x262/images/Auto/custom/14886/2022_Jaguar_XF_1.jpg', JPrice:'$45,900 - $51,000',},
                {JName:'JAGUAR XJ', JPicture:'https://cars.usnews.com/pics/size/350x262/images/Auto/custom/14040/2019_Jaguar_XJ_4.jpg', JPrice:'$54,594 - $88,744',},
                {JName:'JAGUAR E‑PACE', JPicture:'https://www.carscoops.com/wp-content/uploads/2019/09/7caa4720-jaguar-e-pace-0-1024x555.jpg', JPrice:'$40,140 - $44,156',},
                {JName:'JAGUAR I-PACE', JPicture:'https://di-uploads-pod6.dealerinspire.com/jaguarmissionviejo/uploads/2020/03/2020-Jaguar-I-PACE-Banner.png', JPrice:'$64,594 - $88,744',},
                {JName:'JAGUAR F‑TYPE', JPicture:'http://picolio.auto123.com/auto123-media/articles/2019/2/65548/Jag_F-TYPE_20MY_Checkered_Flag_European_Model_Shown%20(3)fr.JPG', JPrice:'$74,594 - $128,744',},
];
  return (
    <div className="App">
      <div className='vav'>
      <Navbar/>
      </div>
      <div className='image'>
        <ProductList data={cars}/>
      </div>
      <Footer >
      Copyright 1999-2022 by Refsnes Data. All Rights Reserved
      </Footer>
      
      
    </div>
  );
}

export default App;
