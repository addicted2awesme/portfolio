$(function() {
  ini()
});
function ini() {
  iso(".tetris-container", ".tetris", 2) //number is gutter
}
$(window).resize(function() {
  ini()
});
function iso(c, d, e) {
var a = $(c), h = $(d), e = controls.gutter;
a.css("width", "");
a = a.width();
d = h.first().innerWidth() + e;
a = Math.max(Math.floor((a - e) / d), 1);
$(c).width(d * a + e);
for(var b = [], k = [], g = 0;g < a;g++) {
  k.push(g * d + e), b.push(e)
}
h.each(function(a, d) {
  var f = b.slice(0).sort(function(a, b) { return a - b }).shift(), f = b.indexOf(f), c = k[f], g = b[f], l = $($(h)[a]);
  l.css({left:c, top:g});
  b[f] += l.innerHeight() + e
});
$(c).height(b.slice(0).sort(function(a, b) { return a - b }).pop()) };

var controls = {
	gutter : 2
};

window.onload = function() {
	ini()
};