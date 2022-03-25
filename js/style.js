window.onload = function(){
	//获取函数，并绑定单击响应函数
	var city = document.getElementById("city");
	var bj = document.getElementById("bj");
	bj.onclick = function(){
		city.innerHTML = "北京";
	}
	
	var sh = document.getElementById("sh");
	sh.onclick = function(){
		city.innerHTML = "上海";
	}
	
	var tj = document.getElementById("tj");
	tj.onclick = function(){
		city.innerHTML = "天津";
	}
	
	var ln = document.getElementById("ln");
	ln.onclick = function(){
		city.innerHTML = "辽宁";
	}
	
	var cq = document.getElementById("cq");
	cq.onclick = function(){
		city.innerHTML = "重庆";
	}
	
	var hb = document.getElementById("hb");
	hb.onclick = function(){
		city.innerHTML = "河北";
	}
	
	var sx = document.getElementById("sx");
	sx.onclick = function(){
		city.innerHTML = "山西";
	}
	
	var hn = document.getElementById("hn");
	hn.onclick = function(){
		city.innerHTML = "河南";
	}
	
	var jl = document.getElementById("jl");
	jl.onclick = function(){
		city.innerHTML = "吉林";
	}
	
	var hlj = document.getElementById("hlj");
	hlj.onclick = function(){
		city.innerHTML = "黑龙江";
	}
	
	var zj = document.getElementById("zj");
	zj.onclick = function(){
		city.innerHTML = "浙江";
	}
	
	var js = document.getElementById("js");
	js.onclick = function(){
		city.innerHTML = "江苏";
	}
	
	var sd = document.getElementById("sd");
	sd.onclick = function(){
		city.innerHTML = "山东";
	}
	
	var nmg = document.getElementById("nmg");
	nmg.onclick = function(){
		city.innerHTML = "内蒙古";
	}
	
	var fj = document.getElementById("fj");
	fj.onclick = function(){
		city.innerHTML = "福建";
	}
	
	var h1 = document.getElementById("h1");
	h1.onclick = function(){
		city.innerHTML = "湖北";
	}
	
	var h2 = document.getElementById("h2");
	h2.onclick = function(){
		city.innerHTML = "湖南";
	}
	
	var h3 = document.getElementById("h3");
	h3.onclick = function(){
		city.innerHTML = "贵州";
	}
	
	var h4 = document.getElementById("h4");
	h4.onclick = function(){
		city.innerHTML = "云南";
	}


	var h5 = document.getElementById("h5");
	h5.onclick = function(){
		city.innerHTML = "西藏";
	}


	var h6 = document.getElementById("h6");
	h6.onclick = function(){
		city.innerHTML = "陕西";
	}


	var h7 = document.getElementById("h7");
	h7.onclick = function(){
		city.innerHTML = "甘肃";
	}


	var h8 = document.getElementById("h8");
	h8.onclick = function(){
		city.innerHTML = "青海";
	}


	var h9 = document.getElementById("h9");
	h9.onclick = function(){
		city.innerHTML = "钓鱼岛";
	}


	var s1 = document.getElementById("s1");
	s1.onclick = function(){
		city.innerHTML = "新疆";
	}


	var s2 = document.getElementById("s2");
	s2.onclick = function(){
		city.innerHTML = "港澳";
	}


	var s3 = document.getElementById("s3");
	s3.onclick = function(){
		city.innerHTML = "台湾";
	}


	var s4 = document.getElementById("s4");
	s4.onclick = function(){
		city.innerHTML = "宁夏";
	}
	
	var s5 = document.getElementById("s5");
	s5.onclick = function(){
		city.innerHTML = "海外";
	}
	
	var img = document.getElementById("top-img");
	var del = document.getElementById("del");
	del.onclick = function(){
		img.style.display = "none";
	};
	let imgArr = ["./img/body00.webp","./img/body01.webp","./img/body02.webp","./img/body03.webp","./img/body04.webp","./img/body05.webp"];
	const bimg = document.getElementById("bimg");
	const last = document.getElementById("last");
	const next = document.getElementById("next");
	const liAll = document.querySelectorAll("#bannerA")
	let index = 0;
	let timer;
	function styles(index){
		for(let i in liAll){
			liAll[i].className = ''
		}
		liAll[index].classList.add("sshow")
		bimg.src = imgArr[index];
	}
	styles(index)
	last.onclick = function(){
		index--;
		if(index<0)
		{
			index = imgArr.length-1;
		}
		styles(index)
	};
	
	next.onclick = function(){
		index++;
		if(index>imgArr.length-1)
		{
			index = 0;
		}
		styles(index)
	};
	
	const bannerA = document.getElementsByClassName("bannerA");
	
	for(let i = 0;i < liAll.length ; i++)
	{
		liAll[i].index = i;
		liAll[i].onmouseover = function(){
			index = this.index
			styles(index)
		};
	}
	
	timer = setInterval(function(){
		styles(index++%liAll.length)
	},2000)
	
	const minute = document.getElementById("minute");
	const miao = document.getElementById("miao");
	
	let s = 0;
	setInterval(function(){
		s++;
		if(s<10)
		{
			miao.innerHTML = "0" + s; 
		}
		else if(s<60)
		{
			miao.innerHTML = s;
		}
		else if(s == 60)
		{
			s=0;
		}
	},1000);
	
	let fen = 0;
	setInterval(function(){
		fen++;
		if(fen<10)
		{
			minute.innerHTML = "0" + fen;
		}
		else if(fen<60)
		{
			minute.innerHTML = fen;
		}
		else if(fen == 60)
		{
			fen = 0;
		}
	},60000)
};