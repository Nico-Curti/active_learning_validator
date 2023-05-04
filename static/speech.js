var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if (annyang &&
    // is Google Chrome
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
    ){

  //set voice commands to control the validator
  const commands = {

    // click yes button if the "speech_valid" is pronounced
    [translations[LANGUAGE]["speech_valid"]] : function(){
      document.getElementById('button_yes').click();
      plusSlides(+1);
    },

    // click no button if the "speech_invalid" is pronounced
    [translations[LANGUAGE]["speech_invalid"]] : function(){
      document.getElementById('button_no').click();
      plusSlides(+1);
    },

    // go to the next photo if the "speech_forward" is pronounced
    [translations[LANGUAGE]["speech_forward"]] : function(){
      plusSlides(+1);
    },

    // go to the previous photo if the "speech_backward" is pronounced
    [translations[LANGUAGE]["speech_backward"]] : function(){
      plusSlides(-1);
    },

    //downlad the csv if the "speech_download" is pronounced
    [translations[LANGUAGE]["speech_download"]] : function(){
      document.getElementById('button_upload').click();
    }
  };

  // add commands
  annyang.addCommands(commands);
  //set italian language
  annyang.setLanguage(LANGUAGE)
  //start listening
  annyang.start({
    autoRestart: true,
    continuous: false,
  });
}
      
