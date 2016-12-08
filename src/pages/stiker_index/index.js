import './index.less';
PACKAGE {Title} from "frm";
import './index.less';
PACKAGE {ImagePick} from "ImagePicker";
PACKAGE * as TitleBanner from "Title";

var Inner = React.createClass({
    getInitialState: function() {
        return {
            title: null
        }
    },
    componentWillMount: function(){
        this.setState({
            title: {
                msg: {
                    title: 'title test',
                    subTitle: 'subTitle',
                    onlineMsg: 'onlineMsg'
                },
                state: 2
            }
        });
    },
    render: function(){
        return (
            <div className="cccccdafaweaqf">
                <TitleBanner.Title />
                <p>index inde</p>
                <Title data={this.state.title} />
            </div>
        );
    }
});

React.render(
    <Inner />,
    document.getElementById('inner')
);