function Ajaxy(t,e,n){var a=new XMLHttpRequest;return this.data=n,a.open(t,e,!0),"post"==t&&(a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(this.data))),"get"==t&&a.send(),new Promise(function(t,e){a.onreadystatechange=function(){if(4==a.readyState&&a.status<=300)return t(a.response);a.readyState||e(Error("Failed to fetch data !"))}})}
