var questionModel = function(questionData){
	var pageHTML = Handlebars.templates.question(questionData);
	$("#question-holder").append(pageHTML);
	var divider = $("#question" + questionData.question_number + "buttons")
	var buttons = divider.children();
	this.selectedButton = null;
	this.selectedNumber = null;
	var me = this
	var listeners = []
	this.changed = function(listener){
		listeners.push(listener);
	}

	var fireChanged = function(){
		for (var i = listeners.length - 1; i >= 0; i--) {
			listeners[i](me.selectedNumber);
		}
	}

	

	for (var i = buttons.length - 1; i >= 0; i--) {


		var button = buttons[i]

		divider.on("click", "#" + button.id, function(event){
			if (me.selectedButton) {
				me.selectedButton.toggleClass("btn-primary")
				me.selectedButton.toggleClass("btn-default")				
			}
			me.selectedButton = $(event.target)
			me.selectedButton.toggleClass("btn-primary")
			me.selectedButton.toggleClass("btn-default")
			var newId = event.target.id
			me.selectedNumber = parseInt(newId.substring(newId.length - 1));
			fireChanged();
		});
	}


}