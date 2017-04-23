
                  var myOptions = {
                        heuristicProfile: "HighQuality",
                        techOrder: ["azureHtml5JS", "html5", "flashSS", "silverlightSS", ],
                        "nativeControlsForTouch": false,
                        autoplay: true,
                        controls: false,
                        logo: { enabled: false }
                  };
 
 
                var myPlayer = amp("azuremediaplayer", myOptions)
                  myPlayer.src([
                        { src: "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest" },
                  ]);
 
                 
          
     
