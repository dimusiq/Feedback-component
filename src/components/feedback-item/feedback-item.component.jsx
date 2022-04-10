import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from '../card/card.component';
import FeedbackContext from '../../context/feedback.context';

function FeedbackItem({ item }) {
    const {deleteFeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}


export default FeedbackItem;
