    function playm3u8() {
       if(Hls.isSupported()) {
           var video = document.getElementById('video');
           var hls = new Hls();
           hls.loadSource(video.src);
           hls.attachMedia(video);
           hls.on(Hls.Events.MANIFEST_PARSED,function() {
           // video.play();
           });
       }
    }

    function test() {
        console.log(video)
        if(video.src != null) {
            playm3u8()
    }

    }
    // document.addEventListener("DOMContentLoaded", function () {
    //     console.log(video)
    //     test();
    // }, false);

//     var video = document.getElementById("video")
//     console.log(video)
//     video.addEventListener("DOMContentLoaded", function() {
//         console.log(video)
//         test()
//     }, false)

    setTimeout(() => {
        video = document.getElementById("video")
        console.log(video)
        test();
//     }, 5000);
