// JavaScript Document
$(document).ready(function(){
	$("#main").mousemove(function(e){
		$("#video2").width(e.pageX-this.offsetLeft);
		$("#video3").height(e.pageY-this.offsetTop);
		$("#video4").height(e.pageY-this.offsetTop);
		$("#video4").width(e.pageX-this.offsetLeft);
		

	});
	
	$("#main").click(function(){
		//alert('pause');
		document.getElementById('primaveravideo').pause();
		document.getElementById('invernovideo').pause();
		document.getElementById('primaveravideo2').pause();
		document.getElementById('invernovideo2').pause();
		document.getElementById('primaveravideo').currentTime = 0;
		document.getElementById('invernovideo').currentTime = 0;
		document.getElementById('primaveravideo2').currentTime = 0;
		document.getElementById('invernovideo2').currentTime = 0;
		document.getElementById('primaveravideo').play();
		document.getElementById('invernovideo').play();
		document.getElementById('primaveravideo2').play();
		document.getElementById('invernovideo2').play();
	});
});

//$('#video1').css('visibility','hidden');
function KeyCheck()
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 37:
      if($('#video1').is(":visible")){
				$('#video1').css('display','none');
				$('#wtext').css('color','#999');
			}else{
				$('#video1').css('display','block');
				$('#wtext').css('color','#fff');
			}
      break;
      case 38:
      if($('#video2').is(":visible")){
				$('#video2').css('display','none');
				$('#stext').css('color','#999');
			}else{
				$('#video2').css('display','block');
				$('#stext').css('color','#fff');
			}
      break;
      case 39:
      if($('#video3').is(":visible")){
				$('#video3').css('display','none');
				$('#ftext').css('color','#999');
			}else{
				$('#video3').css('display','block');
				$('#ftext').css('color','#fff');
			}
	    break;
      case 40:
      if($('#video4').is(":visible")){
				$('#video4').css('display','none');
				$('#w2text').css('color','#999');
			}else{
				$('#video4').css('display','block');
				$('#w2text').css('color','#fff');
			}
      break;
   }

}