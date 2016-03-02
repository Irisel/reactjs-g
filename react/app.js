var React = require('react');

var ReactDOM = require('./lib/react-dom');

var ReactRouter = require('./lib/react-router') ;
var Router = ReactRouter;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;

var Form = require('./common/form');
var Jser = require('./Jser');
var Table = require('./common/table');

//
//ReactDOM.render(
//  <Form form={form}/>,
//  document.getElementById('example')
//);


var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav className="panel">
          <ul>
              <li>
                  <div className="link"><Link to="form" className="clearfix"><span className="left">表单</span><span className="right">form</span></Link></div>
              </li>
              <li>
                  <div className="link"><Link to="table" className="clearfix"><span className="left">表格</span><span className="right">table</span></Link></div>
              </li>
          </ul>
        </nav>
        <section className="content">
          <RouteHandler/>
        </section>
      </div>
    );
  }
});


var Index = React.createClass({
    render: function(){
            return (
                <div>
                    <h1>Hello World!</h1>
                </div>
                )
        }
    }
);
// 定义页面上的路由
var routes = (
  <Route handler={App}>
    <Route name="form" handler={Form}/>
    <Route name="table" handler={Table}/>
    <DefaultRoute handler={Index}/>
  </Route>
);

// 将匹配的路由渲染到 DOM 中
Router.run(routes, Router.HashLocation, function(Root){
  ReactDOM.render(<Root/>, document.getElementById('example'));
});