import './index.less';

var Title = React.createClass({
    render: function(){
        var onlineStatus;
        if(this.props.data.state == 2 || this.props.data.state == 3){
            onlineStatus = <p className="emotion_status waiting">{this.props.data.msg.onlineMsg}</p>;
        }else{
            onlineStatus = null;
        }
        return (
            <div className="emotion_detail_msg_title group">{this.props.data.msg.title}
                <p className="emotion_status suc">{this.props.data.msg.subTitle}</p>
                {onlineStatus}
            </div>
        )
    }
});
export {Title};

