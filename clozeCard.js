function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

	if (!this.text.includes(this.cloze)) {
		console.error("Error: " + this.cloze + " does not appear in " + this.text);
	}
}

ClozeCard.prototype.showCloze = function() {
	console.log(this.cloze);
};

ClozeCard.prototype.displayAns = function() {
	console.log(this.text);
};

ClozeCard.prototype.partial = function() {
	var string = this.text.replace(this.cloze, "...");
	console.log(string);
};

module.exports = ClozeCard;
