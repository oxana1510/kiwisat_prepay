//menu
(function() {
  // "use strict";
  var toggles = document.querySelectorAll(".mobail-menu");
  var mobclose = document.querySelectorAll(".menu li a");
  var close = document.querySelector(".mobail-menu");
  var elMenu = document.querySelector(".menu");
  
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      var elMenu = document.querySelector(".menu");
       elMenu.classList.toggle("responsive");
    });
  }

  for (var j = 0; j < mobclose.length; j++) {

    mobclose[j].addEventListener("click", function () { 
      close.classList.remove("is-active");
      elMenu.classList.remove("responsive");
    });
  };
})();




//languages
var languages = {
  en: 'English',
  es: 'Espanol',
};

var DEFAULT_LANGUAGE = 'es';

var menuElem = document.getElementById('dropdown-menu');
var titleElem = menuElem.querySelector('.title');

// Set currently selected value (English in our case)
function selectOption(optionName) {
  titleElem.dataset.language = optionName
  titleElem.innerText = languages[optionName]
  titleElem.setAttribute("style", "background: url(img/flag_"+optionName+".png) no-repeat left center;background-size: 23px 18px;");
}
selectOption(DEFAULT_LANGUAGE)

// Handle dropdown opening
titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};

// Handle selecting new language
var optionsHolter = menuElem.querySelector('ul')
optionsHolter.onclick = function (event) {
  menuElem.classList.remove('open');
  console.log(event.target.dataset.language)
  if (event.target.dataset && event.target.dataset.language) {
      selectOption(event.target.dataset.language)
  }
}

//tabs
$(document).ready(function () {

  $('.panel-heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel-heading').not(this).removeClass('in').next().slideUp();
      });

});

//backbround random
// when document is loaded
$(document).ready(function () {

  // set classes
  var classes     = new Array ('bg1', 'bg2', 'bg3');
  
  // calculate length once, as this will never change
  var length      = classes.length;
  
  // select all a-tags
  var links       = $('.internet-free');
  
  // loop through all a-tags and apply color randomly
  $.each( links, function(key, value) {
    // get random value/class-name from array and add it using the addClass function
    $(value).addClass( classes[ Math.floor ( Math.random() * length ) ] );
  });
  
  });