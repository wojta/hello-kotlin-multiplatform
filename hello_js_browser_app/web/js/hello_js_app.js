if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'hello_js_app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'hello_js_app'.");
}
if (typeof hello_lib_js === 'undefined') {
  throw new Error("Error loading module 'hello_js_app'. Its dependency 'hello_lib_js' was not found. Please, check whether 'hello_lib_js' is loaded prior to 'hello_js_app'.");
}
var hello_js_app = function(_, Kotlin, $module$hello_lib_js) {
  'use strict';
  var IConsole = $module$hello_lib_js.cz.sazel.hellokotlin.console.IConsole;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Math_0 = $module$hello_lib_js.cz.sazel.hellokotlin.Math;
  var SharedClass = $module$hello_lib_js.cz.sazel.hellokotlin.SharedClass;

  function DOMConsole() {
  }

  DOMConsole.prototype.println_61zpoe$ = function(s) {
    var tmp$;
    (tmp$ = document.getElementById('console')) != null ? tmp$.appendChild(document.createTextNode(s + '\n')) : null;
  };
  DOMConsole.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DOMConsole',
    interfaces: [IConsole]
  };

  function main(args) {
    println('main() called');
  }

  function start() {
    var shared = new SharedClass(new DOMConsole(), new Math_0());
    shared.platform = 'JavaScript Browser';
    shared.printMe();
    shared.printPrimes_s8cxhz$(Kotlin.Long.fromInt(1000));
  }

  var package$cz = _.cz || (_.cz = {});
  var package$sazel = package$cz.sazel || (package$cz.sazel = {});
  var package$hellokotlin = package$sazel.hellokotlin || (package$sazel.hellokotlin = {});
  var package$console = package$hellokotlin.console || (package$hellokotlin.console = {});
  package$console.DOMConsole = DOMConsole;
  package$hellokotlin.main_vqirvp$ = main;
  package$hellokotlin.start = start;
  main([]);
  Kotlin.defineModule('hello_js_app', _);
  return _;
}(typeof hello_js_app === 'undefined' ? {} : hello_js_app, kotlin, hello_lib_js);

//# sourceMappingURL=hello_js_app.js.map
