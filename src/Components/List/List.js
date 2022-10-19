  import ListItem from "../listItem/ListItem";
  import "./List.scss";
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';
  import ListPotraitItem from "../listPotraitItem/ListPotraitItem";

  export default function List(props) {
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
          {
            props.variant == 'landscape' ?
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
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </Carousel>
              :
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
                    <ListPotraitItem/>
                    <ListPotraitItem/>
                    <ListPotraitItem/>
                    <ListPotraitItem/>
                    <ListPotraitItem/>
                </Carousel>
          }
        </div>
    );
  }