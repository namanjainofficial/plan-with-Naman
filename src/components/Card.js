import React, { useState } from 'react'

const Card = ({ id, name, image, price, info, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    const description = readMore ? info : `${info.substr(0, 200)}....`;
    const readMoreHandler = () => {
        setReadMore(!readMore);
    }

    return (
        <div className="card">
            <img className='image' src={image} alt=' ' ></img>
            
            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-name">{name}</h4>
                    <h4 className="tour-price">₹ {price}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? 'show less' : 'Read More'}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>

        </div>
    )
}

export default Card
