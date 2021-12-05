import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);

    let todoListID1 = v1()
    let todolistID2 = v1()

    let [tasks, setTasks] = useState({
        [todoListID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: true},
            {id: v1(), title: 'Rest app1', isDone: false}
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: true},
            {id: v1(), title: 'Rest api2', isDone: false}
        ]
    })

    let [todoLists, setTodoLists] = useState<Array<todoListType>>([
        {id: todoListID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'what to buy', filter: 'all'}
    ])

    function removeTask(todoListID: string, id: string) {
setTasks({...tasks, [todoListID]:tasks[todoListID].filter(f=> f.id !== id)})
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todoListID: string, title: string) {
setTasks({...tasks, [todoListID]:[{id: v1(), title: title, isDone: false}, ...tasks[todoListID]]})
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
setTasks({[todoListID]:tasks[todoListID].map(m=> m.id === taskId ? {...m, isDone: isDone} : m)})
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }

    function changeFilter(todoListID: string, value: FilterValuesType) {
setTodoLists(todoLists.map(m=> m.id === todoListID ? {...m, filter: value} : m))
        // let currentTodoList = todoLists.find(f=> f.id===todoListID)
        // if(currentTodoList) {
        //     currentTodoList.filter = value
        //     setTodoLists([...todoLists])
        // }
    }

    const removeTodoList = (todoListID: string) => {
setTodoLists(todoLists.filter(f=> f.id !== todoListID))
    }

    return (
        <div className="App">
            {todoLists.map(m => {
                // let tasksForTodolist = tasks[m.id];
                //
                // if (m.filter === "active") {
                //     tasksForTodolist = tasks[m.id].filter(t => t.isDone === false);
                // }
                // if (m.filter === "completed") {
                //     tasksForTodolist = tasks[m.id].filter(t => t.isDone === true);
                // }
                return (
                    <Todolist
                        key={m.id}
                        todoListID={m.id}
                        title={m.title}
                        tasks={tasks[m.id]}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={m.filter}
                        removeTodoList={removeTodoList}
                    />
                )
            })}

        </div>
    );
}

export default App;
