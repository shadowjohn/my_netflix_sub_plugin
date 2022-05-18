function run_3wa_netflix() 
{    
  var appClass = {
    appVersion: "1.6",
    method: {
        "getWindowSize":function(){
          var myWidth = 0, myHeight = 0;
          if( typeof( window.innerWidth ) == 'number' ) {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
          } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
          } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;      
          }
          var a=new Object();
          a['width']=myWidth;
          a['height']=myHeight;
          return a;
        },
        "$": function(dom){
            let d = document.querySelectorAll(dom);
            //d._myJQ_events = [
                /*
                {
                    type:
                    method:
                }
                */
            //];
            d.remove = function(){  
              for(let i=0,max_i=this.length;i<max_i;i++){
                this[i].remove();
              } 
            };
            d.array_values = function(input) {
                var tmp_arr = [], cnt = 0; var wtfkey = ''; for (wtfkey in input) { tmp_arr[cnt] = input[wtfkey]; cnt++; }
                return tmp_arr;
            };
            d.unbind = function(v){                            
              for(let i=0,max_i=this.length;i<max_i;i++){
                if(this[i]["_myJQ_events"]==null)
                {
                    this[i]["_myJQ_events"] = [];
                }
                for(var k in this[i]["_myJQ_events"])
                {                
                  if(v.toLowerCase()==this[i]["_myJQ_events"][k]["type"].toLowerCase())
                  {
                    this[i].removeEventListener(v,this[i]["_myJQ_events"][k]["method"]);
                    delete this[i]["_myJQ_events"][k];                    
                  }
                  this[i]["_myJQ_events"] = this.array_values(this[i]["_myJQ_events"]);
                }
              }              
            };
            d.bind = function(){
              for(let i=0,max_i=this.length;i<max_i;i++){
                if(this[i]["_myJQ_events"]==null)
                {
                    this[i]["_myJQ_events"] = [];
                }
                switch(arguments.length)
                {
                  case 2:
                      this[i].addEventListener(arguments[0],arguments[1]);
                      var d = new Object();
                      d['type'] = arguments[0];
                      d['method'] = arguments[1];
                      this[i]["_myJQ_events"].push(d);
                      break;
                  case 3:
                      //中間是 obj
                      this[i].addEventListener(arguments[0],arguments[2].bind({data:arguments[1]}));
                      var d = new Object();
                      d['type'] = arguments[0];
                      d['method'] = arguments[2];
                      this[i]["_myJQ_events"].push(d);
                      break;
                }
              }
            };  
            d.attr = function(k,v){
              if(arguments.length==2){                
                for(let i=0,max_i=this.length;i<max_i;i++){
                  if(v==null){                
                    this[i].removeAttribute(k);                  
                  }else{
                    this[i].setAttribute(k,v);
                  }                
                }
              }
              else
              {
                if(this.length!=null && this.length>=1){
                  return this[0].getAttribute(k);
                }
                return this.getAttribute(k);
              }
            };
            d.fadeOut = function(v){
              let sp = 1000;
              if(typeof(v)=="string")
              {
                switch(v.toLowerCase())
                {
                    case "slow":
                      sp = 800;
                      break;
                    case "fast":
                      sp = 200;
                      break;
                }
              }
              else if(typeof(v)=="number")              
              {
                sp = v;                
              }
              let c = sp/1000.0;
              //console.log(c);
              this.css({
                'transition':c+'s',
                'opacity':0
              });
              setTimeout(function(){
                this.css({
                  'transition':'all 0s ease 0s' //return to default
                });
              }.bind(this),sp);            
            };
            d.css = function(k,v){
              switch(arguments.length)
              {
                case 1:
                    switch(typeof(k))
                    {
                        case 'string':
                            if(this.length!=null && this.length>=1){
                              return this[0].getAttribute(k);
                            }
                            return this.getAttribute(k); 
                            break;
                        default:
                            for(let i=0,max_i=this.length;i<max_i;i++){
                              for(var kk in k){                          
                                this[i].style.setProperty(kk,k[kk]);
                              }                                                          
                            }    
                            break;
                    }
                    break;
                case 2:
                    if(typeof(k)=="string" && typeof(v) =="string")
                    {
                       for(let i=0,max_i=this.length;i<max_i;i++){                          
                         this[i].style.setProperty(k,v);                                                          
                       } 
                    }
                    break;
              }  
            };
            d.prop = function(v){
              switch(arguments.length)
              {
                case 2:
                    switch(v[0].toLowerCase())
                    {
                        case 'checked':
                            for(let i=0,max_i=this.length;i<max_i;i++){                                                
                              this[i].checked = (v[1]==true)?'checked':'';                                                                          
                            }
                            break;
                        case 'selected':
                            for(let i=0,max_i=this.length;i<max_i;i++){                                                
                              this[i].selected = (v[1]==true)?'selected':'';                                                                          
                            }
                            break;
                    }
                    break;
              }
            };
            d.val = function(v){
              switch(arguments.length)
              {
                case 0:
                    if(this.length!=null && this.length>=1){
                      return this[0].value;
                    }
                    else
                    {
                      return this.value;
                    }
                    break;
                case 1:
                    for(let i=0,max_i=this.length;i<max_i;i++){                                                
                      this[i].value = v.toString();                                                                               
                    }    
                    break;
              }
            };
            d.append = function(v){
              for(let i=0,max_i=this.length;i<max_i;i++){                                                
                this[i].insertAdjacentHTML('beforeend', v);                                                                          
              }   
            };
            d.prepend = function(v){
              for(let i=0,max_i=this.length;i<max_i;i++){                                                
                this[i].insertAdjacentHTML('beforebegin', v);                                                                          
              }   
            };
            d.text = function(v){
              let op = [];
              switch(arguments.length)
              {
                case 0:
                  for(let i=0,max_i=this.length;i<max_i;i++){
                    op.push(this[i].innerText);
                  }
                  return op.join("");
                  break;
                case 1:
                  for(let i=0,max_i=this.length;i<max_i;i++){                                                
                    this[i].innerText = v;                                                                          
                  }
                  break;
              }              
            };
            d.html = function(v){
              let op = [];
              switch(arguments.length)
              {
                case 0:
                  for(let i=0,max_i=this.length;i<max_i;i++){
                    op.push(this[i].innerHTML);
                  }
                  return op.join("");
                  break;
                case 1:
                  for(let i=0,max_i=this.length;i<max_i;i++){                                                
                    this[i].innerHTML = v;                                                                          
                  }
                  break;
              }
            };
            return d;
        },
        "setMemory": function(wtfkey, value) {
           localStorage.setItem(wtfkey, value);
        },
        "getMemory": function(wtfkey) {
           return localStorage.getItem(wtfkey);
        },
        "registerFontSize": function() {          
          this.$("style[reqc='style_fontsize']").remove();
          //jQuery("svg image").attr('my3waFlag',null);
          this.$("svg image").attr('my3waFlag',null);
        }
    }
  };
 
 
