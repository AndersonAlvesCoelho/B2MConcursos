import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

import './index.css';
import { questionData } from '../../services/filter/dataSelect';

const { TextArea } = Input;

function NewCommit({ cleaText, newText, index, type }) {

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    // set value commit
    function handleChange(e) {
        setValue(e.target.value);
    };

    // Register new commit
    function handleSubmit() {
        if (!value) {
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            //register in commit
            if (type === 'commit-user') {
                questionData[0].commit.push({
                    name_user: 'Lero lero',
                    commit: value,
                })
            } else {
                //register in answer
                questionData[0].commit[index].answer.push({
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

export default NewCommit;
