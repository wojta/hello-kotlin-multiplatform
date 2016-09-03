(function (Kotlin) {
    'use strict';
    var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
        cz: Kotlin.definePackage(null, /** @lends _.cz */ {
            sazel: Kotlin.definePackage(null, /** @lends _.cz.sazel */ {
                hellokotlin: Kotlin.definePackage(null, /** @lends _.cz.sazel.hellokotlin */ {
                    main_kand9s$: function (args) {
                    },
                    start: function () {
                        var shared = new _.cz.sazel.hellokotlin.SharedClass(new _.cz.sazel.hellokotlin.console.Console());
                        shared.number = 1234;
                        shared.text = 'JavaScript';
                        shared.printMe();
                        shared.printPrimes_s8cxhz$(Kotlin.Long.fromInt(1000));
                    },
                    SharedClass: Kotlin.createClass(null, function (console) {
                        this.console = console;
                        this.number = 0;
                        this.text = '';
                    }, /** @lends _.cz.sazel.hellokotlin.SharedClass.prototype */ {
                        printMe: function () {
                            this.console.println_61zpoe$('Hello Kotlin!' + '\n' + '\n' + 'This is a shared code between JavaScript/JVM/IKVM/Android runtimes:[' + this.text + '] and number:[' + this.number + ']');
                        },
                        printPrimes_s8cxhz$: function (n) {
                            var tmp$0;
                            tmp$0 = this.calcPrimes_s8cxhz$(n).iterator();
                            while (tmp$0.hasNext()) {
                                var i = tmp$0.next();
                                this.console.println_61zpoe$(i.toString());
                            }
                        },
                        calcPrimes_s8cxhz$: function (n) {
                            var primes;
                            primes = Kotlin.modules['stdlib'].kotlin.collections.arrayListOf_9mqe4v$([]);
                            primes.add_za3rmp$(Kotlin.Long.fromInt(2));
                            var c = 1;
                            var p = {v: 3.0};
                            var prime = {v: null};
                            while (true) {
                                prime.v = true;
                                var sqrt = Math.sqrt(p.v);
                                var $receiver = new Kotlin.NumberRange(1, c);
                                var destination = new Kotlin.ArrayList();
                                var tmp$1;
                                tmp$1 = $receiver.iterator();
                                while (tmp$1.hasNext()) {
                                    var element = tmp$1.next();
                                    if (primes.get_za3lpa$(element - 1).toNumber() < sqrt) {
                                        destination.add_za3rmp$(element);
                                    }
                                }
                                var tmp$2;
                                tmp$2 = destination.iterator();
                                while (tmp$2.hasNext()) {
                                    var element_0 = tmp$2.next();
                                    if (Kotlin.Long.fromNumber(p.v).modulo(primes.get_za3lpa$(element_0)).equals_za3rmp$(Kotlin.Long.ZERO)) {
                                        prime.v = false;
                                    }
                                }
                                if (prime.v) {
                                    primes.add_za3rmp$(Kotlin.Long.fromNumber(p.v));
                                    c++;
                                    if (Kotlin.Long.fromInt(c).equals_za3rmp$(n)) {
                                        break;
                                    }
                                }
                                p.v += 2;
                            }
                            return Kotlin.modules['stdlib'].kotlin.collections.toList_q5oq31$(primes);
                        }
                    }, /** @lends _.cz.sazel.hellokotlin.SharedClass */ {}),
                    console: Kotlin.definePackage(null, /** @lends _.cz.sazel.hellokotlin.console */ {
                        Console: Kotlin.createClass(function () {
                            return [_.cz.sazel.hellokotlin.console.IConsole];
                        }, function () {
                            this.document = document;
                        }, /** @lends _.cz.sazel.hellokotlin.console.Console.prototype */ {
                            println_61zpoe$: function (s) {
                                this.document.getElementById('console').appendChild(this.document.createTextNode(s + '\n'));
                            }
                        }),
                        IConsole: Kotlin.createTrait(null)
                    })
                })
            })
        })
    });
    Kotlin.defineModule('hello_js', _);
    _.cz.sazel.hellokotlin.main_kand9s$([]);
}(Kotlin));

//@ sourceMappingURL=hello_js.js.map
