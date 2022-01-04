import {userReducer} from './userReducer';

test.skip('user reducer should increment only age', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };

    const endState = userReducer(startState, { type: 'INCREMENT-AGE' })

    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2);
});

test.skip('user reducer should increment only childrenCount', () => {
    const startState = { age: 20, childrenCount: 2, name: 'Dimych' };
    const endState = userReducer(startState, { type: 'INCREMENT-CHILDREN-COUNT' })

    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(3);
});


