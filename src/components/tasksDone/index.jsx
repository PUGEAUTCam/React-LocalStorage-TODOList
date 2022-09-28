import React from 'react';
import { LiTaskDone } from './style';

const TasksDone = ({ taskDone }) => {

    return (
        <div>
            <LiTaskDone>
                {taskDone}
            </LiTaskDone>

        </div>
    );
};

export default TasksDone;