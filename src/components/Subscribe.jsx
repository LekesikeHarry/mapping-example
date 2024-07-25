import React, { useState} from "react";
import "./subscription.css";
import { Card } from "react-bootstrap";
import plansData from "./data";
import Form from "react-bootstrap/Form";
import SubscribeCard from "./SubscribeCard";

const Subscribe = () => {
  const [showYearly, setshowYearly] = useState(false);

  const handleToggle = () => {
    setshowYearly(!showYearly);
  };
  
  return (
    <div className="mother">
      <div className="top">
        <div>
          <button className="topButton">
            Your current plan: Starter Trial 500MUAS
          </button>
        </div>
        <div>
          <h3>Choose a plan</h3>
        </div>
        <div className="bill">
          <div>
            <p>billed monthly</p>
          </div>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Billed annualy"
              className="custom-switch-label"
              onChange={handleToggle}
              checked={showYearly} 
            />
          </Form>
        </div>
      </div>
      <SubscribeCard plansData={plansData} showYearly={showYearly} />
    </div>
  );
};

export default Subscribe;
