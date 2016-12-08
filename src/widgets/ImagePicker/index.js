import './index.less';

var ImagePick = React.createClass({
    getInitialState: function(){
        return ({
            img: this.props.data.img,
            load: {
                show: 0,
                progress: 0
            },
            isDragover: 0,
            isHover: 0
        })
    },
    handleClick: function(){
        this.refs.imagePickInput.getDOMNode().click();
    },
    //µã»÷ÉÏ´«
    handleChange: function(e){
        var fileList = e.target.files;
        this.showPreview(fileList[0]);

        var fileStatus = this.checkPattern(fileList[0]);
        if(fileStatus.isPass){//·ûºÏ¸ñÊ½
            this.upload(fileList[0]);
        }else{//²»·ûºÏ¸ñÊ½
            this.response(null, fileStatus.status);
        }

    },
    //Õ¹Ê¾Ô¤ÀÀÍ¼
    showPreview: function(file){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            this.setState({
                img: reader.result
            });
        }.bind(this)
    },
    //ÍÏµ½ÉÏÃæ
    handleDragOver: function(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            isDragover: 1
        });
    },
    //ÒÑ¾­¶ª½øÈ¥
    handleDrop: function(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            isDragover: 0
        });
        var dt = e.dataTransfer;
        var files = dt.files;
        console.log(JSON.stringify(dt));
        this.showPreview(files[files.length - 1]);

        var fileStatus = this.checkPattern(files[files.length - 1]);
        if(fileStatus.isPass){//·ûºÏ¸ñÊ½

            this.upload(files[files.length - 1]);
            files[files.length - 1] = false;
        }else{//²»·ûºÏ¸ñÊ½
            this.response(null, fileStatus.status);
        }
        return false;
    },
    //¼ì²éÎÄ¼þ¸ñÊ½
    checkPattern: function(file){
        var fileType = file.type,
                response = {};
        if(fileType.indexOf('image/') >= 0){//ÊÇÍ¼Æ¬
            fileType = fileType.replace('image/', '');
            if(this.props.data.reg.format.indexOf(fileType) >= 0){//·ûºÏÍ¼Æ¬¸ñÊ½
                if(this.props.data.reg.size){//ÓÐ´óÐ¡ÏÞÖÆ
                    if(this.props.data.reg.size >= file.size){
                        response.isPass = true;
                    }else{
                        response.isPass = false;
                        response.status = 'oversized';
                    }
                }else{//Ã»ÓÐ´óÐ¡ÏÞÖÆ
                    response.isPass = true;
                }
            }else{//²»·ûºÏÍ¼Æ¬¸ñÊ½
                response.isPass = false;
                response.status = 'format error';
            }
        }else{//²»ÊÇÍ¼Æ¬ ¸ñÊ½´íÎó
            response.isPass = false;
            response.status = 'format error';
        }
        return response;
    },
    //ÍÏ×§Àë¿ª
    handleDragLeave: function(e){
        this.setState({
            isDragover: 0
        });
    },
    //ÉÏ´«ÖÐ
    uploading: function(loaded, total){

        this.setState({
            load: {
                show: 1,
                progress: loaded / total
            }
        })
    },
    //²»¹Ü³É¹¦Ê§°Ü£¬ÕâÀïÅ×ÊÂ¼þ
    response: function(d, status){
        this.setState({
            load: {
                show: 0
            }
        });
        var data = {
            index: this.props.data.responseValue,
            status: status,
            value: d
        };
        this.props.data.handle(data);
    },
    //ÉÏ´«Í¼Æ¬µ½·þÎñÆ÷
    upload: function(file){
        (function(file, _this){
            var xhr = new XMLHttpRequest(),
                    reader = new FileReader();
            if (xhr.upload) {
                // ÉÏ´«ÖÐ
                xhr.upload.addEventListener("progress", function(e) {
                    _this.uploading(e.loaded, e.total);
                }, false);
                // ¿ªÊ¼ÉÏ´«
                var data = new FormData();
                for(var item in _this.props.data.requestValue){
                    data.append(item, _this.props.data.requestValue[item]);
                }
                data.append('file', file);
                data.append('name', file.name);
                data.append('type', file.type);
                data.append('lastModifiedDate', file.lastModifiedDate);
                data.append('size', file.size);
                xhr.open("POST", '/cgi-bin/mmemoticonmgr-bin/uploadmedia', true);
                xhr.send(data);
                // ÎÄ¼þÉÏ´«³É¹¦»òÊÇÊ§°Ü
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            _this.response(JSON.parse(xhr.response), 'suc');
                        }
                    }
                };
            }
        }(file, this))
    },
    //Êó±êÔÚ×é¼þÉÏ
    handleMouseoverPick: function(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.state.isHover != 1){
            this.setState({
                isHover: 1
            });
        }

    },
    //Êó±êÀë¿ª
    handleMouseleavePick: function(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            isHover: 0
        });
    },
    //É¾³ýÊÂ¼þ
    handleClickDele: function(e){
        e.stopPropagation();
        e.preventDefault();
        var data = {
            index: this.props.data.responseValue,
            status: 'dele',
            value: null
        };
        this.props.data.handle(data);
        this.setState({
            img: null
        });
    },
    render: function(){
        var classArea = 'imagePickArea ' + this.props.data.extendClass,
                contentPickBtn = '+',
                loadStyle = {
                    width: this.state.load.progress * 100 + '%'
                },
                imagePickLoadArea = this.state.load.show == 1 ? <div className="imagePickLoadArea">
                    <div className="loadBar">
                        <div className="loadContent" style={loadStyle}></div>
                    </div>
                </div> : null,
        //ÊÇ·ñÐèÒªÉ¾³ý
                imagePickDeleArea = (this.props.data.isNeedDele && this.state.img && this.state.isHover == 1) ? <div className="imagePickDeleArea">
                    <a href="javascript:;" className="btn btn_warn" onClick={this.handleClickDele}>删除</a>
                </div> : null;

        this.state.isHover==1? classArea += ' hover':null;
        if(this.state.isDragover==1){
            classArea += ' dragover';
            this.props.data.text.dragover ? contentPickBtn = this.props.data.text.dragover : null;
        }
        /*mouseover mouseleave·ÅÔÚ imagePick ÕâÒ»²ã»áÒ»Ö±´¥·¢*/
        return (
                <div className={classArea} onMouseOver={this.handleMouseoverPick} onMouseLeave={this.handleMouseleavePick} onDragLeave={this.handleDragLeave} onClick={this.handleClick} onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                    <div className='imagePick'>
                        <input ref="imagePickInput" onChange={this.handleChange} className="imagePickUploader_input" type="file" />
                        <div className="imagePickUploader_btn">{contentPickBtn}</div>
                        {this.state.img? <img className="imagePickUploader_preview" ref="imagePickUploader_preview" src={this.state.img} /> : null}
                    </div>
                    {imagePickDeleArea}
                    {imagePickLoadArea}
                </div>
        )

    }
});

