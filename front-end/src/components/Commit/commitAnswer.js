import React, { createElement, useState } from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Comment, Tooltip, Avatar } from 'antd';

import './index.css';
import NewCommit from './newCommit';

function CommitAnswer({ dataAnswer, numAmswer }) {

    const [openCommit, setOpenCommit] = useState(false);
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
        <span key="comment-basic-reply-to" onClick={() => setOpenCommit(openCommit ? false : true)}>Responde</span>,
    ];

    return (
        <Comment
            actions={actionsAnswer}
            author={<a> {dataAnswer.name_user}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt={dataAnswer.name_user}
                />
            }
            content={
                <p>{dataAnswer.answer}</p>
            }
            datetime={
                <Tooltip title='2015-09-01'>
                    <span>2015-09-01</span>
                </Tooltip>
            }
        >
            {/* Component ADD new commit */}
            <NewCommit cleaText={() => setOpenCommit(false)} newText={openCommit} index={numAmswer} type={'commit-answer'}/>
        </Comment>
    );
}

export default CommitAnswer;
