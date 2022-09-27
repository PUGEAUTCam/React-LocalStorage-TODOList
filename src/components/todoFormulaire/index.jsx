import React, { useState } from 'react';
import { ButtonSubmit, Form, InputAddTask } from './style';

const ToDoForm = (props) => {

    const [newTask, setNewTask] = useState('');

    //Comportements

    const handleChange = (taskToAdd) => {
        setNewTask(taskToAdd.target.value);
    };

    const handleSubmit = () => {
        props.onTaskCreated(newTask);
    };


    return (
        <Form>
            <InputAddTask
                type="text"
                placeholder="Add a thing to do..."
                onChange={handleChange}
            />
            <ButtonSubmit onClick={handleSubmit}>*</ButtonSubmit>
        </Form>
    );
};

export default ToDoForm;