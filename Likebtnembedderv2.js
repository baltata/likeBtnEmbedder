var correctionContainer=document.querySelector('.generalfeedback');
var htmlElement='<span class="likebtn-wrapper" data-identifier="item_1">';
function createID () {
    return window.location.href.split('catid=').pop().split('&')[0]+window.location.href.split('qid=').pop().split('&')[0]
};
var id=createID();
console.log(id);



correctionContainer.insertAdjacentHTML('beforeend',htmlElement);
(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");
