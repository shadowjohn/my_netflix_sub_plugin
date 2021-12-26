
function run_3wa_netflix() 
{    
  var appClass = {
    method: {
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
              console.log(c);
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
  if(location.href.indexOf("netflix")==-1) {
    console.log(location.href.indexOf("netflix"));
    console.log("only run on netflix url...");
    return; //只有在 netflix 才有效
  }
  window['my_netflix_x_position'] = -40; //預設的位置
  if(appClass.method.getMemory('my_netflix_x_position')!=null)
  {
    //get Last setting
    window['my_netflix_x_position'] = parseInt(appClass.method.getMemory('my_netflix_x_position'));
  }
  window['my_netflix_fontsize'] = 1.5; //Default font size
  if(appClass.method.getMemory('my_netflix_fontsize_V0.5')!=null)
  {
    //get Last setting
    window['my_netflix_fontsize'] = parseFloat(appClass.method.getMemory('my_netflix_fontsize_V0.5'));
  }
  window['my_netflix_fontsize'] = (window['my_netflix_fontsize']>=3)?3:window['my_netflix_fontsize'];
  window['my_netflix_fontsize'] = (window['my_netflix_fontsize']<=0.1)?0.1:window['my_netflix_fontsize'];
  //註冊style到 head
  appClass.method.registerFontSize();  
  appClass.method.$("head style[reqc='s']").remove();
  appClass.method.$("head").append(`
<style reqc='s'>   
  .my_netflix_controller_class{ 
    width: 250px; 
    padding:10px; 
    text-align:center; 
    position:fixed; 
    color:#000; 
    z-index: 9999999999; 
    background-color: rgba(255,255,255,0.8); 
    font-size:24px; 
    top:0px; 
    left:45%; 
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
      3waNetflix V0.5<br> \
      By 3WA Studio<br> \
      <img src='https://3wa.tw/pic/3wa_logo.png' width='35' onerror=\"this.style.display='none';\"> \
      <br> \
      SUB (Font Size)   <span reqc='my_netflix_fontsize_span'>"+window['my_netflix_fontsize']+"</span><br> \
      <input class='my_netflix_fontsize_input_range_class' reqc='my_netflix_fontsize_input' type='range' min='0.1' max='3' step='0.1' value='"+window['my_netflix_fontsize']+"'> \
      <br> \
      SUB (X Axis)   <span reqc='my_netflix_x_position_span'>"+window['my_netflix_x_position']+"</span><br> \
      <input class='my_netflix_x_position_input_range_class' reqc='my_netflix_x_position_input' type='range' min='-300' max='300' value='"+window['my_netflix_x_position']+"'> \
    </div> \
    ");
    appClass.method.$(".my_netflix_controller_class").unbind("mousemove");
    appClass.method.$(".my_netflix_controller_class").bind("mousemove",function(){
      appClass.method.$(".my_netflix_controller_class").css({'opacity':1});
      clearTimeout(window['wtf_clear']);
    });
    appClass.method.$(".my_netflix_controller_class").unbind("mouseout");
    appClass.method.$(".my_netflix_controller_class").unbind("mouseout",function(){
      window['wtf_clear'] = setTimeout(function(){
        //jQuery(".my_netflix_controller_class").animate({'opacity':0.001},300);
        appClass.method.$(".my_netflix_controller_class").fadeOut("fast");
      },300);
    }); 
    
    appClass.method.$("input[reqc='my_netflix_fontsize_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_fontsize_input']").bind("input",function(){      
      window['my_netflix_fontsize'] = parseFloat(appClass.method.$("input[reqc='my_netflix_fontsize_input']").val());
      appClass.method.setMemory('my_netflix_fontsize_V0.5',window['my_netflix_fontsize']);
      appClass.method.$("span[reqc='my_netflix_fontsize_span']").text(window['my_netflix_fontsize']);
      
      //重新註冊字大小
      appClass.method.registerFontSize();
    });
     
    appClass.method.$("input[reqc='my_netflix_x_position_input']").unbind("input");
    appClass.method.$("input[reqc='my_netflix_x_position_input']").bind("input",function(){
      //console.log(this);      
      window['my_netflix_x_position'] = parseInt(appClass.method.$("input[reqc='my_netflix_x_position_input']").val());
      appClass.method.setMemory('my_netflix_x_position',window['my_netflix_x_position']);
      appClass.method.$("span[reqc='my_netflix_x_position_span']").text(window['my_netflix_x_position']);
    });
  
    clearInterval(window['wtf']);
    window['wtf']=setInterval(function(){
      //每 50ms 更新字幕的位置
      appClass.method.$("image").attr('x',window['my_netflix_x_position']);      
      if(appClass.method.$("svg image").length<=0) return;
      if(appClass.method.$("svg image[my3waFlag='YES']").length > 0) return;
      if(appClass.method.$("svg image").attr("orin_height")==null)
      {
        appClass.method.$("svg image").attr("orin_height",appClass.method.$("svg image").attr("height"));
      }
      var orin_height = parseInt( appClass.method.$("svg image").attr("orin_height") );
      console.log(orin_height);
      appClass.method.$("svg image").css({
              'width':'100%',
              'height': (orin_height*window['my_netflix_fontsize'])+'px'
            });
      appClass.method.$("svg image").attr('my3waFlag','YES');
     
    },50);
  //},1); //setTimeout    
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: run_3wa_netflix
  });
});
