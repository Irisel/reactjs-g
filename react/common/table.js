var React = require('react');
var Input = require('../single/input');

var ReactRouter = require('../lib/react-router') ;
var StateMixin = ReactRouter.State;
var cx = require('/root/reactjs/webpack/node_modules/classnames') ;


var table = {
    thead: [{
        text: '名称'
    },{
        text: '状态'
    },{
        text: '任务'
    },{
        text: '操作'
    }],
    tbody: [{
        tds: [{
            text: 'pass'
        },
        {
            text: '运行中'
        },
        {
            text: '-'
        },
        {
            text: ''
        }]
    }]
};

var Table = React.createClass({
    mixins: [StateMixin],
    getInitialState: function(){
        return {
            table: this.props.table || table
        }
    },
    render: function () {
      var th = '', tr='';
      if(this.state.table)
      th = this.state.table.thead.map(function (item,index) {
          return (
                    <th key={index}>{item.text}</th>
              )
      });
      if(this.state.table)
      tr = this.state.table.tbody.map(function(item,index){
            var tds = item.tds.map(function(i, j){
                return (
                        <td key={j}>{i.text}</td>
                    )
            });
            return <tr key={index}>{tds}</tr>
      });
      var classes = cx({
        'table-bordered': true
      });
      return (
        <div className="table-common">
            <table className="table-bordered">
                <thead>
                    <tr>
                        { th }
                    </tr>
                </thead>
                <tbody>
                        {tr}
                </tbody>
            </table>
        </div>
      );
    }
});

module.exports = Table;