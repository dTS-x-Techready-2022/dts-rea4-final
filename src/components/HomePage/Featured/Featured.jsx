import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import './Featured.css';
import MoviePoster from '../../../Logo/MoviePoster.png';
import MovieName from '../../../Logo/MovieName.png';

const Featured = ({type}) => {
  return (
    <>
    <div className='featured'>
        {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img
            width={"100%"}
            loading="lazy"
            src={MoviePoster}
            alt=""
        />
        <div className="info">
        <img
          loading="lazy"
          src={MovieName}
          alt=""
        />
        <span className="desc">Anak yatim jalanan yang menjadi Gundala sang pahlawan super ini memanfaatkan kekuatan petir dan berjuang menjaga kotanya dari ketidakadilan dan bos mafia yang penindas.</span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info Information</span>
            </button>
        </div>
        </div>
       

    </div>
    <br/>
        <br/>
    <span><h3>Description</h3> <br/>Anak yatim jalanan yang menjadi Gundala sang pahlawan super ini memanfaatkan kekuatan petir dan berjuang menjaga kotanya dari ketidakadilan dan bos mafia yang penindas.</span>
    

    </>

  )
}

export default Featured