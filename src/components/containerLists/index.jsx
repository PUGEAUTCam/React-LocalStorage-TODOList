import React from 'react';
import { Container, Title } from './style';

const ContainerLists = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <Container style={{ border: '5px solid #548dc8' }}>
                <Title>TO DO</Title>
            </Container>

            <Container style={{ border: '5px solid #72bf44' }}>
                <Title>DONE</Title>
            </Container>
        </div>
    );
};

export default ContainerLists;