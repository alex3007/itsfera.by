import React from 'react';

const FeedbackPage = (props) => {

    let newFeedbackMessage = React.createRef();

    let onAddFeedback = () => {
        props.addPost();
    }
    let onFeedbackChange = () => {
        let text = newFeedbackMessage.current.value;
        props.updateNewText(text);
    }

    return (

        <div className={cls.postsBlock}><h3> My posts</h3>
            <textarea onChange={onFeedbackChange}
                      ref={newFeedbackMessage}
                      value={props.newText}
                      className={cls.textArea}></textarea>
            <button onClick={onAddFeedback} className={cls.buttonAddPost}>Add post</button>

        </div>
    )
}
export default FeedbackPage;