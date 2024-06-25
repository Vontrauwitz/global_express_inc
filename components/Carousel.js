// components/Carousel.js
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const Carousel = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div ref={ref1} className="parallax" style={{ backgroundImage: 'url(/images/slider1.jpg)' }}>
        <div className="overlay">
          {inView1 && (
            <div className="parallax-text">
              <Typewriter
                words={['Welcome to Global Express Inc.']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={50}
              />
            </div>
          )}
        </div>
      </div>
      <div ref={ref2} className="parallax" style={{ backgroundImage: 'url(/images/slider2.jpg)' }}>
        <div className="overlay">
          {inView2 && (
            <div className="parallax-text">
              <Typewriter
                words={['Revolutionizing the Job Market']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                delaySpeed={1000}
              />
            </div>
          )}
        </div>
      </div>
      <div ref={ref3} className="parallax" style={{ backgroundImage: 'url(/images/slider3.jpg)' }}>
        <div className="overlay">
          {inView3 && (
            <div className="parallax-text">
              <Typewriter
                words={['Connecting Businesses with Workers']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                delaySpeed={2000}
              />
            </div>
          )}
        </div>
      </div>
      <div ref={ref4} className="parallax" style={{ backgroundImage: 'url(/images/slider4.jpg)' }}>
        <div className="overlay">
          {inView4 && (
            <div className="parallax-text">
              <Typewriter
                words={['Integrity and Professionalism']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                delaySpeed={3000}
              />
            </div>
          )}
        </div>
      </div>
      <div ref={ref5} className="parallax" style={{ backgroundImage: 'url(/images/slider5.jpg)' }}>
        <div className="overlay">
          {inView5 && (
            <div className="parallax-text">
              <Typewriter
                words={['Join Us Where Integrity Meets Excellence']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                delaySpeed={4000}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
