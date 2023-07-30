import React, { useEffect } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import Rating from 'react-rating';

const StarRating = ({data}) => {
  return (
    <div>
        <Rating
          readonly={true}
          initialRating={data.ratings}
          emptySymbol={<BsStar className="text-yellow-500 mx-0.5" />}
          fullSymbol={<BsStarFill className="text-yellow-500" />}
        />
    </div>
  )
}

export default StarRating