//主程式開始
//3秒後執行
//setTimeout(function(){
  //console.log(location.href);
  if(location.href.indexOf("netflix.com/watch/")==-1) {
    console.log(location.href.indexOf("netflix"));
    console.log("only run on netflix url...");
    //return; //只有在 netflix 才有效
  }
  
  var _myNetFlixSettings = {
    'my_netflix_font_color': { 'default' : '#fff5f8' }, // 字色
    'my_netflix_font_border_color': { 'default' : '#1c5cb0' }, // 字框色
    'my_netflix_font_bolder': { 'default' : 400, 'min': 100, 'max':700,'step':300, 'sets':{100:'細緻',400:'正常',700:'粗體'} }, // 字粗
    'my_netflix_y_position': { 'default' : 12, 'min': -20, 'max': 100,'step':1 }, //y 軸位置
    'my_netflix_fontsize': { 'default' : 1.6, 'min':0.1 , 'max': 3,'step':0.1 }, //文字大小
    'my_netflix_fontspace': { 'default' : 12.5, 'min':-50, 'max':50,'step':0.1 }, //文字間距
    'my_netflix_font_text_shadow': { 'default' : 10, 'min':0, 'max':50,'step':0.1 } //字框粗細
  };
  
  for(var k in _myNetFlixSettings)
  {
    window[k] = _myNetFlixSettings[k]['default'];
    if(appClass.method.getMemory(k)!=null)
    {
      //get Last setting
      window[k] = appClass.method.getMemory(k);
    }    
    if(typeof(_myNetFlixSettings[k]['min'])!='undefined')
    {
      window[k] = (window[k]>=_myNetFlixSettings[k]['max'])?_myNetFlixSettings[k]['max']:window[k];
      window[k] = (window[k]<=_myNetFlixSettings[k]['min'])?_myNetFlixSettings[k]['min']:window[k];
    }
  }  
  //註冊style到 head
  appClass.method.registerFontSize();  
  appClass.method.$("head style[reqc='s']").remove();
  appClass.method.$("head").append(`
<style reqc='s'>   
  .my_netflix_controller_class{ 
    width: 450px; 
    padding:10px; 
    text-align:center; 
    position:fixed; 
    color:#000; 
    z-index: 9999999999; 
    background-color: rgba(255,255,255,0.8); 
    font-size:24px; 
    top:0px; 
    left: 35%; 
    border:2px solid #00f; 
    border-radius: 5px;
    opacity:0.01; 
  } 
    
  .my_netflix_controller_class input[type='range']{
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
  }
  .my_netflix_controller_class input[type='range']:focus {
    outline: none;
  }
  .my_netflix_controller_class input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .my_netflix_controller_class input[type='range']::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  .my_netflix_controller_class input[type='range']:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  .my_netflix_controller_class input[type='range']::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  .my_netflix_controller_class input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  .my_netflix_controller_class input[type='range']::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  .my_netflix_controller_class input[type='range']::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .my_netflix_controller_class input[type='range']::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  .my_netflix_controller_class input[type='range']::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  .my_netflix_controller_class input[type='range']:focus::-ms-fill-lower {
    background: #3071a9;
  }
  .my_netflix_controller_class input[type='range']:focus::-ms-fill-upper {
    background: #367ebd;
  }
</style>`);
  //註冊一個調整字幕位置的功能
  appClass.method.$("div[reqc='my_netflix_controller_div']").remove();
  appClass.method.$("body").prepend(" \
    <div reqc='my_netflix_controller_div' class='my_netflix_controller_class'> \
      <img src='https://3wa.tw/pic/3wa_logo.png' width='35' onerror=\"this.style.display='none';\">&nbsp;&nbsp;&nbsp;3waNetflix V"+appClass.appVersion+" \
      <br> \
      <table style='width:100%;' reqc='my_netflix_controller_table'> \
        <tr> \
          <td valign='top' style='padding-right:5px;width:220px;text-align:left;'> \
          <br> \
          字體大小   <span reqc='my_netflix_fontsize_span'>"+window['my_netflix_fontsize']+"</span><br> \
          <input class='my_netflix_fontsize_input_range_class' reqc='my_netflix_fontsize_input' type='range' min='"+_myNetFlixSettings['my_netflix_fontsize']['min']+"' max='"+_myNetFlixSettings['my_netflix_fontsize']['max']+"' step='"+_myNetFlixSettings['my_netflix_fontsize']['step']+"' value='"+window['my_netflix_fontsize']+"'> \
          <br> \
          字體粗細   <span reqc='my_netflix_font_bolder_span'>"+_myNetFlixSettings['my_netflix_font_bolder']['sets'][window['my_netflix_font_bolder']]+"</span><br> \
          <input class='my_netflix_font_bolder_input_range_class' reqc='my_netflix_font_bolder_input' type='range' min='"+_myNetFlixSettings['my_netflix_font_bolder']['min']+"' max='"+_myNetFlixSettings['my_netflix_font_bolder']['max']+"' step='"+_myNetFlixSettings['my_netflix_font_bolder']['step']+"' value='"+window['my_netflix_font_bolder']+"'> \
          <br> \
          字體間距   <span reqc='my_netflix_fontspace_span'>"+window['my_netflix_fontspace']+"</span><br> \
          <input class='my_netflix_fontspace_input_range_class' reqc='my_netflix_fontspace_input' type='range' min='"+_myNetFlixSettings['my_netflix_fontspace']['min']+"' max='"+_myNetFlixSettings['my_netflix_fontspace']['max']+"' step='"+_myNetFlixSettings['my_netflix_fontspace']['step']+"' value='"+window['my_netflix_fontspace']+"'> \
          <br> \
          字框粗細   <span reqc='my_netflix_font_text_shadow_span'>"+window['my_netflix_font_text_shadow']+"</span><br> \
          <input class='my_netflix_font_text_shadow_input_range_class' reqc='my_netflix_font_text_shadow_input' type='range' min='"+_myNetFlixSettings['my_netflix_font_text_shadow']['min']+"' max='"+_myNetFlixSettings['my_netflix_font_text_shadow']['max']+"' step='"+_myNetFlixSettings['my_netflix_font_text_shadow']['step']+"' value='"+window['my_netflix_font_text_shadow']+"'> \
          <br> \
          字幕高度   <span reqc='my_netflix_y_position_span'>"+window['my_netflix_y_position']+"</span><br> \
          <input class='my_netflix_y_position_input_range_class' reqc='my_netflix_y_position_input' type='range' min='"+_myNetFlixSettings['my_netflix_y_position']['min']+"' min='"+_myNetFlixSettings['my_netflix_y_position']['max']+"' step='"+_myNetFlixSettings['my_netflix_y_position']['step']+"' value='"+window['my_netflix_y_position']+"'></div> \
      </td> \
      <td valign='top' style='border-left: 1px dashed #00c;padding-left:5px;text-align:left;'> \
          <br> \
          <br> \
        字體顏色： \
        <br> \
        <input type='color' reqc='my_netflix_font_color_input' value='"+window['my_netflix_font_color']+"' style='width:100%;'> \
        <br> \
        <br> \
        邊框顏色： \
        <br> \
        <input type='color' reqc='my_netflix_font_border_color_input' value='"+window['my_netflix_font_border_color']+"' style='width:100%;'> \
      </td> \
      </tr> \
      </table> \
    </div> \
    ");
    //set Default
    
    //註冊一個 interval，如果網頁是 netflix.com/watch/  .my_netflix_controller_class 才有事件
    setInterval(function(){
      if(location.href.indexOf("netflix.com/watch/")==-1) {
        //2022-05-18 #22 修正在選影片頁時，控制項不能被點選
        //不是播放頁
        appClass.method.$(".my_netflix_controller_class").css({
          'pointer-events':'none' 
        });
      }
      else{
        appClass.method.$(".my_netflix_controller_class").css({
          'pointer-events':'auto' 
        });
      }
    },2000);  
    
    appClass.method.$(".my_netflix_controller_class").unbind("mousemove");
    appClass.method.$(".my_netflix_controller_class").bind("mousemove",function(){
      if(location.href.indexOf("netflix.com/watch/")==-1) {                
        return;
      }      
      appClass.method.$(".my_netflix_controller_class").css({'opacity':1});
      clearTimeout(window['wtf_clear']);
    });
    appClass.method.$(".my_netflix_controller_class").unbind("mouseout");
    appClass.method.$(".my_netflix_controller_class").bind("mouseout",function(){
      window['wtf_clear'] = setTimeout(function(){
        //jQuery(".my_netflix_controller_class").animate({'opacity':0.001},300);
        appClass.method.$(".my_netflix_controller_class").fadeOut("fast");
      },300);
    }); 
    
    
    //字體大小
    appClass.method.$("input[reqc='my_netflix_fontsize_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_fontsize_input']").bind("input",function(){      
      window['my_netflix_fontsize'] = parseFloat(appClass.method.$("input[reqc='my_netflix_fontsize_input']").val());
      appClass.method.setMemory('my_netflix_fontsize',window['my_netflix_fontsize']);
      appClass.method.$("span[reqc='my_netflix_fontsize_span']").text(window['my_netflix_fontsize']);
      
      //重新註冊字大小
      appClass.method.registerFontSize();
    });
    
    //字體顏色
    appClass.method.$("input[reqc='my_netflix_font_color_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_font_color_input']").bind("input",function(){
      window['my_netflix_font_color'] = appClass.method.$("input[reqc='my_netflix_font_color_input']").val();
      appClass.method.setMemory('my_netflix_font_color',window['my_netflix_font_color']);      
      //重新註冊字大小
      appClass.method.registerFontSize();
    });
    
    //字框顏色
    appClass.method.$("input[reqc='my_netflix_font_border_color_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_font_border_color_input']").bind("input",function(){
      window['my_netflix_font_border_color'] = appClass.method.$("input[reqc='my_netflix_font_border_color_input']").val();
      appClass.method.setMemory('my_netflix_font_border_color',window['my_netflix_font_border_color']);               
      //重新註冊字大小
      appClass.method.registerFontSize();
    });  
    
    //字體粗細
    appClass.method.$("input[reqc='my_netflix_font_bolder_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_font_bolder_input']").bind("input",function(){
      window['my_netflix_font_bolder'] = parseFloat(appClass.method.$("input[reqc='my_netflix_font_bolder_input']").val());
      appClass.method.setMemory('my_netflix_font_bolder',window['my_netflix_font_bolder']);
      var v = _myNetFlixSettings['my_netflix_font_bolder']['sets'][window['my_netflix_font_bolder']];
      appClass.method.$("span[reqc='my_netflix_font_bolder_span']").text(v);            
      //重新註冊字大小
      appClass.method.registerFontSize();
    }); 
    
    //字體間距
    appClass.method.$("input[reqc='my_netflix_fontspace_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_fontspace_input']").bind("input",function(){
      window['my_netflix_fontspace'] = parseFloat(appClass.method.$("input[reqc='my_netflix_fontspace_input']").val());
      appClass.method.setMemory('my_netflix_fontspace',window['my_netflix_fontspace']);
      appClass.method.$("span[reqc='my_netflix_fontspace_span']").text(window['my_netflix_fontspace']);
      
      //重新註冊字大小
      appClass.method.registerFontSize();
    });
    
    //字體高度
    appClass.method.$("input[reqc='my_netflix_y_position_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_y_position_input']").bind("input",function(){
      window['my_netflix_y_position'] = parseFloat(appClass.method.$("input[reqc='my_netflix_y_position_input']").val());
      appClass.method.setMemory('my_netflix_y_position',window['my_netflix_y_position']);
      appClass.method.$("span[reqc='my_netflix_y_position_span']").text(window['my_netflix_y_position']);
      
      //重新註冊字大小
      appClass.method.registerFontSize();
    });
     
    //X 軸位置 
    appClass.method.$("input[reqc='my_netflix_y_position_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_y_position_input']").bind("input",function(){
      //console.log(this);      
      window['my_netflix_y_position'] = parseInt(appClass.method.$("input[reqc='my_netflix_y_position_input']").val());
      appClass.method.setMemory('my_netflix_y_position',window['my_netflix_y_position']);
      appClass.method.$("span[reqc='my_netflix_y_position_span']").text(window['my_netflix_y_position']);
    });
  
    //字體邊框
    appClass.method.$("input[reqc='my_netflix_font_text_shadow_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_font_text_shadow_input']").bind("input",function(){
      window['my_netflix_font_text_shadow'] = parseFloat(appClass.method.$("input[reqc='my_netflix_font_text_shadow_input']").val());
      appClass.method.setMemory('my_netflix_font_text_shadow',window['my_netflix_font_text_shadow']);
      appClass.method.$("span[reqc='my_netflix_font_text_shadow_span']").text(window['my_netflix_font_text_shadow']);
      
      //重新註冊字大小
      appClass.method.registerFontSize();
    });
    
    clearInterval(window['wtf']);
    //將原廠的字幕藏掉，馬的
    appClass.method.$("head").append("<style>.player-timedtext{z-index:-2;}</style>");        
    window['wtf']=setInterval(function(){
      if(appClass.method.$("video").length != 0 && appClass.method.$("div[reqc='my3waSubDiv']").length == 0)
      {
        appClass.method.$("video").prepend("<div reqc='my3waSubDiv' class='my3waSubDiv_class'></div>");
      }
    
      var my3waSubDiv = appClass.method.$("div[reqc='my3waSubDiv']");
      //每 50ms 更新字幕的位置
      //appClass.method.$("image").attr('x',window['my_netflix_y_position']);
            
      if(appClass.method.$("svg image").length > 0)
      {
        //2022/03/18以前的舊版
        if(appClass.method.$("svg image[my3waFlag='YES']").length > 0) return;
        if(appClass.method.$("svg image").attr("orin_height")==null)
        {
          appClass.method.$("svg image").attr("orin_height",appClass.method.$("svg image").attr("height"));
        }
        var orin_height = parseInt( appClass.method.$("svg image").attr("orin_height") );
        //console.log(orin_height);
        appClass.method.$("svg image").css({
                'width':'100%',
                'height': (orin_height*window['my_netflix_fontsize'])+'px'
              });
        appClass.method.$("svg image").attr('my3waFlag','YES');
      }
      if(appClass.method.$(".player-timedtext-text-container span").length > 0)
      {
        //2022/03/21 新版 0.7
        //appClass.method.$(".player-timedtext").css({'display':'none'});        
        if(appClass.method.$(".player-timedtext-text-container span[my3waFlag='YES']").length > 0) {
            return;
        }

        var orinSubs = appClass.method.$(".player-timedtext-text-container span");
        var m = new Array();
        for(var i=0,max_i=orinSubs.length;i<max_i;i++){
            var txt = orinSubs[i].innerText;
            if(m.length==0) //空的
            {
                m.push(txt);
            }
            else 
            {              
              //2022-04-28 不要加重複的字
              for(var j=0,max_j=m.length;j<max_j;j++)
              {
                if(m[j].indexOf(txt)!=-1)
                {                    
                    m[j]=""; //清掉前面重複字的，保留後面的
                    break;
                }
              }              
              m.push(txt);              
            }
        }
        m = m.filter(x=> x !='' && x != null);
        //多重字邊
        //m -> <span>m...</span>
        for(var i=0,max_i=m.length;i<max_i;i++){
            m[i] = "<p reqc='my3waSubDivSpan' data-text=\""+m[i].replace("\"","“")+"\"></p>"; //
        }
        
        //無腦置中效果
        // From : https://stackoverflow.com/questions/8508275/how-to-center-a-position-absolute-element
        
        my3waSubDiv.html(m.join("<br>")+`
            <style>
                div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:100%;
                    /* 修正雙行字高度 */                                        
                    margin-top:0px; 
                    margin-bottom:0px;                                        
                }
                div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']::before,
                div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']::after {
                    content: attr(data-text);
                    position: absolute;                    
                    z-index: -1;      
                    color: `+window['my_netflix_font_color']+`; /*文字顏色*/             
                }
                div[reqc='my3waSubDiv'] p[reqc='my3waSubDivSpan']::before{
                    -webkit-text-stroke: `+window['my_netflix_font_text_shadow']+`px `+window['my_netflix_font_border_color']+`; /*字框顏色*/
                }                
            </style>
        `);
        my3waSubDiv.css({
            'position': 'absolute',                
            'width': '100%',
            'background-size': 'cover',
            'font-family': 'Netflix Sans,Copperplate Gothic,Copperplate Gothic Bold,Copperplate,Arial,Helvetica',
            'font-variant': 'small-caps',
            'font-weight': window['my_netflix_font_bolder'],
            'bottom': window['my_netflix_y_position']+'%',
            'text-align': 'center',
            'font-size': (31*window['my_netflix_fontsize'])+'px',
            //'text-shadow': (-1*window['my_netflix_font_text_shadow'])+'px '+window['my_netflix_font_text_shadow']+'px '+(window['my_netflix_font_text_shadow'])+'px #000,'+
            //               (window['my_netflix_font_text_shadow'])+'px '+(window['my_netflix_font_text_shadow'])+'px '+(window['my_netflix_font_text_shadow'])+'px #000,'+
            //               (window['my_netflix_font_text_shadow'])+'px '+(-1*window['my_netflix_font_text_shadow'])+'px '+(window['my_netflix_font_text_shadow'])+'px #000,'+
            //               (-1*window['my_netflix_font_text_shadow'])+'px '+(-1*window['my_netflix_font_text_shadow'])+'px '+(window['my_netflix_font_text_shadow'])+'px #000 ',
            '-webkit-text-stroke': '0px black',            
            'z-index': 2147483647,
            'display': 'inline',            
            'pointer-events': 'none', //div 可穿透
            //2022-04-20 增加字距
            'letter-spacing': window['my_netflix_fontspace']+'px'              
        });
        //From : https://www.zhangxinxu.com/wordpress/2017/06/webkit-text-stroke-css-text-shadow/

      }
      else
      {     
        //離開 video 模式了   
        my3waSubDiv.css({
            'display':'none'
        });        
        return;   
      }
    },50);
  //},1); //setTimeout    
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: run_3wa_netflix
  });
});
