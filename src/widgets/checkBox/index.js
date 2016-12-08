import './index.less';

Array.prototype.update = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }else{
        this.push(val);
    }
};
var CheckBox = React.createClass({
    handleClick: function(item,index){
        var valSelected = this.props.data.value;
        valSelected.update(item);
        this.props.data.handle({
            value: valSelected,//array，选中的值
            status: this.checkPattern(valSelected),//值的状态，成功：'suc'，超过可选个数：'overLimit'，小于可选个数：'lessLimit'
            index: this.props.data.response.index,//事件id，也就是reponse.index
            v: this.props.data.response.v//要带回来的值，也就是reponse.v
        });
    },
    checkPattern: function(vals){
        if(typeof this.props.data.reg.max != 'undefined'){
            if(vals.length > this.props.data.reg.max){
                return 'overLimit';
            }
        }
        if(typeof this.props.data.reg.min != 'undefined'){
            if(vals.length < this.props.data.reg.min){
                return 'lessLimit';
            }

        }
        return 'suc';
    },
    render: function(){
        var mainClass = 'frm_checkbox_area ' + this.props.data.extendClass,
                _this = this,
                checkBoxes = this.props.data.init.map(function(list){
                    var classLabel = 'frm_checkbox_label';
                    _this.props.data.value.indexOf(list) > -1 ? classLabel = classLabel + ' selected' : null;
                    return (
                            <lable onClick={_this.handleClick.bind(this, list)} value={list} for={_this.props.data.response.index} className={classLabel}>
                                <i className="icon_checkbox"></i>
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
            checkbox: {
                extendClass: 'checkbox_character',//选填，string，扩展class
                init: ["男性人物", "女性人物", "纯文字", "食物", "植物", "猫", "狗", "熊", "猪", "熊猫", "兔子", "猴子", "其他"],//必填，array，有哪些选项
                value: ["猪", "猴子"],//必填，array，有哪些被选了
                reg: {//必填，object，限制
                    max: 2,//选填，int，例如：最多只能选3个
                    min: 1//选填，int，例如：最少只能选1个
                },
                handle: this.handleCheckbox,//必填，object，触发的事件
                response: {//必填，触发事件后，返回值中，还要带回来的值
                    index: 'CharacterJson',//必填，string，触发事件后，还要带回来的事件id
                    v: '带回来啦'//选填，触发事件后，还要带回来的值
                }
            },
            result: ''
        }

    },
    handleCheckbox: function(data){
        var stateData = this.state.checkbox;
        switch (data.index){
            case 'CharacterJson':
                stateData.value = data.value;
                stateData.status = data.status;
                break
        }
        this.setState({
            checkbox: stateData,
            result: JSON.stringify(data)
        });
    },
    render: function(){
        return (<div>
            <CheckBox data={this.state.checkbox} />
            <p className="result">结果：{this.state.result}</p>
        </div>)
    }
});
React.render(
    <Inner />,
    document.getElementById('inner')
);

export {CheckBox, Inner};

