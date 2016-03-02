var $ = require('./lib/jquery');

window.jquery = $;
var Jser = {
    ajax: function(method, datatype, url ,_data,callbacks, traditional){
        $.ajax({
            type: method || "get",
            dataType: datatype || 'json',
            contentType: 'application/x-www-form-urlencoded;charset=utf-8',
            traditional: traditional ,
            url: url,
            data: _data || "",
            error: function(e, xhr, opt) {
                callbacks.error(e, xhr, opt)
            },
            success: function(result) {
                callbacks.success(result);
            }
        });
     },
    get: function(url, data, callback){
        $.get(url, data, callback);
    },
    post: function(url, data, callback, dataType){
        $.post(url, data, callback, dataType || 'json');
    }

};

module.exports = Jser;