import React, { useState } from 'react';
import TasksToDO from '../tasksToDo';
import ToDoForm from '../todoFormulaire';
import { Container, Section, Title, UlTasks } from './style';

const ContainerLists = () => {

    const [tasks, setTasks] = useState(['Test', 'Coucou']);


    const handleTaskCreated = (taskToAdd) => {
        setTasks([...tasks, taskToAdd]);
    }

    console.log(tasks);


    return (
        <Section>

            <Container style={{ border: '5px solid #548dc8' }}>
                <Title>TO DO</Title>

                <ToDoForm onTaskCreated={handleTaskCreated} />

                <UlTasks>
                    {tasks.map((task, index) =>
                        <TasksToDO
                            key={index}
                            task={task}
                        />
                    )}
                </UlTasks>
            </Container>


            <Container style={{ border: '5px solid #72bf44' }}>
                <Title>DONE</Title>
            </Container>

        </Section>
    );
};

export default ContainerLists;