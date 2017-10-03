if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'hello_lib_js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'hello_lib_js'.");
}
var hello_lib_js = function(_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;

  function Math_0() {
    this.mathJs_0 = Math;
  }

  Math_0.prototype.sqrt_14dthe$ = function(x) {
    return this.mathJs_0.sqrt(x);
  };
  Math_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Math',
    interfaces: [IMath]
  };

  function Console() {
  }

  Console.prototype.println_61zpoe$ = function(s) {
    console.log(s);
  };
  Console.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Console',
    interfaces: [IConsole]
  };

  function main(args) {
    println('main() called');
  }

  function start() {
    var shared = new SharedClass(new Console(), new Math_0());
    shared.platform = 'JavaScript';
    shared.printMe();
    shared.printPrimes_s8cxhz$(Kotlin.Long.fromInt(1000));
  }

  function IMath() {
  }

  IMath.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IMath',
    interfaces: []
  };

  function SharedClass(console, math) {
    this.console = console;
    this.math = math;
    this.platform = '';
  }

  SharedClass.prototype.printMe = function() {
    this.console.println_61zpoe$('Hello Kotlin!' + '\n' + '\n' + 'This is a shared code between multiple runtimes. Current platform: [' + this.platform + ']:');
  };
  SharedClass.prototype.printPrimes_s8cxhz$ = function(n) {
    var tmp$;
    tmp$ = this.calcPrimes_s8cxhz$(n).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.console.println_61zpoe$(i.toString());
    }
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  SharedClass.prototype.calcPrimes_s8cxhz$ = function(n) {
    var primes;
    primes = ArrayList_init();
    primes.add_11rb$(Kotlin.Long.fromInt(2));
    var c = 1;
    var p = {v: 3.0};
    var prime = {v: null};
    while (true) {
      prime.v = true;
      var sqrt = this.math.sqrt_14dthe$(p.v);
      var $receiver = new IntRange(1, c);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (primes.get_za3lpa$(element - 1 | 0).toNumber() < sqrt)
          destination.add_11rb$(element);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (Kotlin.equals(Kotlin.Long.fromNumber(p.v).modulo(primes.get_za3lpa$(element_0)), Kotlin.Long.ZERO)) {
          prime.v = false;
        }
      }
      if (prime.v) {
        primes.add_11rb$(Kotlin.Long.fromNumber(p.v));
        c = c + 1 | 0;
        if (Kotlin.equals(Kotlin.Long.fromInt(c), n)) {
          break;
        }
      }
      p.v += 2;
    }
    return toList(primes);
  };
  SharedClass.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SharedClass',
    interfaces: []
  };

  function IConsole() {
  }

  IConsole.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IConsole',
    interfaces: []
  };
  var package$cz = _.cz || (_.cz = {});
  var package$sazel = package$cz.sazel || (package$cz.sazel = {});
  var package$hellokotlin = package$sazel.hellokotlin || (package$sazel.hellokotlin = {});
  package$hellokotlin.Math = Math_0;
  var package$console = package$hellokotlin.console || (package$hellokotlin.console = {});
  package$console.Console = Console;
  package$hellokotlin.main_vqirvp$ = main;
  package$hellokotlin.start = start;
  package$hellokotlin.IMath = IMath;
  package$hellokotlin.SharedClass = SharedClass;
  package$console.IConsole = IConsole;
  main([]);
  Kotlin.defineModule('hello_lib_js', _);
  return _;
}(typeof hello_lib_js === 'undefined' ? {} : hello_lib_js, kotlin);
