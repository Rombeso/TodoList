import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(id: string, todolistID: string) {
        let task = tasks[todolistID]
        let filteredTasks = task.filter(t => t.id != id);
        tasks[todolistID] = filteredTasks
        setTasks({...tasks});
    }

    function addTask(title: string, todolistID: string) {
        let task = {id: v1(), title: title, isDone: false};
        let allTasks = tasks[todolistID];
        let newTasks = [task, ...allTasks];
        tasks[todolistID] = newTasks
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string) {
        let allTasks = tasks[todolistID];
        let task = allTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        let todoList = todoLists.find(f => f.id === todolistID)
        if (todoList) {
            todoList.filter = value
            setTodoList([...todoLists])
        }
    }

    let todoListID1 = v1()
    let todoListID2 = v1()

    let [todoLists, setTodoList] = useState<Array<TodoListsType>>([
        {id: todoListID1, title: 'Fist todo list', filter: 'active'},
        {id: todoListID2, title: 'Second todo list', filter: 'completed'}
    ])

    let [tasks, setTasks] = useState({
        [todoListID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todoListID2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Book", isDone: false},
        ]
    })

    const removeTodoList = (todolistID: string) => {
        let filteredTodoList = todoLists.filter(f => f.id !== todolistID)
        setTodoList(filteredTodoList)

    }
    return (
        <div className="App">
            {
                todoLists.map(m => {
                    let tasksForTodolist = tasks[m.id];

                    if (m.filter === "active") {
                        tasksForTodolist = tasks[m.id].filter(t => t.isDone === false);
                    }
                    if (m.filter === "completed") {
                        tasksForTodolist = tasks[m.id].filter(t => t.isDone === true);
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
                            removeTodoList={removeTodoList}

                        />
                    )
                })
            }
        </div>
    );
}

export default App;
