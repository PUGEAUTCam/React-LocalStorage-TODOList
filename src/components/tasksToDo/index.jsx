import React from 'react';
import { ButtonDeleteTask, LiTask } from './style';

const TaskToDO = ({ task }) => {

    return (
        <LiTask>
            <ButtonDeleteTask>*</ButtonDeleteTask>
            {task}
        </LiTask>
    );
};

export default TaskToDO;