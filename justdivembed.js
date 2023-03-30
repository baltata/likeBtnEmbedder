
let iframeList = document.querySelectorAll(".filter_embedquestion-iframe");
var htmlElement = "<span class="likebtn-wrapper" data-identifier="item_1"></span>";




for (let iframe of iframeList) {







  /*  function createID () {
        return window.location.href.split('catid=').pop().split('&')[0]+window.location.href.split('qid=').pop().split('&')[0]
    };
    /*var id=createID();*/
  if (iframe.contentWindow.document.querySelector('.generalfeedback') !== null) {
    var correctionContainer = iframe.contentWindow.document.querySelector('.generalfeedback');

    correctionContainer.insertAdjacentHTML('beforeend', htmlElement);
    

   
    
  


  }
}
