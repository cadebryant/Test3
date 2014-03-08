
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button12 = {};	// @button
	var button11 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button12.click = function button12_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
	};// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button12", "click", button12.click, "WAF");
	WAF.addListener("button11", "click", button11.click, "WAF");
// @endregion
};// @endlock
