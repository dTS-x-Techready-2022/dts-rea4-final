import './CardDiv.css';

const CardDiv = ({data}) => {
  return (
    <div className='carddiv'>
        <div className="imgdiv">
            <img
                src={data.image}
                alt=''
            />
        </div>
        <div className="textdiv">
            <span className='large'>{data.large}</span>
            <span className='medium'>{data.medium}</span>
        </div>
    </div>
  )
}

export default CardDiv