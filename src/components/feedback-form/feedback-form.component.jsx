import React, { useState, useContext } from 'react';
import Card from '../card/card.component';
import CustomButton from '../custom-button/custom-button.component';
import RatingSelect from '../rating-selector/rating-selector.component';
import FeedbackContext from '../../context/feedback.context';


function FeedbackForm() {
  const {addFeedback} = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      addFeedback(newFeedback)

      setText('')
    }
  }


  const handleTextChange = (e) =>{
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect  select={(rating)=> setRating(rating)}/>
        <div className='input-group'>
            <input
              onChange={handleTextChange}
              type='text'
              placeholder='Write a review'
              value={text}
              />
            <CustomButton 
            type="submit" 
            version='secondary'
            isDisabled={btnDisabled}
            >
            Send
            </CustomButton>
          </div>
          {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
