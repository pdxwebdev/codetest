var Callouts = React.createClass({
    getInitialState: function() {
        return {
            callouts: []
        };
    },
    componentDidMount: function() {
        var _this = this;
        function reqListener () {
            var callouts = JSON.parse(this.responseText);
            _this.setState({
                callouts: callouts
            });
        };

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "/callouts");
        oReq.send();
    },
    render: function() {
        return React.createElement('ul', null, this.state.callouts.map(function(item){
          return React.createElement("li", {
              className: 'callout ' + item.theme
            }, 
            React.createElement("div", {
              className: 'title',
              style: {
                'color': '#'+item.txtcolor
              }}, item.title),
              item.img ? React.createElement("img", {src: item.img}
            ) : null,
            React.createElement("div", {
              className: 'desc',
              style: {
                'color': '#'+item.txtcolor
              }, 
              dangerouslySetInnerHTML: {__html: item.desc}}
            ),
            item.button ? React.createElement("button", null, item.button) : null);
        }));
    }
});

var Sponsors = React.createClass({
    getInitialState: function() {
        return {
            sponsors: []
        };
    },
    componentDidMount: function() {
        var _this = this;
        function reqListener () {
            var sponsors = JSON.parse(this.responseText);
            _this.setState({
                sponsors: sponsors
            });
        };

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "/sponsors");
        oReq.send();
    },
    render: function() {
        return React.createElement('ul', null, this.state.sponsors.map(function(item){
            return React.createElement("li", {
                    className: 'sponsor'
                }, React.createElement("img", {src: item})
            );
        }));
    }
});

ReactDOM.render(React.createElement(Callouts, callouts), document.getElementById('callouts'));
ReactDOM.render(React.createElement(Sponsors, sponsors), document.getElementById('sponsors'));