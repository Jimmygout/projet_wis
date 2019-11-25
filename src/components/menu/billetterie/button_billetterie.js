import React from 'react';
import {Button} from "react-bootstrap";
import './button_billetterie.css';
class ButtonBilletterie extends React.Component {
  
    render() {
            return (
                <div>
<Button variant="primary" size="lg" block>
    Billetterie
  </Button>
                </div>    
            );
}}

export default ButtonBilletterie;
