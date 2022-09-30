import React from 'react';
import { ContainerTitle, ImgLicorn, TitleH1 } from './style';

const Title = () => {
    return (
        <ContainerTitle>
            <ImgLicorn src="./unicorn.png" alt="Licorne" />
            <TitleH1>My little things to do</TitleH1>
        </ContainerTitle>
    );
};

export default Title;