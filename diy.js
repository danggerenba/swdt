
/**
 * 图片路径转成canvas
 * @param {图片url} url
 */

// console.log=function(){}

async function imgToCanvas(url) {
    // 创建img元素
    const img = document.createElement("img");
    img.src = url;
    img.setAttribute("crossOrigin", "anonymous"); // 防止跨域引起的 Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
    await new Promise((resolve) => (img.onload = resolve));
    // 创建canvas DOM元素，并设置其宽高和图片一样
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
    canvas.getContext("2d").drawImage(img, 0, 0);
    return canvas;
}

//画布添加水印
const drawWaterMark = (canvas, textArray) => {
    const ctx = canvas.getContext("2d");
    let wmConfig = {
        font: 'microsoft yahei',
        textArray: textArray,
        density: 2.5
    }
    let fontSize = 16;
    let imgWidth = canvas.width;
    let imgHeight = canvas.height;

    ctx.fillStyle = "red";
    ctx.font = `${fontSize}px ${wmConfig.font}`;
    ctx.lineWidth = 1;
    ctx.fillStyle = "#F6F6F6";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    // //文字坐标
    const maxPx = Math.max(imgWidth, imgHeight);
    const stepPx = Math.floor(maxPx / wmConfig.density);
    let arrayX = [0];//初始水印位置 canvas坐标 0 0 点
    while (arrayX[arrayX.length - 1] < maxPx / 2) {

        arrayX.push(arrayX[arrayX.length - 1] + stepPx);
    }
    arrayX.push(...arrayX.slice(1, arrayX.length).map((el) => {

        return -el;
    }));

    for (let i = 0; i < arrayX.length; i++) {

        for (let j = 0; j < arrayX.length; j++) {

            ctx.save();
            ctx.translate(imgWidth / 2, imgHeight / 2); ///画布旋转原点 移到 图片中心
            ctx.rotate(-Math.PI / 5);
            if (wmConfig.textArray.length > 3) { //最多显示三行水印，也可以根据需要自定义
                wmConfig.textArray = wmConfig.textArray.slice(0, 3);
            }
            wmConfig.textArray.forEach((el, index) => {
                let offsetY = fontSize * index + 2;
                ctx.fillText(el, arrayX[i], arrayX[j] + offsetY);
            });
            ctx.restore();
        }
    }
};


/**
 * canvas转成img
 * @param {canvas对象} canvas
 */
function convasToImg(canvas) {
    // 新建Image对象，可以理解为DOM
    var image = new Image();
    // canvas.toDataURL 返回的是一串Base64编码的URL
    // 指定格式 PNG
    image = canvas.toDataURL("image/png");
    return image;
}

// 加水印运行示例
async function run(imgdata64) {
    // alert(imgdata64)
    // console.log(imgdata64)

    const imgUrl = imgdata64;
    // 1.图片路径转成canvas
    const tempCanvas = await imgToCanvas(imgUrl);
    // 2.canvas添加水印
    drawWaterMark(tempCanvas, ['微信号','carrot8375'])

    // 3.canvas转成img

    imgbasedata = convasToImg(tempCanvas);
    // console.log(imgbasedata)
    return  imgbasedata

    // document.body.appendChild(img);
    //     console.log(imgtest)
}

// var demoimg=
// console.log(demoimg);



(function () {
    var oldData;
    var html = '';
    html += '<a href="" class="daochu diy export" data-type="pdf">导出PDF</a>',

        html += '<a href="" class="diy export" data-type="png">导出png</a>',
        html += '<a href="" class="diy export" data-type="json">导出数据</a>',
        html += '<button class="diy input">',
        html += '导入数据<input type="file" id="fileInput" accept=".km,.txt,.md,.json" >',
        html += '</button>';



    $('.editor-title').append(html);

    $(".daochu").click(function(){
        alert('请加左边微信号领取');
    });

    $('.diy').css({
        // 'height': '30px',
        // 'line-height': '30px',
        'margin-top': '0px',
        'float': 'right',
        'background-color': '#fff',
        'min-width': '60px',
        'text-decoration': 'none',
        color: '#999',
        'padding': '0 10px',
        border: 'none',
        'border-right': '1px solid #ccc',
    });
    $('.input').css({
        'overflow': 'hidden',
        'position': 'relative',
    }).find('input').css({
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'inline-block',
        opacity: 0
    });







    $(document).on('click', '.export', function (event) {
        event.preventDefault();
        var $this = $(this),
            type = $this.data('type'),
            exportType;
        switch (type) {
            case 'km':
                exportType = 'json';
                break;
            case 'md':
                exportType = 'markdown';
                break;
            case 'svg':
                exportType = 'svg';
                break;
            case 'txt':
                exportType = 'text';
                break;
            case 'png':
                exportType = 'png';
                break;
            default:
                exportType = type;
                break;
        }


        function encrypt(str){
            let newStr = '';
            for (let i = 0; i < str.length; i++) {
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            return newStr;
        }

        editor.minder.exportData(exportType).then(function (content) {
            switch (exportType) {
                case 'json':
                    // console.log($.parseJSON(content));
                    var contentdata=encrypt(content);
                    break;
                default:
                    break;
            }
            var blob = new Blob();
            switch (exportType) {
                case 'png':
                    resultimgdata=run(content)
//              console.log();
                    resultimgdata.then(res=>{
                        ddds=res
                        // console.log(res)
                        // console.log(ddds)




                    })

                    blob =  dataURLtoBlob(ddds);
                    break;

                default:
                    blob = new Blob([encrypt(content)]);
                    break;
            }
            var a = document.createElement("a"); //建立标签，模拟点击下载
            a.download = $('#node_text1').text() + '.' + type;
            a.href = URL.createObjectURL(blob);
            a.click();

        });
    });

    function decrypt(str){
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            newStr += String.fromCharCode(str.charCodeAt(i) - 1);
        }
        return newStr;
    }

    // 导入
    window.onload = function () {
        var fileInput = document.getElementById('fileInput');

        fileInput.addEventListener('change', function (e) {
            var file = fileInput.files[0],
                // textType = /(md|km)/,
                fileType = file.name.substr(file.name.lastIndexOf('.') + 1);
            // console.log(file);
            switch (fileType) {
                case 'md':
                    fileType = 'markdown';
                    break;
                case 'txt':
                    fileType = 'text';
                    break;
                case 'km':
                case 'json':
                    fileType = 'json';
                    break;
                default:
                    // console.log("File not supported!");
                    alert('只支持.km、.md、、text、.json文件');
                    return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                var content = reader.result;

                var strdata=decrypt(content)
                content = strdata.replace(/\s*/g,"");
                editor.minder.importData(fileType, content).then(function (data) {
                    // console.log(data)
                    $(fileInput).val('');
                });
            }
            reader.readAsText(file);
        });
    }

})();





//base64转换为图片blob
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(',');
    //注意base64的最后面中括号和引号是不转译的
    var _arr = arr[1].substring(0, arr[1].length - 2);
    var mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(_arr),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    // alert(1)
    // alert(u8arr)
    // cv=run( u8arr)

    // console.log(u8arr);
    return new Blob([u8arr], {
        type: mime
    });
}
