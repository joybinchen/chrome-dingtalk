console.log("yes");
function runApp()
{
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 900;
  var height = 600;

  chrome.app.window.create('main.html', {
    id: 'dingtalk_chrome_app',
	bounds: {
		width: 900,
		height: 600,
		left: Math.floor((screenWidth - width) / 2),
		top : Math.floor((screenHeight - height) / 2)
	},
    minWidth: 899,
    minHeight: 599
  });
  console.log("runApp");
}

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
});

chrome.app.runtime.onLaunched.addListener(function() {
	runApp();
});

chrome.app.runtime.onRestarted.addListener(function() {
	runApp();
});
