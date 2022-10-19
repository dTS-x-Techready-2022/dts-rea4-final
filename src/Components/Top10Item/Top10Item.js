import { Card, Col, Row } from 'react-bootstrap';
import { CardImage } from 'react-bootstrap-icons';
import './Top10Item.scss';

const Top10Item = (props) => {
  return (
    <div className='d-none d-sm-block'>
        <div class="cardTop10">
          <div class="left">
            <p className='chart'>{props.chartNumber}</p>
          </div>
          <div class="right">
            <img src="https://www.indiewire.com/wp-content/uploads/2019/12/midsommar.jpg?w=800" class="card-img" alt="..." />
          </div>
        </div>
    </div>
  )
}

export default Top10Item