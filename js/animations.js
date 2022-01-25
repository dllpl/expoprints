var is_mobile = false;

if( $('#mobile-indicator').css('display')=='block') {
  is_mobile = true;
}

$(window).on("resize", function () {

  var is_mobile = false;

  if( $('#mobile-indicator').css('display')=='block') {
    is_mobile = true;
  }

  initParallax();

  initAnimations();

});

$(document).ready(function () {

  initParallax();

  initAnimations();

});

function initAnimations() {

  var is_mobile = false;

  if( $('#mobile-indicator').css('display')=='block') {
    is_mobile = true;
  }

  if (!is_mobile) {

    // Scenes

    var controller = new ScrollMagic.Controller();

    // Stages slider

    var stagesPicTween = TweenMax.fromTo(".stages-item", .75, {y: 100, opacity: 0}, {y: 0, opacity: 1});

    var stagesPicScene = new ScrollMagic.Scene({
      triggerElement: ".stages-slider",
      offset: -100
    })
      .setTween(stagesPicTween)
      .addTo(controller);

    var stagesDescrTween = TweenMax.fromTo(".stages-item-descr-inner", .75, {y: 100, opacity: 0}, {y: 0, opacity: 1,
      delay: .5});

    var stagesDescrScene = new ScrollMagic.Scene({
      triggerElement: ".stages-slider",
      offset: -100
    })
      .setTween(stagesDescrTween)
      .addTo(controller);

    // Stages slider END

    // Projects slider

    var projectsSliderTween = TweenMax.fromTo(".projects-slider-wrapper", 1, {x: -200, rotationY: "30deg", opacity: 0}, {x: 0, rotationY: "0deg", opacity: 1});

    var projectsSliderScene = new ScrollMagic.Scene({
      triggerElement: ".projects-wrapper",
      offset: 0
    })
      .setTween(projectsSliderTween)
      .addTo(controller);

    var projectsNavTween = TweenMax.fromTo(".projects-nav-wrapper", 1, {x: 200, rotationY: "-30deg", opacity: 0}, {x: 0, rotationY: "0deg", opacity: 1,
      delay: .5});

    var projectsNavScene = new ScrollMagic.Scene({
      triggerElement: ".projects-wrapper",
      offset: 0
    })
      .setTween(projectsNavTween)
      .addTo(controller);

    // Projects slider END

    // Custom slider

    $(".slider-wrapper").each(function (index, element) {

      var customSliderTween = TweenMax.fromTo($(element).find(".slider-l-inner"), 1, {x: -200, rotationY: "30deg", opacity: 0}, {x: 0, rotationY: "0deg", opacity: 1});

      var customSliderScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".slider-wrapper"),
        offset: 0
      })
        .setTween(customSliderTween)
        .addTo(controller);

      var customFormTween = TweenMax.fromTo($(element).find(".slider-r-inner"), 1, {x: 200, rotationY: "-30deg", opacity: 0}, {x: 0, rotationY: "0deg", opacity: 1, delay: .5});

      var customFormScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".slider-wrapper"),
        offset: 0
      })
        .setTween(customFormTween)
        .addTo(controller);

    });

    // Custom slider END

    // Pros

    $(".pros-tmb").each(function (index, element) {

      var prosTmbPicTween = TweenMax.fromTo($(element).find(".pros-tmb-pic"), .5, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease:Linear.ease, delay: $(element).closest(".col-12").prevAll().length * .5});

      var prosTmbPicScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -$(window).height()/2 + $(element).closest(".pros-list").outerHeight() - 400
      })
        .setTween(prosTmbPicTween)
        .addTo(controller);

      var prosTmbHeaderTween = TweenMax.fromTo($(element).find(".h3"), .5, {y: 20, opacity: 0}, {y: 0, opacity: 1, ease:Linear.ease, delay: .25 + $(element).closest(".col-12").prevAll().length * .5});

      var prosTmbHeaderScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".pros-list"),
        offset: -$(window).height()/2 + $(element).closest(".pros-list").outerHeight() - 400
      })
        .setTween(prosTmbHeaderTween)
        .addTo(controller);

      

    });
    
    // Pros END
    
    // Clients

    $(".client-tmb").each(function (index, element) {

      var clientTmbPicTween = TweenMax.fromTo($(element).find(".client-tmb-pic"), .5, {y: 30, opacity: 0}, {y: 0, opacity: 1, ease:Linear.ease, delay: $(element).data("index") * .5});

      var clientTmbPicScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".container"),
        offset: -$(window).height()/2 + $(element).closest(".container").outerHeight() - 400
      })
        .setTween(clientTmbPicTween)
        .addTo(controller);

    });

    var clientSupTtlTween = TweenMax.fromTo($(".section-clients-sup-ttl"), 1, {x: -100, opacity: 0}, {x: 0, opacity: 1, ease:Linear.ease});

    var clientSupTtlScene = new ScrollMagic.Scene({
      triggerElement: ".section-clients .container",
      offset: -$(window).height()/2 + $(".section-clients-sup-ttl").closest(".container").outerHeight() - 400
    })
      .setTween(clientSupTtlTween)
      .addTo(controller);

    var clientTtlTween = TweenMax.fromTo($(".section-clients-ttl"), 1, {x: 100, opacity: 0}, {x: 0, opacity: 1, ease:Linear.ease, delay: .75});

    var clientTtlScene = new ScrollMagic.Scene({
      triggerElement: ".section-clients .container",
      offset: -$(window).height()/2 + $(".section-clients-ttl").closest(".container").outerHeight() - 400
    })
      .setTween(clientTtlTween)
      .addTo(controller);
    
    // Clients END

    // Service tmb

    $(".service-tmb").each(function (index, element) {

      var serviceLetterTween = TweenMax.fromTo($(element).find(".service-tmb-inner > .service-tmb-letter"), .75, {scale: .5, opacity: 0}, {scale: 1, opacity: 1, ease:Linear.ease, delay: $(element).closest(".col-12").prevAll().length * .75});

      var serviceLetterScene = new ScrollMagic.Scene({
        triggerElement: element.closest(".services-list"),
        offset: -$(window).height()/2 + $(element).closest(".services-list").outerHeight() - 100
      })
        .setTween(serviceLetterTween)
        .addTo(controller);

    });

    // Service tmb END

    // Team

    $(".slide:nth-child(-n+3) .team-tmb").each(function (index, element) {

      var teamPicTween = TweenMax.fromTo($(element).find(".team-tmb-pic"), .75, {y: 100, opacity: 0}, {y: 0, opacity: 1, ease:Linear.ease, delay: $(element).closest(".slide").prevAll().length * .5});

      var teamPicScene = new ScrollMagic.Scene({
        triggerElement: ".team-slider-wrapper",
        offset: -300
      })
        .setTween(teamPicTween)
        .addTo(controller);

      var teamDescrTween = TweenMax.fromTo($(element).find(".team-tmb-descr"), .75, {y: 100, opacity: 0}, {y: 0, opacity: 1, ease:Linear.ease, delay: .3 + $(element).closest(".slide").prevAll().length * .5});

      var teamDescrScene = new ScrollMagic.Scene({
        triggerElement: ".team-slider-wrapper",
        offset: -300
      })
        .setTween(teamDescrTween)
        .addTo(controller);

    });

    // Team END




  }

}



