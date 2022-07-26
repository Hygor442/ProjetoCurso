$(document).ready(function(){
    let navBtn = $('.nav-item');

    let bannerSection = $('#home-area');
    let classSection = $('#mainSlider');
    let teamSection = $('#team-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){
        let btnId = $(this).attr('id');
        if(btnId == 'aprovados-menu'){
            scrollTo = classSection;
        }
        else if(btnId == 'equipe-menu'){
            scrollTo = teamSection;
        }
        else if(btnId == 'local-menu'){
            scrollTo = contactSection;
        }
        else{
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
           }, 1500);
    });
});