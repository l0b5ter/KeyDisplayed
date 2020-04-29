
var iPress;
var WasPress;


Module.register("KeyDisplayed",{
	// Default module config.
	defaults: {
		ModuleName: "KeyDisplayed",
		frameWidth: "600px",
		frameHeight: "600px",
		width:"100%",
		height:"100%",
        url: [[113, "http://magicmirror.builders/"], [97, "https://vg.no"]], //"http://magicmirror.builders/",
        scrolling: "no",
		Displayed: 0
	},

	// Override dom generator.
	getDom: function() {
		let UrlMap = new Map(this.config.url)
		var element = document.createElement("div");
        try {      
		var KeyShortcut = iPress;
		element.className = this.config.ModuleName;
        element.style.width = this.config.frameWidth;
		element.style.height = this.config.frameHeight;
		if(this.config.Displayed == 1) {
                var html = `
                        <div class="${this.config.ModuleName}" style="width: ${this.config.width}; height: ${this.config.height};">
                                <iframe
                                        src="${UrlMap.get(KeyShortcut)}"
                                        width="${this.config.width}"
                                        height="${this.config.height}"
                                        scrolling="${this.config.scrolling}"
                                ></iframe>
                        </div>
                `;
				//var html = `<div>${UrlMap.get(KeyShortcut)}</div>`;
				element.insertAdjacentHTML("afterbegin", html);		
		}
		} catch(err) { console.log(err); }
		return element

	},
	
	logKey: function(e) {
		iPress = e.keyCode;
	},

	notificationReceived: function(notification, payload, sender) {
		document.addEventListener('keypress', this.logKey);
		if(iPress != WasPress) {
			WasPress = iPress;
			if(this.config.Displayed == 1 && WasPress == "101") {
				this.config.Displayed = 0;
				this.updateDom(1000);
			} else if(this.config.Displayed == 0) {
				this.config.Displayed = 1;
				this.updateDom(1000);
			}
		}
	},

	socketNotificationReceived: function(notification, payload) {
		this.updateDom(1000)
	}
});