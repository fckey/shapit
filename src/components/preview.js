//http://qiita.com/funaota/items/f3aedb419443cc9b83f3
var React = require('react');

var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

var PreviewImage = React.createClass({

    getInitialState(){
        return {
            image_src: ""
        };
    },

    handleChangeFile: function(e) {
        var files = e.target.files;
        var image_url = createObjectURL(files[0]);
        this.setState({image_src: image_url});

    },

    render(){
        return(
            <div>
                <input type="file" ref="file" onChange={this.handleChangeFile} />
                <img src={this.state.image_src} />
                <button onClick={this.clickPostBtn} type="button">投稿する</button>
            </div>
        );
    }
});

