import { useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import classes from './NewCommentForm.module.css';

const NewCommentForm = props => {
    const commentTextRef = useRef();
    const { status, data, error, sendRequest } = useHttp(addComment);

    const submitFormHandler = async event => {
        event.preventDefault();
        const commentData = {
            quoteId: props.quoteId,
            commentData: commentTextRef.current.value
        };
        await sendRequest(commentData);
        props.onAdd();
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
