import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  constructor() {
    super();
    setInterval(() => this.forceUpdate(), 1000); // run this.forceUpdate() every second
  }

  static propTypes = {
    title: PropTypes.node,
    promoDescription: PropTypes.node,
  };

  mockProps = {
    title: 'Happy Hour',
    promoDescription:
      'Its your time! Take advantage of Happy Hour! All offers 20% off!',
  };

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(),
        12,
        0,
        0,
        0
      )
    );

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render() {
    const timer = this.getCountdownTime();

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.mockProps.title}</h3>
        <div className={styles.countdown}>
          {timer > 82800 ? this.mockProps.promoDescription : timer}
        </div>
      </div>
    );
  }
}

export default HappyHourAd;
