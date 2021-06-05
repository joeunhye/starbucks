// 고정 뱃지
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //뱃지 숨기기
        gsap.to(badgeEl, .6, { 
            opacity:0,
            display: 'none'
        }); 

        //버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    }else {
        //뱃지 보이기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display : 'block'
        });

        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));

//_.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션);

//move to top
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    })
});

//비쥬얼 영역 인터랙션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * .7, //0.7s, 1.4s, 2.1s, 2.7s
        opacity : 1
    });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay : true,
    loop : true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop : true,
    autoplay : {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay:true,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion //요소의 상태값을 지속적으로 반대값으로 설정해주는 역할
    if(isHidePromotion) {
        //숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

  
function floatingObj(selector, delay, size) {
    //gsap.to(el, time, option);
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, //무한반복
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}

floatingObj('.floating1', 1, 15);
floatingObj('.floating2', .5, 15);
floatingObj('.floating3', 1.5, 20);

// scroll Magic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 보여질 위치 설정
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

