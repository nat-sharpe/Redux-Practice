import { createStore } from "redux";

const reducer = (state, action) => {
    console.log(state)
    console.log(action)

    if (action.type === "BIGGER") {
        return state + action.payload;
    } 
    if (action.type === "LESSER") { 
        return state - action.payload
    }
    return state
};

const store = createStore(reducer, 0);

console.log(store.getState());

store.subscribe(() => {
    console.log("Store change", store.getState())
});

store.dispatch({type: "BIGGER", payload: 10}) 
store.dispatch({type: "BIGGER", payload: 200}) 
store.dispatch({type: "LESSER", payload: 30}) 
store.dispatch({type: "BIGGER", payload: 1}) 
store.dispatch({type: "BIGGER", payload: 600}) 
store.dispatch({type: "LESSER", payload: 5}) 

