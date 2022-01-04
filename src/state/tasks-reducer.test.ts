import {TasksStateType} from "../App";
import {v1} from "uuid";
import {addTasksAC, changeStatusAC, changeTaskTitleAC, removeTasksAC, tasksReducer} from "./tasks-reducer";

test.skip('correct task should be deleted from correct array', () => {
        const stateState: TasksStateType = {
            "todoListId1": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
            "todoListId2": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
        }

        const action = removeTasksAC('2',  "todoListId2")
        const endState = tasksReducer(stateState, action)

    expect(endState['todoListId1'].length).toBe(3)
    expect(endState['todoListId2'].length).toBe(2)
    expect(endState['todoListId2'].every(t => t.id != '2')).toBeTruthy()
    }
)

test.skip('correct task should be added from correct array', () => {
        const stateState: TasksStateType = {
            "todoListId1": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
            "todoListId2": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
        }

        const action = addTasksAC('juse',  "todoListId2")
        const endState = tasksReducer(stateState, action)

        expect(endState["todoListId1"].length).toBe(3)
        expect(endState["todoListId2"].length).toBe(4)
        expect(endState["todoListId2"][0].title).toBe('juse');
        expect(endState["todoListId2"][0].isDone).toBe(false);
    }
)

test.skip('status of specified task should be changed', () => {
        const stateState: TasksStateType = {
            "todoListId1": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
            "todoListId2": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
        }

        const action = changeStatusAC('2',  false,"todoListId2" )
        const endState = tasksReducer(stateState, action)

        expect(endState["todoListId1"][1].isDone).toBe(true);
        expect(endState["todoListId2"][1].isDone).toBe(false);
    }
)

test('title of specified task should be changed', () => {
        const stateState: TasksStateType = {
            "todoListId1": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
            "todoListId2": [
                {id: '1', title: "HTML&CSS", isDone: false},
                {id: '2', title: "HTML&CSS", isDone: true},
                {id: '3', title: "HTML&CSS", isDone: false}
            ],
        }

        const action = changeTaskTitleAC('2',  'Milckyway',"todoListId2" )
        const endState = tasksReducer(stateState, action)

        expect(endState["todoListId1"][1].title).toBe("HTML&CSS");
        expect(endState["todoListId2"][1].title).toBe('Milckyway');
    }
)