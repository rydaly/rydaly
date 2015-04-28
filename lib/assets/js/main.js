window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

window.tabletcheck = function() {
  var check = false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { check = true; }
  return check;
};

// animation selectors
var logo = $( '.logo' ),
    groupRight = $( '.right' ),
    groupLeft = $( '.left' ),
    bl = $( '.bl' ),
    br = $( '.br' ),
    ul = $( '.ul' ),
    ur = $( '.ur' ),
    circ = $( '.circ' ),
    downArrow = $( '.down-arrow' ),
    cover = $( '.site-cover' ),

    // svg selectors - logo
    p1 = document.querySelector( '.p1' ),
    p2 = document.querySelector( '.p2' ),
    p3 = document.querySelector( '.p3' ),
    p4 = document.querySelector( '.p4' ),
    p5 = document.querySelector( '.p5' ),
    p6 = document.querySelector( '.p6' ),
    paths = [ p6, p5, p3, p1, p4, p2 ],

    // svg selectors - text
    hello = $( '.about-intro' ),
    more = $( '.about-more' ),
    buildInternet = $( '.bi' ),
    makeThingsMove = $( '.mtm' ),
    createExperiences = $( '.ce' ),
    designThings = $( '.dt' ),
    solveProblems = $( '.sp' ),

    scene = document.getElementById('parallax-content'),
    logoParallax = new Parallax(scene, {
      scalarX: 10,
      scalarY: 25,
      limitX: 30,
      limitY: 30
    });

