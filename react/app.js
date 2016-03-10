import React from '/usr/local/lib/node_modules/react';
import ReactDOM from '/usr/local/lib/node_modules/react-dom';

const ReactRouter = require('/usr/local/lib/node_modules/react-router') ;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const IndexRoute = ReactRouter.IndexRoute;

import Form from './common/form';
import Table from './common/table';
import RepoList from './common/repolist';

import Jser from './Jser';
import {createStore} from '/usr/local/lib/node_modules/redux';
import { Provider } from '/usr/local/lib/node_modules/react-redux'
import $ from './lib/jquery';

import inputApp from './reducers'

let store = createStore(inputApp);
//
//ReactDOM.render(
//  <Form form={form}/>,
//  document.getElementById('example')
//);

class App extends React.Component{
    render() {
      return (
        <div className="app">
          <nav className="panel">
            <ul>
              <li>
                  <div className="link"><Link to="/home/form" activeClassName="active" className="clearfix"><span className="left">表单</span><span className="right">form</span></Link></div>
              </li>
              <li>
                  <div className="link"><Link to="/home/table" activeClassName="active" className="clearfix"><span className="left">表格</span><span className="right">table</span></Link></div>
              </li>
              <li>
                  <div className="link"><Link to="/home/repo" activeClassName="active" className="clearfix"><span className="left">promise</span><span className="right">repolist</span></Link></div>
              </li>
            </ul>
          </nav>
          <section className="content">
          	{this.props.children}
          </section>
        </div>
      );
    }
};


class Index extends React.Component{
  render(){
          return (
              <div>
                  <h1>Hello World!</h1>
              </div>
              )
      }
  }
;


class Repo extends React.Component{
    render(){
            var promise = $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars');
            return (
                <div>
                    <RepoList promise={ promise } />
                </div>
                )
        }
    }
;

// 定义页面上的路由


ReactDOM.render(
	<Provider store={store}>
	    <Router>
	        <Route path="/home" component={App}>
	        	<Route path="form" component={Form}/>
	        	<Route path="table" component={Table}/>
	        	<Route path="repo" component={Repo}/>
	        </Route>
	        <Route path="/index" component={Index}/>
	        <IndexRoute component={Index}/>
	    </Router>
    </Provider>,
    document.getElementById('example')) ;
// 将匹配的路由渲染到 DOM 中
