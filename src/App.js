import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import FeedbackList from './components/feedback-list/feedback-list.component';
import FeedbackStats from './components/feedback-stats/feedback-stats.component';
import FeedbackForm from './components/feedback-form/feedback-form.component';
import AboutIconLink from './components/icon-link/icon-link.component';
import AboutPage from './pages/about/about.component';
import {FeedbackProvider} from './context/feedback.context';


function App() {

    return (
        <FeedbackProvider>
    <Router>
            <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                            </>
                        }
                        >
                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
        
    )
}

export default App;