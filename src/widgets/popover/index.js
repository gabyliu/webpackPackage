import './index.less';

//按钮
var Btn = React.createClass({
    handleClick: function(e){
        e.stopPropagation();
        this.props.data.handle({
            id: this.props.data.id
        });
    },
    render: function(){
        var classNameBtn = typeof this.props.data.classname != 'undefined' ? 'btn ' + this.props.data.classname : 'btn',
            hrefBtn = typeof this.props.data.href != 'undefined' ? this.props.data.href : 'javascript:;';
        return (
            <a onClick={this.handleClick} href={hrefBtn} className={classNameBtn}>{this.props.data.text}</a>
        )
    }
});
var Popover = React.createClass({
    getInitialState: function(){
        return {
            isShow: false,
            btnCancel: {
                id: 'btn_popover_concel',
                classname: 'btn_default',
                text: '取消',
                handle: this.handleClickCancel
            },
            btnSure: {
                id: 'btn_popover_sure',
                classname: 'btn_primary',
                text: '确定',
                handle: this.handleClickSure
            }

        }
    },
    //popover 关闭
    handleClickCancel: function(){
        this.setState({
            isShow: false
        })
    },
    //popover 确定
    handleClickSure: function(){
        this.props.data.handle({
            id: this.props.data.id,
            value: this.props.data.value
        });
    },
    componentWillReceiveProps: function(nextProps) {
        var isShow;
        nextProps.data.isShow != this.state.isShow? isShow = nextProps.data.isShow : isShow = this.state.isShow;
        this.setState({
            isShow: isShow
        });
    },
    render: function(){
        var isShow = this.state.isShow,
            popoverContent = null,
            popoverAreaClass = typeof this.props.data.classname != 'undefined' ? "popover_area " + this.props.data.classname : 'popover_area',
            popoverContentClass = typeof this.props.data.placementent != 'undefined' ? 'popover_content ' + this.props.data.placementent : 'popover_content center';
        isShow == true ? popoverContent = <div className={popoverContentClass}>
            <span className="popover_arrow"></span>
            {this.props.data.content}
            <div className="popover_content_opr_area">
                <Btn data={this.state.btnCancel} onClick={this.handleClickCancel} />
                <Btn data={this.state.btnSure} onClick={this.handleClickCancel} />
            </div>
        </div> : popoverContent = null;
        return (
            <div className={popoverAreaClass}>
                {popoverContent}
            </div>
        )
    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return {
            btn: {
                id: 'btn_popover_showHide',
                classname: 'btn_primary',
                text: '气泡弹框',
                handle: this.handleClick
            },
            popover: {
                classname: 'popover_confirm',//选填，string，扩展class name
                placementent: 'right',//选填，string，popover箭头的位置，不写的话默认居中
                content: <b>我是popover的内容</b>,//必填，dom或string，弹窗的内容
                isShow: false,//必填，boolen，用来控制popover出现还是隐藏
                handle: this.handlePopoverConfirm,//必填，object，
                id: 'popoverId',//必填，string，触发事件返回时会带回来
                value: 'popoverValue'//必填，string，input初始化值
            },

            resultPopover: ''
        }

    },
    componentWillMount: function(){

    },
    handleClickPage: function(e){
        /*e.stopPropagation();
        e.preventDefault();*/

        var statePopover = this.state.popover;
        statePopover.isShow = false;
        this.setState({
            popover: statePopover
        });
    },
    handleClick: function(event){
        var statePopover = this.state.popover;
        statePopover.isShow = true;
        this.setState({
            popover: statePopover
        });
    },
    handlePopoverConfirm: function(v){
        var statePopover = this.state.popover;
        statePopover.isShow = false;
        this.setState({
            popover: statePopover,
            resultPopover: JSON.stringify(v)
        });
    },
    
    render: function(){
        return (
            <div className="container" onClick={this.handleClickPage}>
                <Btn data={this.state.btn} />
                <Popover data={this.state.popover} />
                <div>
                    {this.state.resultPopover}
                </div>
            </div>
        )
    }
});
React.render(
    <Inner />,
    document.getElementById('inner')
);

export {Popover, Inner, Btn};

