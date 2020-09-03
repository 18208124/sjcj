var lis=document.getElementsByTagName("li");
var audio=document.getElementById("audio");
var con=document.getElementById("con");
var arr=['../music/2020 (live).mp3','../music/24H.mp3','../music/Ice Cube.mp3','../music/Love In My Pocket.mp3','../music/Falling For You.mp3','../music/First Sight.mp3',]
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		for(var i=0;i<lis.length;i++){
			if(this==lis[i]){
				lis[i].className="bg";
				audio.src=arr[i];
				audio.play();
				con.innerHTML=lis[i].innerHTML;
				var a=i;
				audio.onended=function() {
					a++;
					if(a>lis.length-1){
						a=0;
					}
					
					for(var j=0;j<lis.length;j++){
						lis[j].className="";
					}
					audio.src=arr[a];
					audio.play();
					lis[a].className="bg";
					con.innerHTML=lis[a].innerHTML;
				}
			}else{
				lis[i].className="";
			}
		}
		
	}
}
