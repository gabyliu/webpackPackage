import './index.less';

//带输入提示的输入框
var InputHint = React.createClass({
    handleChange: function(e){
        this.props.data.handle({
            value: e.target.value,
            id: this.props.data.id
        });
    },
    render: function(){
        var classNameContainer = typeof this.props.data.classname != 'undefined' ? 'frm_input_group with_hint ' + this.props.data.classname : 'frm_input_group with_hint',
            domHint = typeof this.props.data.max != 'undefined' ? <span className="frm_hint">
                        <i>{this.props.data.num}</i>
                        <span> / </span>
                        <b>{this.props.data.max}</b>
                    </span> : null;
        return (
            <div className={classNameContainer}>
                <span className="frm_input_box">
                    <input onChange={this.handleChange} type="text" placeholder={this.props.data.placeholder} className="frm_input" value={this.props.data.value} />
                    {domHint}
                </span>
            </div>
        )
    }
});

//带输入提示的textarea
var TextareaHint = React.createClass({
    handleChange: function(e){
        this.props.data.handle({
            value: e.target.value,
            id: this.props.data.id
        });
    },
    render: function(){
        var classNameContainer = typeof this.props.data.classname != 'undefined' ? 'frm_textarea_group with_hint ' + this.props.data.classname : 'frm_textarea_group with_hint',
            domHint = typeof this.props.data.max != 'undefined' ? <span className="frm_hint">
                        <i>{this.props.data.num}</i>
                        <span> / </span>
                        <b>{this.props.data.max}</b>
                    </span> : null;
        return (
            <div className={classNameContainer}>
                <div className="frm_textarea_box">
                    <textarea type="text" placeholder={this.props.data.placeholder} onChange={this.handleChange} className="frm_textarea">{this.props.data.value}</textarea>
                    {domHint}
                </div>
            </div>
        )
    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return {
            input: {
                id: 'inputId',//必填，string，触发事件返回时会带回来
                max: 8,//选填，int，有就会显示字数
                num: 0,//选填，当前输入的字数
                classname: 'inputExtendClassName',//选填，string
                handle: this.handleChangeInput,//必填，object
                value: '',//必填，string，input初始化值
                placeholder: '我是input的placeholder'//选填，string，input的placeholder
            },
            textarea: {
                id: 'textareaId',//必填，string，触发事件返回时会带回来
                max: 13,//选填，int，有就会显示字数
                num: 0,//选填，当前输入的字数
                classname: 'textareaExtendClassName',//选填，string
                handle: this.handleChangeTextarea,//必填，object
                value: '',//必填，string，textarea初始化值
                placeholder: '我是textarea的placeholder'//选填，string，textarea的placeholder
            },
            resultInput: '',
            resultTextarea: ''
        }

    },
    componentWillMount: function(){
        var initInputValue = 'input初始值',
            initTextareaValue = 'textarea初始值',
            stateInput = this.state.input,
            stateTextarea = this.state.textarea;

            stateInput.value = initInputValue;
            stateInput.num = initInputValue.length;
            stateTextarea.value = initTextareaValue;
            stateTextarea.num = initTextareaValue.length;

        this.setState({
            input: stateInput,
            textarea: stateTextarea
        });

    },
    handleChangeInput: function(v){
        var stateInput = this.state.input;
        stateInput.value = v.value;
        stateInput.num = v.value.length;
        this.setState({
            input: stateInput,
            resultInput: JSON.stringify(v)
        });
    },
    handleChangeTextarea: function(v){
        var stateTextarea = this.state.textarea;
        stateTextarea.value = v.value;
        stateTextarea.num = v.value.length;
        this.setState({
            textarea: stateTextarea,
            resultTextarea: JSON.stringify(v)
        });
    },
    render: function(){
        return (
            <div>

                <InputHint data={this.state.input} />
                <div>
                    {this.state.resultInput}
                </div>
                <br />
                <br />
                <TextareaHint data={this.state.textarea} />
                <div>
                    {this.state.resultTextarea}
                </div>
            </div>
        )
    }
});
React.render(
    <Inner />,
    document.getElementById('inner')
);

export {InputHint, TextareaHint, Inner};

