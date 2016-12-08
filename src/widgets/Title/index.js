import './index.less';

var Title = React.createClass({
    render: function(){
        return (
            <div className="titleBanner">
                <div className="logo" title="微信表情开放平台"></div>
                <span>放平台微信表情开放平台微信表情开放平台微信表情开放平台微信表情开放平台微信表情开放平台微信表情开放平台</span>
            </div>
        )
    }
});

var Inner = React.createClass({
    
    render: function(){
        return (<div>
            <Title />
        </div>)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);

export {Title, Inner};

