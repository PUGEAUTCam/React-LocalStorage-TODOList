import React from 'react';
import { ContainerTitle, TitleH1 } from './style';

const Title = () => {
    return (
        <ContainerTitle>
            <img src="./unicorn.png" alt="Licorne" style={{ width: 187, marginRight: 16 }} />
            <TitleH1>My little things to do</TitleH1>
        </ContainerTitle>
    );
};

export default Title;