

$(document).ready(function () {
    $("#heart").click(function () {
      if ($("#heart").hasClass("liked")) {
        $("#heart").html('<i class="fa fa-lg fa-heart-o" aria-hidden="true"></i>');
        $("#heart").removeClass("liked");
      } else {
        $("#heart").html('<i class="fa fa-lg fa-heart" aria-hidden="true"></i>');
        $("#heart").addClass("liked");
      }
    });
  });

  $(document).ready(function () {
    $("#heart-2").click(function () {
      if ($("#heart-2").hasClass("liked")) {
        $("#heart-2").html('<i class="fa fa-lg fa-heart-o" aria-hidden="true"></i>');
        $("#heart-2").removeClass("liked");
      } else {
        $("#heart-2").html('<i class="fa fa-lg fa-heart" aria-hidden="true"></i>');
        $("#heart-2").addClass("liked");
      }
    });
  });

  $(document).ready(function () {
    $("#heart-3").click(function () {
      if ($("#heart-3").hasClass("liked")) {
        $("#heart-3").html('<i class="fa fa-lg fa-heart-o" aria-hidden="true"></i>');
        $("#heart-3").removeClass("liked");
      } else {
        $("#heart-3").html('<i class="fa fa-lg fa-heart" aria-hidden="true"></i>');
        $("#heart-3").addClass("liked");
      }
    });
  });

/* from w3 schools- could not link js file, so hard coded it*/
var modal = document.getElementById("my-modal");

var img = document.getElementById("modal-pic");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

/* from w3 schools- could not link js file, so hard coded it*/
var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}