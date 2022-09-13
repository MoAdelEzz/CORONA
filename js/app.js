new WOW().init();

var scroll = new SmoothScroll('a[href*="#"]');

$('.funnytext').funnyText({
    speed: 500,
    borderColor: 'black',
    activeColor: 'red',
    color: '#50658E',
    fontSize: 'inherit',
    direction: 'both'
});

$('.AboutHeader').funnyText({
    speed: 500,
    borderColor: 'none',
    activeColor: '#064590',
    color: '#064590',
    fontSize: 'inherit',
    direction: 'both'
});

$('.FunnyHeader').funnyText({
    speed: 500,
    borderColor: 'none',
    activeColor: '#064590',
    color: '#064590',
    fontSize: 'inherit',
    direction: 'both'
});




MoA_AutoTyping($('#Section-1 .auto_Type'), ['The coronavirus (COVID-19) was first reported|','in Wuhan,hubei, china in december 2019|','the outbreak was later recognized as a pandemic|', 'by the World Health organization (WHO) on 11 march 2020.|'], {speed: 50})

countUp
(
$('.counter-1')
, 
{
    'speed' : 0,
    'increament' : 546510,
    'startValue' : 600000000,
}
);
countUp
(
$('.counter-2')
, 
{
    'speed' : 0,
    'increament' : 546510,
    'startValue' : 158584500,
}
);
countUp
(
$('.counter-3')
, 
{
    'speed' : 0,
    'increament' : 54650,
    'startValue' : 46016509,
}
);

let executed = false;

$(document).scroll( ()=>
{

    let minScroll = window.innerWidth > 600 ? 200 : 1000;
    let maxScroll = window.innerWidth > 600 ? 250 : 1100;

    if (window.innerWidth > 800)
    {

    if (window.scrollY > 50)
    {
        $('.navbarWrapper').css({'background-color': 'white'});
    }
    else
    {
        $('.navbarWrapper').css({'background-color': 'transparent'});
    }
    }

    if (window.scrollY > minScroll && window.screenY < maxScroll && !executed)
    {

        $('#FadeDownEffect').css({'height' : '0px'});

        $('#FadeDownEffect').animate
        (
            {
                height : '100%'
            },
            5000
        )
        executed = true;
    }


    if (window.scrollY >= 750)
    {
        $('.TopButton').css({'opacity' : '1'});
    }
    else
    {
        $('.TopButton').css('opacity','0');
    }

}
);

let prevResolution = window.innerWidth;

window.onresize = ()=>
{
    let currResolution = window.innerWidth;

    if (currResolution > 760 && prevResolution <= 760)
    {
        window.location.reload();
    }

    if (currResolution <= 760 && prevResolution > 760)
    {
        window.location.reload();
    }
}



let nice = $("body").niceScroll();
console.log(nice);

$('.TopButton').click(
()=>
{
   nice.doScrollTop(0, 2000); // Scroll Y Axis
}
)


$('.tableContent').niceScroll();

