import React from 'react';
//importing components
import ShorterLink from '../containers/ShorterLink';
const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics__container">
        <ShorterLink />
        <div className="text__content__advanced">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statistics__dashboard">
          <div className="blue__line"></div>
          <div className="statistics__item recognition">
            <div className="icon__container">
              <div className="icon">
                <img
                  src="./images/icon-brand-recognition.svg"
                  alt="icon-brand-recognition"
                />
              </div>
            </div>
            <div className="text__content__item">
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="statistics__item records">
            <div className="icon__container">
              <div className="icon">
                <img
                  src="./images/icon-detailed-records.svg"
                  alt="icon-detailed-records"
                />
              </div>
            </div>
            <div className="text__content__item">
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="statistics__item customizable">
            <div className="icon__container">
              <div className="icon">
                <img
                  src="./images/icon-fully-customizable.svg"
                  alt="icon-fullly-customizable"
                />
              </div>
            </div>
            <div className="text__content__item">
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
