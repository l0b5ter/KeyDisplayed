This module is made by MJØD, which they used on their project. It detect keypress and show a webside regarding to that keycode. The letter e (101) is used to close the window, so dont use this as one of the keycodes.



Put this in config.js under modules

		{
			module: "KeyDisplayed",
			position: "top_center", //position (look here for all possible positions: https://forum.magicmirror.builders/topic/286/regions)
			config: { // To overwrite defualt
				url: [[113, "http://magicmirror.builders/"], [97, "https://vg.no"], [100, "https://www.dagbladet.no/"]], //[[KeyCode, "url"], [KeyCode, "url"]], Notice: 101 used to close window (key: e).
				frameWidth: "700px", //popupwindow width
				frameHeight: "500px", //popupwindow height
				scrolling: "yes", //Sud you be able to scroll in the window?
				Displayed: 0 //Start showing the popupwindow or hide (0 = hide, 1 = show)
			}
		},

