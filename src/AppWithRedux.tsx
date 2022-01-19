import React, {useCallback, useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {
    AddTodolistAC,
    ChangeTodoListFilterAC,
    ChangeTodoListTitleAC,
    removeTodoListAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";
import AppWithReducer from "./AppWithReducer";
import {useDispatch, useSelector} from "react-redux";
import {start} from "repl";
import {AppRootState} from "./state/store";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux() {
    console.log('App is called!')
    const dispatch = useDispatch()

    const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)

    const removeTask = useCallback( (id: string, todolistId: string) => {
        const action = removeTaskAC(id, todolistId);
        dispatch(action)
    }, [dispatch])

    const addTask = useCallback( (title: string, todolistId: string) => {
        const action = addTaskAC(title, todolistId);
        dispatch(action)
    }, [dispatch])

    const changeFilter = useCallback( (value: FilterValuesType, todolistId: string) => {
        const action = ChangeTodoListFilterAC(todolistId, value);
        dispatch(action)
    }, [dispatch])

    const changeStatus = useCallback( (id: string, isDone: boolean, todolistId: string) => {
        const action = changeTaskStatusAC(id, isDone, todolistId);
        dispatch(action)
    }, [dispatch])

    const changeTaskTitle = useCallback( (id: string, newTitle: string, todolistId: string) => {
        const action = changeTaskTitleAC(id, newTitle, todolistId);
        dispatch(action)
    }, [dispatch])

    const removeTodolist = useCallback( (id: string) => {
        const action = removeTodoListAC(id);
        dispatch(action)
    }, [dispatch])

    const changeTodolistTitle = useCallback( (id: string, title: string) => {
        const action = ChangeTodoListTitleAC(id, title);
        dispatch(action)
    }, [dispatch])

    const addTodolist = useCallback((title: string) => {
        const action = AddTodolistAC(title);
        dispatch(action)
    }, [dispatch])

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={5}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;



                            return <Grid item key={tl.id}>
                                <Paper style={{padding: '10px'}}>
                                <Todolist
                                    id={tl.id}
                                    title={tl.title}
                                    tasks={tasksForTodolist}
                                    removeTask={removeTask}
                                    changeFilter={changeFilter}
                                    addTask={addTask}
                                    changeTaskStatus={changeStatus}
                                    filter={tl.filter}
                                    removeTodolist={removeTodolist}
                                    changeTaskTitle={changeTaskTitle}
                                    changeTodolistTitle={changeTodolistTitle}
                                />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
        ;
}

export default AppWithRedux;
