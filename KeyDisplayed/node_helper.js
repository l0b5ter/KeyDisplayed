var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  start: function() {
    this.countDown = 10000000
	setInterval(() => { this.sendSocketNotification("message_from_helper"," this is a test_message")}, 150)
	//setTimeout(()=> { console.log("message_from_helper"); }, 15);
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "DO_YOUR_JOB":
        this.sendSocketNotification("I_DID", (this.countDown - payload))
        break
    }
  },
});
