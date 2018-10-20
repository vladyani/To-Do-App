import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoDashboard from "./components/ToDoDashboard/ToDoDashboard";


const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/todoform' component={ToDoForm}/>
            <Route exact path='/tododashboard' component={ToDoDashboard}/>
        </Switch>
    </HashRouter>
);

export default App;