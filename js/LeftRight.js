jQuery(document).ready(function ($) {

    var slideCount = $('#slider #ul li').length;
    var slideWidth = $(window).width()*0.644;
    var slideHeight = $(window).height()*0.794;
    var sliderUlWidth = slideCount * slideWidth;
    var checktrue;
    var limenupadding = ($(window).height()*0.01264)+'%';

    $('#h1').text('Animacion de dia y noche');
    $('.slider_option').hide();
    $('.divmenu #ulmenu #limenu').css({ padding: limenupadding });
    $('#slider').css({ width: slideWidth, height: slideHeight });
    $('#slider #ul').css({ width: slideWidth,  height: slideHeight });
    $('#slider #ul li').css({ width: slideWidth, height: slideHeight });

    $('#slider #ul li:first-child').prependTo('#slider #ul');

    function moveLeft() {
      $('#slider ul').animate({
          left: + slideWidth
      }, 200, function () {
          $('#slider #ul li:last-child').prependTo('#slider #ul');
          $('#slider #ul').css('left', '');
      });
      $('video').each(function(){
        this.pause();
        this.currentTime = 0;
      });
    };

    function moveRight() {
      $('#slider #ul').animate({
          left: - slideWidth
      }, 200, function () {
          $('#slider #ul li:first-child').appendTo('#slider #ul');
          $('#slider #ul').css('left', '');
      });
      $('video').each(function(){
        this.pause();
        this.currentTime = 0;
      });
    };
    function loadAnimacion(){
      $('.slider_option').hide();
      $('#ul').empty();
      $('<svg id="carro1"><polyline  points="50 40,45 60,65 75,90 80,120 82,240 82,280 75,295 70,300 50,220 41,180 25,115 30,65 40,49 40"></polyline></svg><svg id="ventana1"><polyline  points="220 41,180 25,115 30,115 40,220 41"></polyline></svg><svg id="carro2"><polyline  points="50 40,45 60,65 75,90 80,120 82,240 82,280 75,295 70,300 50,220 41,180 25,115 30,65 40,49 40"></polyline></svg><svg id="ventana2"><polyline  points="220 41,180 25,115 30,115 40,220 41"></polyline></svg><svg id="llanta1" viewBox="0 0 10 10" ><circle cx="5" cy="5" r="4"/></svg><svg id="llanta2" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg><svg id="llanta3" viewBox="0 0 10 10" ><circle cx="5" cy="5" r="4"/></svg><svg id="llanta4" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg><svg id="linea1"><line x1="0" y1="11" x2="200" y2="11"  /></svg><svg id="linea2"><line x1="0" y1="11" x2="200" y2="11"  /></svg><svg id="solluna" viewBox="0 0 10 10" ><circle cx="5" cy="5" r="4"/></svg><svg id="carretera"><rect width="100" height="100"  /></svg><svg id="cielo"><rect width="100" height="100"  /></svg><svg id="nubeiz1"><ellipse  cx="50" cy="40" rx="50" ry="30" /></svg><svg id="nubedr1"><ellipse  cx="50" cy="40" rx="50" ry="30" /></svg><svg id="nubece1" viewBox="0 0 10 10"><circle  cx="5" cy="5" r="4" /></svg><svg id="nubeiz2"><ellipse  cx="50" cy="40" rx="50" ry="30" /></svg><svg id="nubedr2"><ellipse  cx="50" cy="40" rx="50" ry="30" /></svg><svg id="nubece2" viewBox="0 0 10 10"><circle  cx="5" cy="5" r="4" /></svg>').appendTo('#ul');
      $('#h1').text('Animacion de dia y noche');
    }
    function loadL1(){
      $('#ul').empty();
      for ( var i=1;i<=5;i++ ) {
        $("<li><img src='img/Lab1/"+i+".png' alt='Proyecto'></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 1');
      $('.slider_option').show();
    };
    function loadL2(){
      $('#ul').empty();
      for ( var i=1;i<=15;i++ ) {
        $("<li><img src='img/Lab2/"+i+".png' alt='Proyecto'></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 2');
      $('.slider_option').show();
    };
    function loadL3(){
      $('#ul').empty();
      for ( var i=1;i<=2;i++ ) {
        $("<li><img src='img/Lab3/"+i+".png' alt='Proyecto'></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 3');
      $('.slider_option').show();
    };
    function loadL4(){
      $('#ul').empty();
      for ( var i=1;i<=3;i++ ) {
        $("<li><img src='img/Lab4/"+i+".png' alt='Proyecto'></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 4');
      $('.slider_option').show();
    };
    function loadL5(){
      $('#ul').empty();
      for ( var i=1;i<=4;i++ ) {
        $("<li><video controls><source src='img/Lab5/"+i+".wav'></video></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 5');
      $('.slider_option').hide();
    };
    function loadL6(){
      $('#ul').empty();
      $("<li><video controls><source src='img/Lab6/1.mp4'type='video/mp4'></video></li>").appendTo('#ul');
      $('#h1').text('Laboratorio 6');
      $('.slider_option').hide();
    };
    function loadL7(){
      $('#ul').empty();
      $("<li><video controls><source src='img/Lab7/1.mp4'type='video/mp4'></video></li>").appendTo('#ul');
      $('#h1').text('Laboratorio 7');
      $('.slider_option').hide();
    };
    function loadL8(){
      $('#ul').empty();
      $("<li><video controls><source src='img/Lab8/1.mp4'type='video/mp4'></video></li>").appendTo('#ul');
      $('#h1').text('Laboratorio 8');
      $('.slider_option').hide();
    };
    function loadL9(){
      $('#ul').empty();
      for ( var i=1;i<=10;i++ ) {
        $("<li><img src='img/Lab9/"+i+".png' alt='Proyecto'></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 9');
      $('.slider_option').show();
    };
    function loadL10(){
      $('#ul').empty();
      for ( var i=1;i<=3;i++ ) {
        $("<li><img src='img/Lab10/"+i+".png' alt='Proyecto'></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 10');
      $('.slider_option').show();
    };
    function loadL11(){
      $('#ul').empty();
      for ( var i=1;i<=7;i++ ) {
        $("<li><img src='img/Lab11/"+i+".png' alt='Proyecto'></li>").appendTo('#ul');
      }
      $('#h1').text('Laboratorio 10');
      $('.slider_option').show();
    };
    function loadP1(){
      $('#ul').empty();
      $("<li><img src='img/Parcial 1/1.png' alt='Proyecto'></li>").appendTo('#ul');
      $('#h1').text('Laboratorio 10');
      $('.slider_option').hide();
    };
    function loadP2(){
      $('#ul').empty();
      $("<li><video controls><source src='img/Parcial 2/1.webm'type='video/webm'></video></li>").appendTo('#ul');
      $('#h1').text('Parcial 2');
      $('.slider_option').hide();
    };
    $('#Animacio').click(function () {
        loadAnimacion();
    });
    $('#Laboratorio_1').click(function () {
        loadL1();
    });

    $('#Laboratorio_2').click(function () {
        loadL2();
    });

    $('#Laboratorio_3').click(function () {
        loadL3();
    });

    $('#Laboratorio_4').click(function () {
        loadL4();
    });

    $('#Laboratorio_5').click(function () {
        loadL5();
    });

    $('#Laboratorio_6').click(function () {
        loadL6();
    });

    $('#Laboratorio_7').click(function () {
        loadL7();
    });

    $('#Laboratorio_8').click(function () {
        loadL8();
    });
    $('#Laboratorio_9').click(function () {
        loadL9();
    });
    $('#Laboratorio_10').click(function () {
        loadL10();
    });
    $('#Laboratorio_11').click(function () {
        loadL11();
    });
    $('#Parcial_1').click(function () {
        loadP1();
    });
    $('#Parcial_2').click(function () {
        loadP2();
    });
    $('a.control_prev').click(function () {
        moveLeft();
    });
    $('a.control_next').click(function () {
        moveRight();
    });

    $('#checkbox').change(function(){
      if($(this).prop("checked")){
        checktrue = setInterval(moveRight, 3000);
        console.log("Checkbox is checked.");
      }else if(!$(this).prop("checked")){
        clearInterval(checktrue);
        console.log("Checkbox is unchecked.");
      }
   });
});
