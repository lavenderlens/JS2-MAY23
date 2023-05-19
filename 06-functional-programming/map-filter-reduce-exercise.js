function Widget(colour, size) {
	this.colour = colour;
	this.size = size;
}
var widgets = [
	new Widget("red", 1),
	new Widget("blue", 2),
	new Widget("red", 2),
	new Widget("yellow", 3),
	new Widget("red", 4),
	new Widget("blue", 1),
	new Widget("red", 3),
];

const sizeOfLargestRedWidget = 