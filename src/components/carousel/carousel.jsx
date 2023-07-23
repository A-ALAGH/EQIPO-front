import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './carousel.css';

import sportImg from '../../assets/sport.jpg';
import loisirImg from '../../assets/loisir.jpg';
import teamWorkImg from '../../assets/teamwork.jpg';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        sportImg,
        loisirImg,
        teamWorkImg,
        // 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
        // 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
        // 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
        // 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
        // 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg'
      ],
      current: 0,
      isNext: true
    };
  }

  handlerPrev = () => {
    let index = this.state.current;
    const length = this.state.items.length;

    if (index < 1) {
      index = length;
    }

    index = index - 1;

    this.setState({
      current: index,
      isNext: false
    });
  };

  handlerNext = () => {
    let index = this.state.current;
    const length = this.state.items.length - 1;

    if (index === length) {
      index = -1;
    }

    index = index + 1;

    this.setState({
      current: index,
      isNext: true
    });
  };

  goToHistoryClick = (curIndex, index) => {
    const next = curIndex < index;
    this.setState({
      current: index,
      isNext: next
    });
  };

  render() {
    const { current, isNext, items } = this.state;
    const src = items[current];

    return (
      <div className="app">
        <div className="carousel">
          <TransitionGroup>
            <CSSTransition
              key={current}
              classNames={{
                enter: isNext ? 'enter-next' : 'enter-prev',
                enterActive: 'enter-active',
                exit: 'leave',
                exitActive: isNext ? 'leave-active-next' : 'leave-active-prev'
              }}
              timeout={300}
            >
              <div className="carousel_slide">
                <img src={src} alt={`Slide ${current + 1}`} />
              </div>
            </CSSTransition>
          </TransitionGroup>
          <button
            className="carousel_control carousel_control__prev"
            onClick={this.handlerPrev}
          >
            <span></span>
          </button>
          <button
            className="carousel_control carousel_control__next"
            onClick={this.handlerNext}
          >
            <span></span>
          </button>
          <div className="carousel_history">
            <History
              current={current}
              items={items}
              changeSlide={this.goToHistoryClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

class History extends Component {
  render() {
    const { current, items, changeSlide } = this.props;

    const historyItems = items.map((el, index) => {
      const name = index === current ? 'active' : '';

      return (
        <li key={index}>
          <button
            className={name}
            onClick={() => changeSlide(current, index)}
          ></button>
        </li>
      );
    });

    return <ul>{historyItems}</ul>;
  }
}

export default Carousel;
