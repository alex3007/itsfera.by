import React from 'react';
import cls from './FeedbackPage.module.css';

const FeedbackPage = (props) => {

    let newFeedbackElement = React.createRef();
    let feedbackElements = props.feedbacks
        .map(message => <Message message={message.message}/>)
    let onAddMessage = () => {
        props.addMessage();
    }
    let onFeedbackChange = () => {
        let text = newFeedbackElement.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={cls.messageBlock}>
            <h3>Оставить отзыв:</h3>
            <textarea onChange={onFeedbackChange}
                      className={cls.textArea}
                      ref={newFeedbackElement}
                      value={props.newMessageText}/>
            <div>
                <button onClick={onAddMessage} className={cls.buttonAddFeedback}>Отправить</button>
            </div>
            <div>
                {feedbackElements}
            </div>
        </div>
    )
}
export default FeedbackPage;