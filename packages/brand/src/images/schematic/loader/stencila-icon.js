(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 100,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.stencil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6DFD6E").s().p("AkfEgIAAo/II/AAIAAI/gAhshsQgtAtAAA/QAAA/AtAuQAuAtA+AAQBAAAAtgtQAtguAAg/QAAg+gtguQgtgthAAAQg+AAguAtg");
	this.shape.setTransform(28.8,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.7,57.7);


(lib.dot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#166860").s().p("AhsBtQgtguAAg/QAAg+AtguQAugtA+AAQA/AAAuAtQAtAtAAA/QAAA/gtAuQguAtg/AAQg/AAgtgtg");
	this.shape.setTransform(15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,30.9);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B6CEB").s().p("AhsBtQgtguAAg/QAAg+AtguQAugtA+AAQA/AAAuAtQAtAtAAA/QAAA/gtAuQguAtg/AAQg/AAgtgtg");
	this.shape.setTransform(15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,30.9);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkfEgIAAo/II/AAIAAI/gAhshsQgtAtAAA/QAAA/AtAuQAuAtA+AAQBAAAAtgtQAtguAAg/QAAg+gtguQgtgthAAAQg+AAguAtg");
	mask.setTransform(28.8,28.8);

	// Layer 6
	this.instance = new lib.dot2();
	this.instance.parent = this;
	this.instance.setTransform(42.2,28.8,1,1,0,0,0,15.4,15.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:46.9},0).wait(1).to({x:51.9},0).wait(1).to({x:56.2},0).wait(1).to({x:58.8},0).wait(1).to({x:60.2},0).wait(1).to({x:61},0).wait(1).to({x:61.4},0).wait(1).to({x:61.6},0).wait(1).to({x:61.7},0).wait(7).to({x:54,y:36.5},0).wait(1).to({x:45.7,y:44.8},0).wait(1).to({x:38.7,y:51.9},0).wait(1).to({x:34.5,y:56.1},0).wait(1).to({x:32.1,y:58.5},0).wait(1).to({x:30.8,y:59.8},0).wait(1).to({x:30.1,y:60.5},0).wait(1).to({x:29.8,y:60.9},0).wait(1).to({x:29.7,y:61},0).wait(6).to({x:23.4,y:48},0).wait(1).to({x:16.6,y:34.1},0).wait(1).to({x:10.4,y:21.3},0).wait(1).to({x:6.1,y:12.4},0).wait(1).to({x:3.4,y:7},0).wait(1).to({x:1.8,y:3.7},0).wait(1).to({x:0.9,y:1.8},0).wait(1).to({x:0.4,y:0.7},0).wait(1).to({x:0.1,y:0.2},0).wait(1).to({x:0,y:0},0).wait(6).to({x:6.2,y:6.2},0).wait(1).to({x:12.8,y:12.8},0).wait(1).to({x:18.7,y:18.7},0).wait(1).to({x:23,y:23},0).wait(1).to({x:25.5,y:25.5},0).wait(1).to({x:27.1,y:27.1},0).wait(1).to({x:28,y:28},0).wait(1).to({x:28.5,y:28.5},0).wait(1).to({x:28.7,y:28.7},0).wait(1).to({x:28.8,y:28.8},0).wait(6).to({x:31.4},0).wait(1).to({x:34.1},0).wait(1).to({x:36.7},0).wait(1).to({x:38.7},0).wait(1).to({x:40.1},0).wait(1).to({x:41},0).wait(1).to({x:41.5},0).wait(1).to({x:41.9},0).wait(1).to({x:42.1},0).wait(1).to({x:42.2},0).wait(31));

	// Layer 2
	this.mc_dot = new lib.dot();
	this.mc_dot.parent = this;
	this.mc_dot.setTransform(42.2,28.8,1,1,0,0,0,15.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.mc_dot).wait(1).to({x:46.9},0).wait(1).to({x:51.9},0).wait(1).to({x:56.2},0).wait(1).to({x:58.8},0).wait(1).to({x:60.2},0).wait(1).to({x:61},0).wait(1).to({x:61.4},0).wait(1).to({x:61.6},0).wait(1).to({x:61.7},0).wait(7).to({x:54,y:36.5},0).wait(1).to({x:45.7,y:44.9},0).wait(1).to({x:38.7,y:51.9},0).wait(1).to({x:34.5,y:56.2},0).wait(1).to({x:32.1,y:58.5},0).wait(1).to({x:30.8,y:59.8},0).wait(1).to({x:30.1,y:60.5},0).wait(1).to({x:29.8,y:60.9},0).wait(1).to({x:29.7,y:61},0).wait(6).to({x:23.4,y:48},0).wait(1).to({x:16.6,y:34.1},0).wait(1).to({x:10.4,y:21.3},0).wait(1).to({x:6.1,y:12.4},0).wait(1).to({x:3.4,y:7},0).wait(1).to({x:1.8,y:3.7},0).wait(1).to({x:0.9,y:1.8},0).wait(1).to({x:0.4,y:0.7},0).wait(1).to({x:0.1,y:0.2},0).wait(1).to({x:0,y:0},0).wait(6).to({x:6.2,y:6.2},0).wait(1).to({x:12.8,y:12.8},0).wait(1).to({x:18.7,y:18.7},0).wait(1).to({x:23,y:23},0).wait(1).to({x:25.5,y:25.5},0).wait(1).to({x:27.1,y:27.1},0).wait(1).to({x:28,y:28},0).wait(1).to({x:28.5,y:28.5},0).wait(1).to({x:28.7,y:28.7},0).wait(1).to({x:28.8,y:28.8},0).wait(6).to({x:31.4},0).wait(1).to({x:34.1},0).wait(1).to({x:36.7},0).wait(1).to({x:38.7},0).wait(1).to({x:40.1},0).wait(1).to({x:41},0).wait(1).to({x:41.5},0).wait(1).to({x:41.9},0).wait(1).to({x:42.1},0).wait(1).to({x:42.2},0).wait(31));

	// Layer 1
	this.instance_1 = new lib.stencil();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.8,28.8,1,1,0,0,0,28.8,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.7,57.7);


// stage content:
(lib.stencila_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50,50,1,1,0,0,0,28.8,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.2,71.2,57.6,57.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;