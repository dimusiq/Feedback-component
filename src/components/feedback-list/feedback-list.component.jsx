import React from 'react';
import FeedbackItem from '../feedback-item/feedback-item.component';
import PropTypes from 'prop-types';


function FeedbackList({ feedback, handleDelete }) {
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem 
        key={item.id} 
        item={item} 
        handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array
}

export default FeedbackList;
