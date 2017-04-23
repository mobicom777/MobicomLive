
     var myPlayer = amp('azuremediaplayer', { /* Options */
        techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"],
        "nativeControlsForTouch": false,
        autoplay: false,
        controls: true,
        width: "640",
        height: "400",
        poster: ""
    }, function() {
          console.log('Good to go!');
           // add an event listener
          this.addEventListener('ended', function() {
            console.log('Finished!');
        }
      }
);
myPlayer.src([{ 
    src: "http://mobicom.streaming.mediaservices.windows.net/4082234e-de8e-46f6-bff0-01df846795e8/b35e7f08-a06c-46dc-9a9a-504b4f1360d3.ism/manifest", 
    type: "application/vnd.ms-sstr+xml"
}]);
     
