import React from 'react';
import {Button} from "react-bootstrap";

function activateLasers(e) {
  e.preventDefault();
  return alert('laser activé');
}

const Btn = () =>(
    <div>
        <Button variant="primary" onClick={activateLasers}>Activate Lasers</Button>
    </div>
);


export default Btn;
