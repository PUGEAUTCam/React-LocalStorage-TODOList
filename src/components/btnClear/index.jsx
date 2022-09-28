import React from 'react';
import { ButtonClear } from './style';

const BtnClear = ({ handleDeleteAllTasks }) => {

    return (
        <div style={{ textAlign: 'center' }}>
            <ButtonClear onClick={() => handleDeleteAllTasks()}>Clear</ButtonClear>
        </div>
    );
};

export default BtnClear;

