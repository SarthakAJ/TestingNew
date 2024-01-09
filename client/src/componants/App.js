//  modules exporting any type of react stuff are titled with 1st letter capital

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import * as actions from '../actions';

const Dashboard = () => <h2>dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component{
    componentDidMount() {
        console.log("calling fetch_user");
        // this.props.fetchUser();
    }

    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);