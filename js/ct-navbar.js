searchVisible = 0;
transparent = true;
hasTransparent = false;
let spentTime=new Date();
let remainingTime=new Date();

function displayRemainingTime(){
    let maxTime=1010;
    let startDate = new Date(2021, 02, 11);
    let msToDays=1000*60*60*24;

    let today=new Date();
    let targetDate=new Date();
    targetDate=new Date(startDate.getTime()+(maxTime*msToDays));

    remainingTime=(targetDate-today)/msToDays;
    spentTime=(today-startDate)/msToDays;
    remainingTime=Math.floor(remainingTime);
    spentTime=Math.ceil(spentTime);
    $("h1.card").html(remainingTime);
}

function navBarSearchToggle(){
    $('[data-toggle="search"]').click(function(){
        if(searchVisible == 0){
            searchVisible = 1;
            $(this).parent().addClass('active');
            $(this).children('p').html('Close');
            $('.navbar-search-form').fadeIn(function(){
                $('.navbar-search-form input').focus();
            });
        } else {
            searchVisible = 0;
            $(this).parent().removeClass('active');
            $(this).children('p').html('Search');
            $(this).blur();
            $('.navbar-search-form').fadeOut(function(){
                $('.navbar-search-form input').blur();
            });
        } 
    });
}

$(document).ready(function(){
    
    displayRemainingTime();
    $("h1.card").hover(function(){
        $("h1.card").html(spentTime).css({"text-decoration":"line-through","text-decoration-style":"wavy"});

    }, function(){
        $("h1.card").html(remainingTime).css({"text-decoration":"none","text-decoration-style":"none"});
    });

    if($('nav[role="navigation"]').hasClass('navbar-transparent')){
        hasTransparent = true;
    }
    
    navBarSearchToggle();
});

// not necessary
$(document).scroll(function() {
   if(hasTransparent){
        if( $(this).scrollTop() > 260 ) {
            if(transparent) {
                transparent = false;
                $('nav[role="navigation"]').removeClass('navbar-transparent');
            }
        } else {
            if( !transparent ) {
                transparent = true;
                $('nav[role="navigation"]').addClass('navbar-transparent');
            }
        }
    }
});













