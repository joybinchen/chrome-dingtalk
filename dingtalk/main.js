window.resizeTo(899, 602);
function alarm(alarmName) {
	chrome.alarms.create(alarmName, {
		delayInMinutes:0.1, periodInMinutes:0.1
	});
};
alarm("yes");
