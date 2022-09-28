import React from 'react';
import { ButtonDeleteTask, LiTask } from './style';

const TaskToDO = ({ task, handleDeleteTask, handleTaskDone }) => {

    return (
        <LiTask>
            <ButtonDeleteTask onClick={() => handleDeleteTask(task)} style={{ backgroundColor: '#ef753e' }}>X</ButtonDeleteTask>
            <ButtonDeleteTask onClick={() => handleTaskDone(task)} style={{ backgroundColor: '#72bf44' }}>✓</ButtonDeleteTask>
            {task}
        </LiTask>
    );
};

export default TaskToDO;