import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './carousel.css';

import sportImg from '../../assets/sport.jpg';
import loisirImg from '../../assets/loisir.jpg';
import teamWorkImg from '../../assets/teamwork.jpg';
import { Link } from 'react-router-dom';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        sportImg,
        loisirImg,
        teamWorkImg,
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
                <Link to={""}>
                    <img src={src} alt={`Slide ${current + 1}`} />
                </Link>
            
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
