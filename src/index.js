import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './Login';
import Search from './Search';
import Detail from './Detail';
import './index.css';

ReactDOM.render(
				<Router>
					<div>
						<Route exact path="/" component={Login} />
						<Route exact path="/detail/:name" component={Detail} />
						<Route exact path="/search" component={Search} />
					</div>
				</Router>
				, document.getElementById('root')
				);