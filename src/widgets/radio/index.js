import './index.less';

var Radio = React.createClass({
    handleClick: function(item,index){
        this.props.data.handle({
            value: item,//被选中的选项值
            index: this.props.data.response.index,//事件id，也就是reponse.index
            v: this.props.data.response.v//要带回来的值，也就是reponse.v
        });
    },
    render: function(){
        var mainClass = 'frm_radio_area ' + this.props.data.extendClass,
            _this = this,
            checkBoxes = this.props.data.init.map(function(list){
                var classLabel = 'frm_radio_label';
                _this.props.data.value == list ? classLabel = classLabel + ' selected' : null;
                return (
                        <lable onClick={_this.handleClick.bind(this, list)} value={list} for={_this.props.data.response.index} className={classLabel}>
                            <i className="icon_radiobox"></i>
                            <span className="lbl_content">{list}</span>
                        </lable>
                )
            });

        return (
            <div className={mainClass}>
                {checkBoxes}
            </div>
        );
    }
});
var Inner = React.createClass({
    getInitialState: function(){
        return {
            radio: {
                extendClass: 'radio_style',//选填，string，扩展class
                //init: ["情侣", "家庭", "春节", "圣诞节", "中秋节", "端午节", "其他节日", "方言", "红包", "网络语", "其他"],//必填，array，有那些选项
                init: ['我要登录', '我不要登录'],
                value: '我要登录',//必填，string，上一次选过的选项值
                handle: this.handleRadio,//必填，object，触发的事件
                response: {//必填，object，事件触发返回时还要带回来的值
                    index: 'Style',//必填，string，事件id
                    v: '带回来啦'//选填，string，事件触发后，还要带回来的值
                }
            },
            result: ''
        }

    },
    handleRadio: function(data){
        var stateData = this.state.radio;
        switch (data.index){
            case 'Style':
                stateData.value = data.value;
                break;
        }
        this.setState({
            data: stateData,
            result: JSON.stringify(data)
        });
    },
    render: function(){
        return (<div>
            <Radio data={this.state.radio} />
            <p className="result">结果：{this.state.result}</p>
        </div>)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);

export {Radio, Inner};

