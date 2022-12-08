import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = props => {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const { status, data, error, sendRequest } = useHttp(getAllComments);
    const { quoteId } = props;

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const endAddCommentHandler = useCallback(() => {
        setIsAddingComment(false);
        sendRequest(quoteId);
    }, [setIsAddingComment, sendRequest, quoteId]);

    let comments;

    if (status === 'pending')
        comments = (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );

    if (status === 'completed' && (!data || data.length < 1))
        comments = <p className="centered">No comments were added yet.</p>;

    if (status === 'completed' && (data || data.length > 0))
        comments = <CommentsList comments={data} />;

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

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
                    quoteId={quoteId}
                    onAdd={endAddCommentHandler}
                />
            )}
            {comments}
        </section>
    );
};

export default Comments;
