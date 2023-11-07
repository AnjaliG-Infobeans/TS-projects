import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";
 
const el = document.getElementById("root");
 
const root = ReactDOM.createRoot(el!);

const store = createStore(reducers, applyMiddleware(thunk)) 
 
root.render(<Provider store={store}><App /></Provider>);