This is the module we are gonna use!! It detect keypress and show a webside regarding to that keycode. The letter e (101) is used to close the window, so dont use this as one of the keycodes.
by jostein


Put this in config.js

		{
			module: "KeyDisplayed",
			position: "top_center",
			config: {
				url: [[113, "http://magicmirror.builders/"], [97, "https://vg.no"], [100, "https://www.dagbladet.no/"]], //[[KeyCode, "url"], [KeyCode, "url"]], Notice: 101 used to close window (key: e).
				frameWidth: "700px",
				frameHeight: "500px",
				scrolling: "yes",
				Displayed: 0
			}
		},