$(document).ready(function () {

  headersReveal();

});

$(window).on("resize", function () {

  headersReveal();

});

function initParallax() {

  $(window).on("scroll", function () {

    $(".top-circle").prlxRotate(".section-top",200,-200);
    $(".preview-circle").prlxRotate(".section-preview",200,-200);
    $(".reviews-circle").prlxRotate(".section-reviews",200,-200);
    $(".form-circle").prlxRotate(".slider-wrapper-alt",200,-200);

    $(".top-form").prlx(".section-top",100,-100);

    $(".preview-pic-back").prlx(".section-preview",50,-50);
    $(".preview-pic-middle").prlx(".section-preview",110,-110);
    $(".preview-pic-front").prlx(".section-preview",170,-170);

  });

}


function  headersReveal() {

  if (!is_mobile) {

    var controller2 = new ScrollMagic.Controller();

    $.each( $("h2, .h2, h3, .h3"), function( index, element ) {

      $(element).find(".revealing").each(function () {

        var revealingElement = $(this);

        var revealingMaskTween1 = new TweenMax.to(revealingElement.find(".revealing-mask"), .4, {
          right: 0,
          delay: .4 * revealingElement.prevAll(".revealing").length
        });

        var revealingMaskTween2 = new TweenMax.to(revealingElement.find(".revealing-mask"), .4, {
          left: "100%",
          delay:.4 + .4 * revealingElement.prevAll(".revealing").length
        });

        var revealingContentTween = new TweenMax.to(revealingElement.find(".revealing-content"), 0, {
          opacity:1,
          delay:.4 + .4 * revealingElement.prevAll(".revealing").length
        });

        var revealingMaskScene1 = new ScrollMagic.Scene({triggerElement: element, reverse: false})
          .offset(-300)
          .setTween(revealingMaskTween1)
          .addTo(controller2);

        var revealingMaskScene2 = new ScrollMagic.Scene({triggerElement: element, reverse: false})
          .offset(-300)
          .setTween(revealingMaskTween2)
          .addTo(controller2);

        var revealingContentScene = new ScrollMagic.Scene({triggerElement: element, reverse: false})
          .offset(-300)
          .setTween(revealingContentTween)
          .addTo(controller2);

      });



    });

  }

}

(function( $ ) {
  $.fn.prlx = function(pTrigger, yStart, yFinish) {

    var is_mobile = false;

    if( $('#mobile-indicator').css('display')=='block') {
      is_mobile = true;
    }

    if (!is_mobile) {

      var obj = $(this);

      var yPos;

      if ($(window).scrollTop() < $(pTrigger).offset().top - $(window).height()) {

        yPos = "start";

      } else if ($(window).scrollTop() > $(pTrigger).offset().top + $(window).height()) {

        yPos = "finish";

      } else {

        var percentOffset = ($(pTrigger).offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

        var yRange = Math.abs(yStart - yFinish),
            posInRange = yRange * percentOffset,
            yPos = posInRange + yFinish;

      }

      TweenMax.to(obj, .7, {y: yPos, ease:Linear.ease});

    }

  };
})( jQuery );

(function( $ ) {
  $.fn.prlxRotate = function(pTrigger, yStart, yFinish) {

    var is_mobile = false;

    if( $('#mobile-indicator').css('display')=='block') {
      is_mobile = true;
    }

    if (!is_mobile) {

      var obj = $(this);

      var yPos;

      if ($(window).scrollTop() < $(pTrigger).offset().top - $(window).height()) {

        yPos = "start";

      } else if ($(window).scrollTop() > $(pTrigger).offset().top + $(window).height()) {

        yPos = "finish";

      } else {

        var percentOffset = ($(pTrigger).offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

        var yRange = Math.abs(yStart - yFinish),
          posInRange = yRange * percentOffset,
          yPos = posInRange + yFinish,
          rotateAngle = yPos*.5;

      }

      TweenMax.to(obj, .7, {rotation: rotateAngle, ease:Linear.ease});

    }

  };
})( jQuery );