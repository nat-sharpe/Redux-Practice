import { createStore } from "redux";

const reducer = () => {
}

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("Store change", store.getState())
});

store.dispatch({
    type: "BIGGER",
    payload: 100
})