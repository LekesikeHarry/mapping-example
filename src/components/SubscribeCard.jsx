import React from 'react';

function SubscribeCard({ plansData, showYearly }) {
  return (
    <div className="subscription">
      {plansData.map((plan, index) => (
        <div className="scard" key={index}>
          <div className="starter">
            <div>
              <p>{plan.title}</p>
            </div>
            <div>
              <h3>{showYearly ? plan.yearly : plan.price}</h3>
            </div>
          </div>
          <div>
            {plan.features && (
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <button>{plan.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubscribeCard;
