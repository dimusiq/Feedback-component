import React, { useState } from 'react';
import Header from './components/header/header.component';
import FeedbackList from './components/feedback-list/feedback-list.component';
import FeedbackData from './data/data';


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?'))
        setFeedback(feedback.filter((item)=> item.id !== id))
    }
    return (
        <>
        <Header />
            <div className='container'>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App;