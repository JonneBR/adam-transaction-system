import React from 'react';
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__continer-cardInfo">
                  <div className="icon">
                    <FaFire />
                    <h3>Starter</h3>
                    <h4>$8.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>100 Transaction</li>
                      <li>2% Cash Back</li>
                      <li>$10,000 Limit</li>
                      <Button buttonSize="btn--wide" buttonColor="primary">
                        Choose Plan
                      </Button>
                    </ul>
                  </div>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__continer-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                    <h3>Gold</h3>
                    <h4>$29.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>1000 Transaction</li>
                      <li>3.5% Cash Back</li>
                      <li>$100,000 Limit</li>
                      <Button buttonSize="btn--wide" buttonColor="primary">
                        Choose Plan
                      </Button>
                    </ul>
                  </div>
                </div>
              </Link>
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__continer-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                    <h3>Diamong</h3>
                    <h4>$99.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>Unlimited Transaction</li>
                      <li>5% Cash Back</li>
                      <li>Unlimited Spending</li>
                      <Button buttonSize="btn--wide" buttonColor="primary">
                        Choose Plan
                      </Button>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
