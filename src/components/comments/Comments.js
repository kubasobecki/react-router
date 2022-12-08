import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = props => {
    const [isAddingComment, setIsAddingComment] = useState(false);

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const endAddCommentHandler = () => {
        setIsAddingComment(false);
    };

    const { status, data, error, sendRequest } = useHttp(getAllComments);

    let comments = data
        ? data.map(comment => <p key={comment.id}>{comment.text}</p>)
        : '';

    useEffect(() => {
        sendRequest(props.quoteId);
    }, [isAddingComment, sendRequest, props.quoteId]);

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className="btn" onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && (
                <NewCommentForm
                    quoteId={props.quoteId}
                    onAdd={endAddCommentHandler}
                />
            )}
            {status === 'pending' && <LoadingSpinner />}
            {comments || error}
        </section>
    );
};

export default Comments;
