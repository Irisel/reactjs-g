import React from '/usr/local/lib/node_modules/react';
import cx from '/root/reactjs/webpack/node_modules/classnames';

const Input = React.createClass({
    getInitialState: function() {
      return {value: this.props.value, invalid: false, validate: this.props.validate, invalid_info: this.props.invalid_info, name: this.props.name};
    },
    handleChange: function(event) {
      this.setState({value: event.target.value});
      if(this.props.validate && event.target.value){
          var validate = this.props.validate;
          this.setState({invalid: (validate.test(event.target.value))?'' : this.props.invalid_info})
      }else{
          this.setState({invalid: ''})
      };
    },
    componentWillReceiveProps:function(nextProps){
        this.setState({value: nextProps.value, invalid: false, validate: nextProps.validate, invalid_info: nextProps.invalid_info});
    },
    render: function () {
      var value = this.state.value;
      var invalid = this.state.invalid;
      var name = this.state.name;
      var input_classes = cx({
        'form-control': true
      });
      var classes = cx({
        'input-box': true,
        'message': true,
        'message-invalid': this.state.invalid
      });
      this.props.onChange && this.props.onChange(this.state);
      return (
        <div className={classes}>
          <input className={input_classes} type="text"  name={name} value={value} onChange={this.handleChange} />
          <div className="alert">
              <p classNmae="input-info">{invalid}</p>
          </div>
        </div>
      );
    }
});

module.exports = Input;
