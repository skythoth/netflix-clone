import React, { useState } from 'react'                   
                                                            
  const ReviewCard = ({ review }) => {
    const [expanded, setExpanded] = useState(false)
    const isLong = review.content.length > 200

    return (
      <div className="review-card">
        <div className="review-header">
          <span 
  className="review-author">{review.author}</span>
          {review.author_details?.rating && (
            <span className="review-rating">⭐{review.author_details.rating}</span>
          )}
        </div>
        <p className={`review-content ${!expanded && isLong ? 'collapsed' : ''}`}>
          {review.content}
        </p>
        {isLong && (
          <button
            className="review-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? '접기' : '더보기'}
          </button>
        )}
      </div>
    )
  }

  export default ReviewCard
