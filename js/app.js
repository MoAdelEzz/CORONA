new WOW().init();

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

    console.log(window.scrollY)

    let minScroll = window.innerWidth > 600 ? 400 : 1000;
    let maxScroll = window.innerWidth > 600 ? 450 : 1100;


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
}
)



