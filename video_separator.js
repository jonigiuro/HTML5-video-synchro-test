// JavaScript Document
$(document).ready(function(){
	$("#video-container").mousemove(function(e){
		$("#video2").width(e.pageX-this.offsetLeft);
		$("#video3").height(e.pageY-this.offsetTop + 30);
		$("#video4").height(e.pageY-this.offsetTop + 30);
		$("#video4").width(e.pageX-this.offsetLeft);
		

	});
	
	function restartVideos(videos){
		for(var i=0;i<videos.length;i++){
			var single_vid = document.getElementById(videos[i]);
			single_vid.currentTime = 0;
		}
	}
	$("#main").click(function(){
		//alert('pause');
		restartVideos(['primaveravideo','invernovideo','primaveravideo2','invernovideo2']);
	});
});
function hideVideos(video, text){
	if((video).is(":visible")){
		video.css('display','none');
		text.css('color','#999');
	}else{
		video.css('display','block');
		text.css('color','#fff');
	}
}
function KeyCheck()
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 37:
      hideVideos($('#video1'), $('#wtext'));
      break;
      case 38:
      hideVideos($('#video2'), $('#w2text'));
      break;
      case 39:
      hideVideos($('#video3'), $('#stext'));
	    break;
      case 40:
      hideVideos($('#video4'), $('#s2text'));
      break;
   }

}