  
 
  
var iframeList=document.querySelectorAll(".filter_embedquestion-iframe");
var htmlElement=`<span class="likebtn-wrapper" data-identifier="item_1"></span>
<script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
<!-- LikeBtn.com END -->`;


for (let iframe of iframeList) {


  
   
  
 
   
  /*  function createID () {
        return window.location.href.split('catid=').pop().split('&')[0]+window.location.href.split('qid=').pop().split('&')[0]
    };
    /*var id=createID();*/
    if (iframe.contentWindow.document.querySelector('.generalfeedback') !== null) {
    var correctionContainer = iframe.contentWindow.document.querySelector('.generalfeedback');
   
    correctionContainer.insertAdjacentHTML('beforeend',htmlElement);
    eval(correctionContainer.innerHTML);
   
    
}}
(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");
    
   
    
