import React from 'react'
import Top10Item from '../Top10Item/Top10Item';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Top10List = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  
      return (
        <div className="list">
          <span className="listTitle">{props.title}</span>
                <Carousel 
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 30
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                  >
                    <Top10Item chartNumber='1'/>
                    <Top10Item chartNumber='2'/>
                    <Top10Item chartNumber='3'/>
                    <Top10Item chartNumber='4'/>
                    <Top10Item chartNumber='5'/>
                    <Top10Item chartNumber='6'/>
                    <Top10Item chartNumber='7'/>
                    <Top10Item chartNumber='8'/>
                    <Top10Item chartNumber='9'/>
                    <Top10Item chartNumber='10'/>
                  </Carousel>
             
          </div>
      );
}

export default Top10List