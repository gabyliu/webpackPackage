import './index.less';
PACKAGE * as checkBox from "checkBox";
PACKAGE * as radio from "radio";
PACKAGE * as inputTextarea from "InputTextarea";
PACKAGE * as popover from "popover";
PACKAGE * as ImagePicker from "ImagePicker";


var Inner = React.createClass({
    render: function(){
    	return (
    		<div>
    			<div className="section">
    				<p className="section_title">->package name: CheckBox</p>
    				<checkBox.Inner />
    			</div>

    			<div className="section">
    				<p className="section_title">->package name: radio</p>
    				<radio.Inner />
    			</div>
    			
    			<div className="section">
    				<p className="section_title">->package name: InputTextarea</p>
    				<inputTextarea.Inner />
    			</div>
    			
    			<div className="section">
    				<p className="section_title">->package name: popover</p>
    				<popover.Inner />
    			</div>

                <div className="section">
                    <p className="section_title">->package name: ImagePicker</p>
                    <ImagePicker.Inner />
                </div>
    		</div>
    	)
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);