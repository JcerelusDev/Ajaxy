var self;function Ajaxy(e,t){xhr=new XMLHttpRequest,xhr.open("get",e),xhr.responseType=t,xhr.send(),xhr.onreadystatechange=function(){4==xhr.readyState&&(output=self.output(xhr.response),"text/xml"==t&&(output=self.output(xhr.response)))},self=this}
