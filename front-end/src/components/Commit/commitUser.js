import React, { createElement, useState } from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Comment, Tooltip, Avatar } from 'antd';

import CommitAnswer from './commitAnswer';
import NewCommit from './newCommit';
import './index.css';


function CommitUser({ dataCommit, numCommit }) {

    const [openCommit, setOpenCommit] = useState(false);
    const [commitStatus, setCommitStatus] = useState({
        likes: 0,
        dislikes: 0,
        setAction: null,
    });

    function like() {
        setCommitStatus({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        })
    };

    function dislike() {
        setCommitStatus({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        })
    }

    //JSX icons add like, dislike e new commit
    const actionsCommit = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(commitStatus.action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{commitStatus.likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(commitStatus.action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{commitStatus.dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" onClick={() => setOpenCommit(openCommit ? false : true)}>Responde</span>,
    ];



    return (
        <Comment
            actions={actionsCommit}
            author={<a> {dataCommit.name_user}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt={dataCommit.name_user}
                />
            }
            content={
                <p>{dataCommit.commit}</p>
            }
            datetime={
                <Tooltip title='2015-09-01'>
                    <span>2015-09-01</span>
                </Tooltip>
            }
        >
            {/* Component view commit answer */}
            {dataCommit.answer ? dataCommit.answer.map((answ, index) =>
                <div key={index}>
                    <CommitAnswer dataAnswer={answ} numAmswer={numCommit} />
                </div>
            ) : null}

            {/* Component ADD new commit */}
            <NewCommit cleaText={() => setOpenCommit(false)} newText={openCommit} type={'commit-user'} />
        </Comment>

    );
}

export default CommitUser;
