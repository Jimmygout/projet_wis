import React from 'react';
import CarouselAlert from "./components/menu/carousel/carousel_alert";
import CarouselNouvelle from "./components/menu/carousel/carousel_nouvelle";
import CardConcert from "./components/menu/card/card_concert";
import ButtonBilletterie from "./components/menu/billetterie/button_billetterie";
import NavbarSite from "./components/menu/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarSite>
      </NavbarSite>
      <CarouselAlert>
      </CarouselAlert>
      <CardConcert>
      </CardConcert>
      <ButtonBilletterie>
      </ButtonBilletterie>
      <CarouselNouvelle>
      </CarouselNouvelle>
    </div>
  );
}

export default App;
