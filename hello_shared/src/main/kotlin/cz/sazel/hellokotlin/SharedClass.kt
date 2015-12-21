package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.IConsole

/**
 * Created by wojta on 15.12.15.
 */
class SharedClass(val console: IConsole) {

    public var number: Number = 0
    public var text: String = ""

    public fun printMe() {
        console.println("This is a shared code between JavaScript and Java Kotlin text:[$text] and number:[$number]")
    }


    public fun printPrimes(n: Long) {
        console.println("Printing all $n primes");
        for (i in calcPrime(n)) console.println("$i");
    }

    private fun calcPrime(n: Long): List<Long> {

        val primes: MutableList<Long>
        primes = arrayListOf<Long>();
        primes.add(2);

        var c = 1;
        var p = 3.0;

        var prime = false

        while (true) {
            // Check if $p is prime
            prime = true;
            val sqrt = Math.sqrt(p)
            (1..c).filter { j -> primes[j-1] < sqrt }.forEach { i ->
                if ((p.toLong() % primes[i]) == 0L) {
                    prime = false
                    return@forEach
                }
            }
            // Record $p if prime
            if (prime) {
                primes.add(p.toLong());
                c++
                if (c.toLong() == n) {
                    break;
                }
            }

            // Next $p to check
            p += 2;
        }
        return primes.toList();
    }
}