/*var Base={
 getId:function(id){
  return document.getElementById(id);
 },
 getName:function(na){
  return document.getElementsByName(na);
 },
 getTag:function(tag){
  return document.getElementsByTagName(tag);
 },
};
*/
//每次新建一个对象
var $=function(){
	return new Base();
}

function Base(){
	this.elements=[];
}

//Base.prototype.elements=[];

 //获取id节点
Base.prototype.getId=function(id){
		 this.elements.push(document.getElementById(id));
		 return this;
}

//获取元素节点
Base.prototype.getTagName=function(tag){
	var tags=document.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++){
		 this.elements.push(tags[i]);
	}
	return this;
}

//获取class节点数组 增加区域选择
Base.prototype.getClass=function(className,idName){
	var node=null
	if(arguments.length==2){
        node=document.getElementById(idName);
	}else{
        node=document;
	}
	var all=node.getElementsByTagName('*');
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			this.elements.push(all[i]);
		}
	}
	return this;
}

//获取某一个class

Base.prototype.getElement=function(num){
	var element=this.elements[num];
	this.elements=[];
	this.elements[0]=element;
	return this;

}

//设置Css
Base.prototype.css=function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==1){//获取外部CSS
			if(typeof window.getComputedStyle!='undeinfed'){//W3C
				return window.getComputedStyle(this.elements[i],null)[attr];
			}else if(typeof this.elements[i].currentStyle!='undeinfed'){//IE
				return this.elements[i].currentStyle[attr];
			}

			//return this.elements[i].style[attr];
		}
		this.elements[i].style[attr]=value;
	}
	return this;
}

//设置Html
Base.prototype.html=function(str){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML=str;
	}
	return this;
}

//设置click方法
Base.prototype.click=function(fn){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onclick=fn;
	}
	return this;
}