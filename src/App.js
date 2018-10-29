import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoDashboard from "./components/ToDoDashboard/ToDoDashboard";
import './App.scss';

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/todoform' component={ToDoForm}/>
            <Route path='/tododashboard' component={ToDoDashboard}/>
        </Switch>
    </HashRouter>
);

export default App;