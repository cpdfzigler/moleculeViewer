Clazz.declarePackage("JSV.common");
Clazz.load(["JSV.common.Measurement"], "JSV.common.Integral", null, function(){
var c$ = Clazz.declareType(JSV.common, "Integral", JSV.common.Measurement);
Clazz.defineMethod(c$, "setInt", 
function(x1, y1, spec, value, x2, y2){
this.setA(x1, y1, spec, "", false, false, 0, 6);
this.setPt2(x2, y2);
this.setValue(value);
return this;
}, "~N,~N,JSV.common.Spectrum,~N,~N,~N");
});
;//5.0.1-v4 Wed Oct 09 10:23:43 CDT 2024