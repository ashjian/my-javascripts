var Hls = window.Hls
// var video = document.getElementById("video")
var url = 'https://cdn.jsdelivr.net/gh/ashjian/v3937/3938/playlist.m3u8'
if (Hls.isSupported()) {
  var hls = new Hls()
  hls.loadSource(url)
  hls.attachMedia(video)
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    // video.play()
  })
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  // video.src = url
  video.addEventListener('canplay', function () {
    // video.play()
  })
}
