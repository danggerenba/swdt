    hjjhm=8375;
    $("button").on("click",function(){
      // alert(3)
 
   
   var jhm=$("#jhm").val();
   // alert(jhm)
    if(jhm==hjjhm){
       // continue
    }else{
       alert('激活码不正确')
       return
    }
 

 // alert('正在激活');
 

  //设置cooike
  // 对Date的扩展，将 Date 转化为指定格式的String
  // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
  // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
  Date.prototype.Format = function(fmt) { 
    var o = {
      "M+": this.getMonth() + 1,
      //月份
      "d+": this.getDate(),
      //日
      "H+": this.getHours(),
      //小时
      "m+": this.getMinutes(),
      //分
      "s+": this.getSeconds(),
      //秒
      "q+": Math.floor((this.getMonth() + 3) / 3),
      //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

  var nowtime = new Date().Format("yyyyMMddHHmm");
  console.log(nowtime)


        $(function() { 
             if(  $.cookie("kj") == null ) { 
               varx = { title: "kuaiji" }; 
            // strr
            // console.log(varx);
            //  alert(strr);
            //  alert("base64 encode:" + str); 
               
               varxx = Base64.encode(nowtime);
               console.log(varxx);

               varstr = JSON.stringify(varxx);　　//对序列化成字符串然后存入cookie
               $.cookie("kj", varxx, { 

                 expires:150 //设置时间，如果此处留空，则浏览器关闭此cookie就失效。
               });


// alert(gdcip);

//拿IP
$.ajax({ 
    type : "get", 
    url :'https://api.ipify.org?format=json', 
    async : false, 
    success : function(data){ 
        //赋值给全局变量;
        gdcip=data.ip
        
     } 
});


//根据IP拿地方
// alert(returnCitySN["cip"]);
 gdcipurl='https://restapi.amap.com/v3/ip?ip=' +gdcip+ '&output=json&key=180336bba18bd5344832049756744874'

    $.ajax({
        type:'get',
        url:gdcipurl,
        dataType:'json',
        async:false,
         success: function(ipmsg) {
            resultip = ipmsg;
            
        }
    });
    getcity=resultip.city;

// alert(getcity)
    

cityurl='https://b.kuaiji.life/samples/updataarray.php'
// cityurl='http://localhost:8090/samples/updataarray.php'
// cityurl='http://localhost:8098/osssdk/samples/updataarray.php'

// console.log(nowtime);
// console.log(getcity);

 $.ajax({
        type:'get',
        url: cityurl,
        data: {city:getcity,nwtime:nowtime},
        dataType:'json',
        async:false,
         success: function(datax) {
         console.log(datax);
         // alert("点击确定激活权限");
            
        },
        error:function (data){   
      console.log(data);  
      alert('失败') 
     }   
  
    });
       alert("激活成功");
               
             }else{

//               varstr1 = $.cookie("kj");
  //             varo1 = JSON.parse(varstr1);　　//字符反序列化成对象
               // alert('网站导图权限已激活');//输反序列化出来的对象的姓名值
                 // alert(varo1.name+","+varo1.age);　　
                 alert("你的激活码已被使用");
             }
        })
})


