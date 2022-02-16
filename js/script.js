// event pada saat link di klik

$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');

    //tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});


//parallax

//About
$(window).on('load',function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0 , '+ wScroll/4 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0 , '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform' : 'translate(0 , '+ wScroll +'%)'
    })

    //projects
    if (wScroll > $('.projects').offset().top - 250) {
        $('.projects .thumbnail').each(function(i){
            setTimeout(function(){
              $('.projects .thumbnail').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }
});
