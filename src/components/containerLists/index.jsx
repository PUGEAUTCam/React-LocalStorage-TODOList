import React, { useState } from 'react';
import TasksToDO from '../tasksToDo';
import ToDoForm from '../todoFormulaire';
import { Container, Section, Title, UlTasks } from './style';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import TasksDone from '../tasksDone';
import BtnClear from '../btnClear';

const ContainerLists = () => {

    const STORAGE_TODO_KEY = 'TODO'
    const STORAGE_DONE_KEY = 'DONE'

    const [tasks, setTasks] = useLocalStorage(STORAGE_TODO_KEY, []);
    const [tasksDone, setTasksDone] = useLocalStorage(STORAGE_DONE_KEY, []);


    const handleTaskCreated = (taskToAdd) => {
        setTasks([...tasks, taskToAdd]);
    }

    const handleDeleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    }

    const handleTaskDone = (taskDone) => {
        setTasksDone([...tasksDone, taskDone]);
        setTasks(tasks.filter(task => task !== taskDone));
    }

    const handleDeleteAllTasks = () => {
        setTasksDone([])
    }

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
                            handleDeleteTask={handleDeleteTask}
                            handleTaskDone={handleTaskDone}
                        />
                    )}
                </UlTasks>
            </Container>


            <Container style={{ border: '5px solid #72bf44' }}>
                <Title>DONE</Title>

                <BtnClear handleDeleteAllTasks={handleDeleteAllTasks}>Clear</BtnClear>

                <UlTasks>
                    {tasksDone.map((taskDone, index) =>
                        <TasksDone
                            key={index}
                            taskDone={taskDone}
                        />
                    )}
                </UlTasks>

            </Container>

        </Section>
    );
};

export default ContainerLists;