// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
        },
        events: {
            onReady: function(event) { // 영상이 준비되었을 때 실행
                event.target.mute(); //음소거
            }
        }
    });
}