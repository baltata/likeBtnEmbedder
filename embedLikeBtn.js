  
 
  
  var correctionContainer=document.querySelector('.generalfeedback');
   
    function createID () {
        return window.location.href.split('catid=').pop().split('&')[0]+window.location.href.split('qid=').pop().split('&')[0]
    };
    var id=createID();
    var htmlElement=`<span class="likebtn-wrapper" data-identifier="${id}">`;
    



    correctionContainer.insertAdjacentHTML('beforeend',htmlElement);
    (function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");
  
