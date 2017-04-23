<div id="video-viewport">
        <video id="azuremediaplayer" class="azuremediaplayer amp-default-skin" width="100%" height="100%"> </video>
            <script>
                  var myOptions = {
                        heuristicProfile: "HighQuality",
                        techOrder: ["azureHtml5JS", "html5", "flashSS", "silverlightSS", ],
                        "nativeControlsForTouch": false,
                        autoplay: true,
                        controls: false,
                        logo: { enabled: false }
                  };
 
 
                var myPlayer = amp("azuremediaplayer", myOptions, function () {
                        //resize-to-fit handler code goes here if you’re doing full screen background video
                  });
 
                  //Register for events after intialization not in Ready function to ensure all event are captured
                  myPlayer.addEventListener(amp.eventName.play, _ampEventHandler);
                  myPlayer.addEventListener(amp.eventName.ended, _ampEventHandler);
           
                  myPlayer.src([
                        { src: "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest" },
                  ]);
 
                  function _ampEventHandler(evt) {
                        if ("play" == evt.type) {
                              $('#video-viewport').css("opacity", "1");
                        }
                        if ("ended" == evt.type) {
                              myPlayer.play();
                        }
                  }
            </script>
      </div>
