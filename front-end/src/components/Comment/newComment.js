import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

import './index.css';
import { questionData } from '../../services/filter/dataSelect';

const { TextArea } = Input;

function NewComment({ cleaText, newText, index, type }) {

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    // set value Comment
    function handleChange(e) {
        setValue(e.target.value);
    };

    // Register new Comment
    function handleSubmit() {
        if (!value) {
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            //register in Comment
            if (type === 'comment-user') {
                questionData[0].comment.push({
                    name_user: 'Lero lero',
                    comment: value,
                })
            } else {
                //register in answer
                questionData[0].comment[index].answer.push({
                    name_user: 'Lero lero',
                    answer: value,
                })
            }
            setValue('');
            cleaText();
        }, 1000);
    }

    return (
        <>  
            {/* View textArea if button click (newText true or false)   */}
            {newText &&
                <>
                    <Form.Item>
                        <TextArea rows={4} onChange={handleChange} value={value} />
                    </Form.Item>
                    <Form.Item>
                        <Button loading={loading} onClick={handleSubmit} type="primary">Responder</Button>
                    </Form.Item>
                </>
            }

        </>
    );
}

export default NewComment;
