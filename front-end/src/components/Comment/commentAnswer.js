import React, { createElement, useState } from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Comment, Tooltip, Avatar } from 'antd';

import './index.css';
import NewComment from './newComment';

function CommentAnswer({ dataAnswer, numAmswer }) {

    const [openComment, setOpenComment] = useState(false);
    const [answerStatus, setAnswerStatus] = useState({
        likes: 0,
        dislikes: 0,
        setAction: null,
    });

    function like() {
        setAnswerStatus({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        })
    };

    function dislike() {
        setAnswerStatus({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        })
    }


    //JSX icons add like, dislike e new answer
    const actionsAnswer = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(answerStatus.action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{answerStatus.likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(answerStatus.action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{answerStatus.dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" onClick={() => setOpenComment(openComment ? false : true)}>Responde</span>,
    ];

    return (
        <Comment
            actions={actionsAnswer}
            author={<a> {dataAnswer.user.email}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt={dataAnswer.user.email}
                />
            }
            content={
                <p>{dataAnswer.answer}</p>
            }
            datetime={
                <Tooltip title={Date(dataAnswer.updated_at)}>
                    <span>{Date(dataAnswer.updated_at)}</span>
                </Tooltip>
            }
        >
            {/* Component ADD new Comment */}
            <NewComment cleaText={() => setOpenComment(false)} newText={openComment} index={numAmswer} type={'comment-answer'}/>
        </Comment>
    );
}

export default CommentAnswer;
