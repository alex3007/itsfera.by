import React from 'react';
import cls from './FeedbackPage.module.css';

const FeedbackPage = (props) => {


    return (

        <div className={cls.postsBlock}>
            <h3>Оставить отзыв:</h3>
            <textarea className={cls.textArea}/>
            <div><button className={cls.buttonAddFeedback}>Отправить</button></div>
        </div>
    )
}
export default FeedbackPage;