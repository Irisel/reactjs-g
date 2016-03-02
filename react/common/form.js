var React = require('react');
var Input = require('../single/input');
var Jser = require('../Jser');

var ReactRouter = require('../lib/react-router') ;
var StateMixin = ReactRouter.State;

var form = [
    {
        value: '123',
        validate: /^[0-9]+$/,
        name: 'number1',
        invalid_info: '请输入数字'
    },
    {
        value: '456',
        validate: /^[0-9]+$/,
        name: 'number2',
        invalid_info: '请输入数字'
    },
    {
        value: '789',
        validate: /^[0-9]+$/,
        name: 'number3',
        invalid_info: '请输入数字'
    }
];

var Form = React.createClass({
    mixins: [StateMixin],
    getInitialState: function() {
      return {form: form || [], data: {}};
    },
    componentDidMount: function() {
//        Jser.get(this.props.source, {},function(result) {
//          var lastGist = result[0];
//          if (this.isMounted()) {
//            this.setState({
//              username: lastGist.owner.login,
//              lastGistUrl: lastGist.html_url
//            });
//          }
//        }.bind(this));
    },
    submit:function(){
        Jser.ajax('post', null, 'www.baidu.com', this.state.data, {
                success: function(){
                    this.setState({form: []});
                },
                error: function(e, xhr, opt){
                    console.log(e, xhr, opt);
                }
            }
        );
    },
    handleItemClick:function(item, index, childState){
        var data = this.state.data;
        data[childState.name] = childState.value;
    },
    clean: function(){
        this.state.form.map(function(row){
            row.value = '';
        });
        this.setState({form: this.state.form});
    },
    render: function () {
        var handleItemClick = this.handleItemClick;
        var rows = this.state.form.map(function (item,index) {
          return (
            <Input value={ item.value} validate={ item.validate} name={ item.name } invalid_info={ item.invalid_info} onChange={ handleItemClick.bind(this,item,index)}/>
          );
        });
      return (
        <div className="modal-form">
            <div className="modal-header">
                <h4>{ this.getParams().id}</h4>
            </div>
            <div className="modal-body">
                <div className="form-common">
                    <div className="form-rows" style={{ height: this.state.height || '409px'}}>
                        { rows }
                    </div>
                    <div className="form-buttons clearfix">
                        <button className="right btn btn-gray" onClick={this.submit}>提交</button>
                    </div>
                </div>
            </div>
        </div>
      );
    }
});

module.exports = Form;