var Inner = React.createClass({
    getInitialState: function(){
        return ({
            imagePick: {
                extendClass: 'imagePickExtendClass tc',//Ñ¡Ìî£¬string£¬À©Õ¹class
                img: 'https://sticker.weixin.qq.com/htdocs/zh_CN/images/index/home_item127602b.png',//Ñ¡Ìî£¬string£¬³õÊ¼»¯Ô¤ÀÀÍ¼µØÖ·
                reg: {
                    format: 'png',//±ØÌî£¬string£¬ÏÞÖÆµÄÍ¼Æ¬¸ñÊ½
                    size: 12 * 1024//Ñ¡Ìî£¬int£¬ÏÞÖÆÍ¼Æ¬µÄ´óÐ¡
                },
                text: {
                    dragover: '松开鼠标'//Ñ¡Ìî£¬string£¬Êó±êÍÏÍ¼Æ¬µ½×é¼þÊ±ºòµÄwording
                },
                isNeedDele: true,//Ñ¡Ìî£¬boolean£¬ÊÇ·ñÐèÒªÉ¾³ý²Ù×÷
                request: '/cgi-bin/mmemoticonmgr-bin/uploadmedia',//±ØÌî£¬string£¬Í¼Æ¬ÉÏ´«cgi
                requestValue: {//Ñ¡Ìî£¬object£¬postÒª´øµÄ×Ö¶Î
                    mediaType: 123,
                    mediaType2: 223,
                    mediaType3: 323
                },
                responseValue: {//Ñ¡Ìî£¬object£¬Òª´ø»ØÀ´µÄÖµ
                    id: 'imagePickId',
                    v: '带回来啦'
                },
                handle: this.handleImageChange//±ØÌî£¬object£¬Í¼Æ¬ÉÏ´«·µ»Ø´¥·¢µÄÊÂ¼þ£¬·µ»Øid¡¢cgi·µ»ØÖµ
            },
            result: ''
        })
    },
    handleImageChange: function(v){
        this.setState({
            result: JSON.stringify(v)
        });
    },
    render: function(){
        return (
                <div className="inner">

                    <ImagePick data={this.state.imagePick} />
                    <p className="result">
                        结果是：
                        <br />
                        {this.state.result}
                    </p>
                </div>
        )
    }
});

React.render(
        <Inner />,
        document.getElementById('inner')
);

export {ImagePick, Inner};

