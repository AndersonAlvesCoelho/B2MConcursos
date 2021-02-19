import React, { createElement, useState } from 'react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Comment, Tooltip, Avatar } from 'antd';

import CommentAnswer from './commentAnswer';
import NewComment from './newComment';
import './index.css';


function CommentUser({ dataComment, numComment }) {

    const [openComment, setOpenComment] = useState(false);
    const [commentStatus, setCommentStatus] = useState({
        likes: 0,
        dislikes: 0,
        setAction: null,
    });

    function like() {
        setCommentStatus({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        })
    };

    function dislike() {
        setCommentStatus({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        })
    }

    console.log(dataComment);

    //JSX icons add like, dislike e new Comment
    const actionsComment = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(commentStatus.action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{commentStatus.likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
                {React.createElement(commentStatus.action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{commentStatus.dislikes}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" onClick={() => setOpenComment(openComment ? false : true)}>Responde</span>,
    ];



    return (
        <Comment
            actions={actionsComment}
            author={<a> {dataComment.user.login}</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt={dataComment.user.login}
                />
            }
            content={
                <p>{dataComment.comment}</p>
            }
            datetime={
                <Tooltip title={Date(dataComment.updated_at)}>
                    <span>{Date(dataComment.updated_at)}</span>
                </Tooltip>
            }
        >
            {/* Component view Comment answer */}
            {dataComment.comment_answer.map((answ, index) =>
                <div key={index}>
                    <CommentAnswer dataAnswer={answ} numAmswer={numComment} />
                </div>
            )}

            {/* Component ADD new Comment */}
            <NewComment cleaText={() => setOpenComment(false)} newText={openComment} type={'comment-user'} />
        </Comment>
    );
}

export default CommentUser;
