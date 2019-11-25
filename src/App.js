import React from 'react';
import CarouselAlert from "./components/menu/carousel/carousel_alert";
import CardConcert from "./components/menu/card/card_concert";
import ButtonBilletterie from "./components/menu/billetterie/button_billetterie";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <CarouselAlert>
      </CarouselAlert>
      <CardConcert>
      </CardConcert>
      <ButtonBilletterie>
      </ButtonBilletterie>
    </div>
  );
}

export default App;