function shuffle( array ) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while ( 0 !== currentIndex ) {

    // Pick a remaining element...
    randomIndex = Math.floor( Math.random() * currentIndex );
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function animateLines( $direction, $duration ) 
{
  shuffle( paths );

  if( $direction === 'in' ) 
  {
    for( var i = 0; i < paths.length; i++ ) 
    {
      var lengthIn = paths[i].getTotalLength();
      paths[i].style.strokeDasharray = lengthIn + ' ' + lengthIn;
      paths[i].style.strokeDashoffset = lengthIn;
      paths[i].style.opacity = 0;
      paths[i].getBoundingClientRect();
      TweenMax.to( paths[i], $duration, { css:{ strokeDashoffset:0, opacity:0.75 }, ease:Power2.easeOut, delay:($duration*0.17) + (i/7), overwrite:"all" } );
    }
  } 
  else 
  {
    for( var j = 0; j < paths.length; j++ ) 
    {
      var lengthOut = paths[j].getTotalLength();
      paths[j].style.strokeDasharray = lengthOut + ' ' + lengthOut;
      paths[j].style.strokeDashoffset = 0;
      paths[j].getBoundingClientRect();
      TweenMax.to( paths[j], $duration, { css:{ strokeDashoffset:lengthOut, opacity:0 }, ease:Power2.easeOut, delay:j/20, overwrite:"all" } );
    }
  }
}

function parallax()
{
  if( $( "#parallax-window" ).length > 0 ) 
  {
    var plxWindow = $( "#parallax-window" );
    var plxContent = $( ".parallax-content" );
    var plxWindowTopToPageTop = $( plxWindow ).offset().top;
    var windowTopToPageTop = $( window ).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
    var plxSpeed = 0.1;

    plxContent.css( 'top', - ( plxWindowTopToWindowTop * plxSpeed ) + 'px' );

    if( plxWindowTopToWindowTop <= -500 ) {
      master.pause();
      downArrow.remove();
    } else {
      master.play();
    }
  }
}

// function initLogoHover() {
//   logo.mouseenter( function() {
//     logoOver( 1.2 );
//   }).mouseleave( function() {
//     logoOut( 0.5 );
//   });
// }

// logo hover
// var logoOver = function( duration ) 
// {
//   TweenMax.delayedCall( 0, animateLines, [ 'in', duration ] );
//   //
//   TweenMax.to( bl, duration, { x:0, y:0, ease:Quint.easeOut, delay:0, overwrite:"all" } );
//   TweenMax.to( br, duration, { x:0, y:0, ease:Quint.easeOut, delay:0, overwrite:"all" } );
//   TweenMax.to( ul, duration, { x:0, y:0, ease:Quint.easeOut, delay:0, overwrite:"all" } );
//   TweenMax.to( ur, duration, { x:0, y:0, ease:Quint.easeOut, delay:0, overwrite:"all" } );
//   //
//   TweenMax.to( groupLeft, duration, { x:0, y:0, ease:Quint.easeOut, delay:0, overwrite:"all" } );
//   TweenMax.to( groupRight, duration, { x:0, y:0, ease:Quint.easeOut, delay:0, overwrite:"all" } );
// };

// var logoOut = function( duration ) 
// {
//   animateLines( 'out', duration );
//   //  
//   TweenMax.to( bl, duration, { x:15, y:-35, ease:Bounce.easeOut, delay:duration, overwrite:"all" } );
//   TweenMax.to( br, duration, { x:-15, y:-34, ease:Bounce.easeOut, delay:duration, overwrite:"all" } );
//   TweenMax.to( ul, duration, { x:15, y:34, ease:Bounce.easeOut, delay:duration, overwrite:"all" } );
//   TweenMax.to( ur, duration, { x:-15, y:35, ease:Bounce.easeOut, delay:duration, overwrite:"all" } );
//   //
//   TweenMax.to( circ, duration * 1.5, { scale:0.35, transformOrigin:"center center", ease:Back.easeIn, delay:0, overwrite:"all" } );
//   TweenMax.to( circ, duration * 1.5, { scale:1, transformOrigin:"center center", ease:Back.easeOut, delay:duration * 1.5 } );
//   //
//   TweenMax.to( groupLeft, duration, { x:0, y:-17, ease:Quint.easeOut, delay:duration, overwrite:"all" } );
//   TweenMax.to( groupRight, duration, { x:0, y:18, ease:Quint.easeOut, delay:duration, overwrite:"all" } );
// };

// Get all paths from an SVG element so we can animate it
var animatePaths = function( svgObj, direction ) {
  if ( direction === 'in' ) {
    for ( var i = 0; i < svgObj.find('path').length; i++ ) {
      var pathIn = svgObj.find('path')[i];
      var lengthIn = pathIn.getTotalLength();
      pathIn.style.strokeDasharray = lengthIn + ' ' + lengthIn;
      pathIn.style.strokeDashoffset = lengthIn;
      pathIn.style.opacity = 0;
      pathIn.getBoundingClientRect();
      TweenMax.to( pathIn, 2, { css:{ strokeDashoffset:0, opacity:1 }, ease:Power2.easeOut, delay:i/10, overwrite:"all" } );
    }
  } else {
    for( var j = 0; j < svgObj.find('path').length; j++ ) {
      var pathOut = svgObj.find('path')[j];
      var lengthOut = pathOut.getTotalLength();
      pathOut.style.strokeDasharray = lengthOut + ' ' + lengthOut;
      pathOut.style.strokeDashoffset = 0;
      pathOut.getBoundingClientRect();
      TweenMax.to( pathOut, 2, { css:{ strokeDashoffset:lengthOut, opacity:0 }, ease:Power1.easeOut, delay:j/10, overwrite:"all" } );
    }
  }
};

function logo01() {
  // logo init and slam together
  var tl = new TimelineLite(),
      dur = 0.5,
      del = 1;

  // init visibility
  tl.set( bl, { x:0, y:-54 } );
  tl.set( br, { x:0, y:-55 } );
  tl.set( ul, { x:0, y:55 } );
  tl.set( ur, { x:0, y:54 } );
  tl.set( circ, { scale:0 } );

  tl.set( logo, { autoAlpha:1 }, 0.25 );
  //
  tl.to( bl, dur, { autoAlpha:1, ease:Quint.easeIn }, del );
  tl.from( bl, dur, { x:15, y:254, ease:Quint.easeIn }, del );
  //
  tl.to( br, dur, { autoAlpha:1, ease:Quint.easeIn }, del );
  tl.from( br, dur, { x:215, y:-55, ease:Quint.easeIn }, del );
  //
  tl.to( ul, dur, { autoAlpha:1, ease:Quint.easeIn }, del );
  tl.from( ul, dur, { x:-215, y:55, ease:Quint.easeIn }, del );
  //
  tl.to( ur, dur, { autoAlpha:1, ease:Quint.easeIn }, del );
  tl.from( ur, dur, { x:-15, y:-254, ease:Quint.easeIn }, del );
  //
  tl.to( circ, 0.65, { scale:1, transformOrigin:"center center", ease:Back.easeOut }, dur + del );
  //
  return tl;
}

function logo02() {
  // logo outward expansion
  var tl = new TimelineLite(),
      dur = 2;

  tl.call( animateLines, [ 'in', dur ] );
  //
  tl.to( bl, dur, { x:0, y:0, ease:Quint.easeOut }, 0 );
  tl.to( br, dur, { x:0, y:0, ease:Quint.easeOut }, 0 );
  tl.to( ul, dur, { x:0, y:0, ease:Quint.easeOut }, 0 );
  tl.to( ur, dur, { x:0, y:0, ease:Quint.easeOut }, 0 );
  //
  tl.to( groupLeft, dur, { x:0, y:0, ease:Quint.easeOut }, 0 );
  tl.to( groupRight, dur, { x:0, y:0, ease:Quint.easeOut }, 0 );
  //
  return tl;
}

function logo03() {
  // logo contraction
  var tl = new TimelineLite(),
      dur = 0.5;

  tl.call( animateLines, [ 'out', dur ] );
  //
  tl.to( bl, dur, { x:15, y:-35, ease:Bounce.easeOut }, dur );
  tl.to( br, dur, { x:-15, y:-34, ease:Bounce.easeOut }, dur );
  tl.to( ul, dur, { x:15, y:34, ease:Bounce.easeOut }, dur );
  tl.to( ur, dur, { x:-15, y:35, ease:Bounce.easeOut }, dur );
  //
  tl.to( circ, dur * 1.5, { scale:0.35, transformOrigin:"center center", ease:Back.easeIn }, 0 );
  tl.to( circ, dur * 1.5, { scale:1, transformOrigin:"center center", ease:Back.easeOut }, dur * 1.5 );
  //
  tl.to( groupLeft, dur, { x:0, y:-17, ease:Quint.easeOut }, dur );
  tl.to( groupRight, dur, { x:0, y:18, ease:Quint.easeOut }, dur );
  //
  tl.call( showLogoParallax );
  //
  return tl;
}

function showLogoParallax() {
  TweenMax.to( $( '.logo2' ), 1, { autoAlpha:0.8 } );
}

function textLoop() {
  var tl = new TimelineMax({ repeat:-1, repeatDelay:1 }),
      stagger = '+=4';

  tl.call( animatePaths, [ buildInternet, 'out' ], this, stagger );
  //
  tl.set( makeThingsMove, { css:{ opacity:1 } }, "+=1" );
  tl.call( animatePaths, [ makeThingsMove, 'in' ], this,  "+=0" );
  tl.call( animatePaths, [ makeThingsMove, 'out' ], this, stagger );
  //
  tl.set( createExperiences, { css:{ opacity:1 } }, "+=1" );
  tl.call( animatePaths, [ createExperiences, 'in' ], this,  "+=0" );
  tl.call( animatePaths, [ createExperiences, 'out' ], this, stagger );
  //
  tl.set( designThings, { css:{ opacity:1 } }, "+=1" );
  tl.call( animatePaths, [ designThings, 'in' ], this,  "+=0" );
  tl.call( animatePaths, [ designThings, 'out' ], this, stagger );
  //
  tl.set( solveProblems, { css:{ opacity:1 } }, "+=1" );
  tl.call( animatePaths, [ solveProblems, 'in' ], this,  "+=0" );
  tl.call( animatePaths, [ solveProblems, 'out' ], this, stagger );
  //
  tl.set( buildInternet, { css:{ opacity:1 } }, "+=1" );
  tl.call( animatePaths, [ buildInternet, 'in' ], this, "+=0" );
  //
  return tl;
}

////

$( document ).ready( function() {
  // Master Timeline
  var master = new TimelineMax( { delay:0, paused:true } );
   
  $('.primary').css('height', window.innerHeight); 
  TweenMax.to( cover, 0.5, { autoAlpha:0 } );
  TweenMax.to( hello, 1.5, { autoAlpha:1, delay:0 } );
  TweenMax.to( buildInternet, 1.5, { autoAlpha:1, delay:0.5 } );
  TweenMax.to( more, 1.5, { autoAlpha:1, delay:1 } );

  if( window.mobilecheck() ) {
    TweenMax.to( logo, 1.5, { autoAlpha:1 } );
    master.add( textLoop(), 1 );
    showLogoParallax();
    $('.flash').css('display', 'none');
  } else {
    $( 'body' ).removeClass( 'mobile' );
    master.add( logo01() )
          .add( textLoop(), 1 )
          .add( logo02(), 1.5 )
          .add( logo03(), 5 );
  }

  // logo and type animation
  master.play();

  // modals 
  $(function() {
    $(".flex-box").on("click", function() {
      $("html").addClass("modal-open");
      master.pause();
    });
    $(".close").on("click", function() {
      $("html").removeClass("modal-open");
      parallax();
    });
  });

  // youtube embed resets on modal close
  $( '.yt-embed' ).each( function() {
    var source = $( this ).attr( 'src' );
    var closeBtn = $( this ).parent().parent().parent().parent().parent().parent().find( '.close' );
    var that = $( this );
    
    closeBtn.on('click touchstart', function () {
      that.attr( 'src', '' );
      that.attr( 'src', source );         
    });
  });

  // scrolling behaviors
  // addFadeIn( 'body', '.secondary' );
  // addFadeIn( '#fc-modal > div', '.modal-content' );
  // addFadeIn( '#clpj-modal > div', '.modal-content' );
  // addFadeIn( '#moto-modal > div', '.modal-content' );
  // addFadeIn( '#bb-modal > div', '.modal-content' );
  // addFadeIn( '#samsung-modal > div', '.modal-content' );

  // parallax
  $( "body" ).scroll( function() {
    if ( $( "#parallax-window" ).length ) {
      parallax();
    }
  });

  // resize behavior
  if( !window.mobilecheck() ) {
    $( window ).resize(function() {
      $('.primary').css('height', window.innerHeight);
    });
  } else {
    checkOrientation();
  }
});

// check screen orientation for mobile
function checkOrientation() {
  if( window.innerHeight > window.innerWidth ) {
    $('.primary').css('height', window.innerHeight);  
  } else {
    $('.parallax-window').css('height', '200%');
    $('.primary').css('height', '200%');
  }
}

// fade-ins
// function addFadeIn( scrollobj, fadeselector ) {
//   var fadeElements = $(scrollobj).find(fadeselector).find(".js-fade-element");
//   fadeElements.each( function() {
//     $(this).addClass( "js-fade-element-hide" );
//   });

//   $( scrollobj ).scroll( function() {
    // console.log( ' ####################################### ' );
    // fadeElements.each( function() {
    //   var elementTopToPageTop = $(this).offset().top;
    //   var windowTopToPageTop = $("body").scrollTop();
    //   var windowInnerHeight = window.innerHeight;
    //   var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
    //   var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
    //   var distanceFromBottomToAppear = 100;

      // console.log( 'el top to page top :: ' + elementTopToPageTop );
      // console.log( 'div top to page top :: ' + windowTopToPageTop );
      // console.log( 'window inner height :: ' + windowInnerHeight );
      // console.log( 'el top to div top :: ' + elementTopToWindowTop );
      // console.log( 'el top to div bottom :: ' + elementTopToWindowBottom );
      // console.log( ' --------------------------------------- ' );

  //     if(elementTopToWindowBottom > distanceFromBottomToAppear) {
  //       $(this).addClass('js-fade-element-show');
  //     }
  //     else if(elementTopToWindowBottom < 0) {
  //       $(this).removeClass('js-fade-element-show');
  //       $(this).addClass('js-fade-element-hide');
  //     }
  //   });
  // });
// }