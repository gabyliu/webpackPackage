import './index.less';
import * as checkBox from "../../widgets/checkBox/index.js"
import * as radio from "../../widgets/radio/index.js"
import * as inputTextarea from "../../widgets/InputTextarea/index.js"
import * as popover from "../../widgets/popover/index.js"
import * as ImagePicker from "../../widgets/ImagePicker/index.js"


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