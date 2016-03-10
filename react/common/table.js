import React from '/usr/local/lib/node_modules/react';
import Input from '../single/input';

const ReactRouter = require('/usr/local/lib/node_modules/react-router') ;
const StateMixin = ReactRouter.State;
import cx from '/root/reactjs/webpack/node_modules/classnames';

import $ from '../lib/jquery';

const table = {
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
    },
    {
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

const Table = React.createClass({
    mixins: [StateMixin],
    getInitialState: function(){
        return {
            table: this.props.table || table
        }
    },
    componentDidMount: function(){
        var node = $(this.getDOMNode()), data = node.data();
        if(data)console.log(data.table, node.attr('class'));
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
        <div className="table-common" data-table="table">
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