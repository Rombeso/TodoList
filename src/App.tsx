import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType ={
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);
    }



    function changeFilter(value: FilterValuesType, todolistID: string) {
        let todoList = todoLists.find(f => f.id === todolistID)
        if (todoList) {
            todoList.filter = value
            setTodoList([...todoLists])
        }
    }

    let [todoLists, setTodoList] = useState<Array<TodoListsType>> ([
        {id: v1(), title: 'Fist todo list', filter: 'active'},
        {id: v1(), title: 'Second todo list', filter: 'completed'}
    ])

    return (
        <div className="App">
            {
                todoLists.map(m=> {
                    let tasksForTodolist = tasks;

                    if (m.filter === "active") {
                        tasksForTodolist = tasks.filter(t => t.isDone === false);
                    }
                    if (m.filter === "completed") {
                        tasksForTodolist = tasks.filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            key={m.id}
                            todolistID={m.id}
                            title={m.title}
                                  tasks={tasksForTodolist}
                                  removeTask={removeTask}
                                  changeFilter={changeFilter}
                                  addTask={addTask}
                                  changeTaskStatus={changeStatus}
                                  filter={m.filter}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
