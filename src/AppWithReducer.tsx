import React, {useReducer, useState} from 'react';
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

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {
    function removeTask(id: string, todolistId: string) {
        const action = removeTaskAC(id, todolistId);
        dispatchToTasksReducer(action)
    }

    function addTask(title: string, todolistId: string) {
        const action = addTaskAC(title, todolistId);
        dispatchToTasksReducer(action)
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        const action = ChangeTodoListFilterAC(todolistId, value);
        dispatchToTodolistsReducer(action)
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        const action = changeTaskStatusAC(id, isDone, todolistId);
        dispatchToTasksReducer(action)
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        const action = changeTaskTitleAC(id, newTitle, todolistId);
        dispatchToTasksReducer(action)
    }

    function removeTodolist(id: string) {
        const action = removeTodoListAC(id);
        dispatchToTodolistsReducer(action)
        dispatchToTasksReducer(action)
    }

    function changeTodolistTitle(id: string, title: string) {
        const action = ChangeTodoListTitleAC(id, title);
        dispatchToTodolistsReducer(action)
    }

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, dispatchToTodolistsReducer] = useReducer(todolistsReducer,[
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, dispatchToTasksReducer] = useReducer(tasksReducer,{
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

    function addTodolist(title: string) {
        const action = AddTodolistAC(title);
        dispatchToTodolistsReducer(action)
        dispatchToTasksReducer(action)
    }

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

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                            }

                            return <Grid item>
                                <Paper style={{padding: '10px'}}>
                                <Todolist
                                    key={tl.id}
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

export default App;
