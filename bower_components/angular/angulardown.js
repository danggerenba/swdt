
//拿当前城市
 // gdcip = window.returnCitySN.cip;




$.ajax({ 
    type : "get", 
    url :'https://api.ipify.org?format=json', 
    async : false, 
    success : function(data){ 
        //赋值给全局变量;
        gdcip=data.ip
        
     } 
});
// alert(gdcip)

// gdcip='175.154.26.9'
  alert(gdcip)
 gdcipurl='https://restapi.amap.com/v3/ip?ip=' +gdcip+ '&output=json&key=180336bba18bd5344832049756744874'
// console.log(gdcipurl);


    $.ajax({
        type:'get',
        url:gdcipurl,
        dataType:'json',
        async:false,
         success: function(ipmsg) {
            resultip = ipmsg;
            
        }
    });
    //参数1
    getcity=resultip.city
//     alert(getcity);
console.log(getcity);
//
//=================

//读取时间城市库 域名下的txt

    $.ajax({
        type:'get',
        url:'https://hukaiyuan.oss-cn-hangzhou.aliyuncs.com/city.txt',
        dataType:'txt',
        async:false,
        complete:function(coordinates){
            citylist = coordinates.responseText;
            
        }
    });


// console.log(1);
// console.log(citylist);
// console.log(1);
//把字符串分割成数组
 timeList=citylist.split(",");

// console.log(timeList);

// var obj={};
// for(var i=0; i<timeList.length; i++){
//   obj[i]=timeList[i]
// }
// obj.length=timeList.length;
// console.log(obj);
// console.log(timeList);

// getmysqltimelist=citys.map(function(item,index,citys){
//   return  item.slice(0,12);
//   // return item.split("|");
// })

// console.log(getmysqltimelist);

//拿到时间
//屏蔽错误
// function killerrors() {
// return true;
// }
// window.onerror = killerrors;
// //-->


if($.cookie("kj") ==null){
  alert('加左上角微信 观看全部内容');
  // return false
}

jiami=Base64.decode($.cookie("kj"));



// jiami='202211192052';
getcktime=jiami.slice(1,12);//需要截取
// console.log(getcktime);
//参数2
// getcktime= '02211192052';
//得到数据库里的time
// getmysqltimelist=citys.slice(1,11);
// console.log(getmysqltime);






 var temp_arr = []
 for (var i = 0; i < this.timeList.length; i++) {
     //没有‘失败’字段的，重组临时数组赋值
      if (this.timeList[i].indexOf(getcktime) > 0) {
           var temp_obj = {}
           temp_obj = this.timeList[i]
           // temp_obj.operatorTime = this.timeList[i].operatorTime
           temp_arr = temp_arr.concat(temp_obj)
        }
   }


 usercitylist = temp_arr
 // console.log(usercitylist) 


 function getuservip() {

if (usercitylist.length === 0) {
　　alert('用户名错误了');
    // return false


}else{


// 　console.log(getcity);


 var temp_cityarr = []
 for (var i = 0; i < this.usercitylist.length; i++) {
     //没有‘失败’字段的，重组临时数组赋值
      if (this.usercitylist[i].indexOf(getcity) > 0) {
           var temp_cityobj = {}
           temp_cityobj = this.usercitylist[i]
           // temp_cityobj.operatorTime = this.usercitylist[i].operatorTime
           temp_cityarr = temp_cityarr.concat(temp_cityobj)
        }
   }

// console.log(temp_cityarr)


if (temp_cityarr.length == 0) {
　　alert(getcity+'地区错误');

    // return false

  }else{

// 　console.log("登录成功");
    return true
  }




}



}



resultvip=getuservip();
    // console.log(resultvip)

   
//=================   
   
//地区检测
   //iplist =resultip
    // function getIt(whitelist, iplist) {
        
    // let exp = whitelist.find(item => iplist.includes(item))
    // if (typeof (exp) == "undefined") {
    //     return false
    // }else{
    //     return true
    // }

    // }
    
  

//时间 列表 单一
 // resulttime=getIt(citys,getcktime);
     // console.log(resulttime);
    //城市
    //getIt(citys,getcity)
  // 

  // function myFuddn(tests){
  //  ctest = 'EEEE';
    
  //  // alert(cityName); 
  //   // alert("当前定位城市:"+cityName);
  // }
  // myFuddn()
   
 // alert(ctest);

