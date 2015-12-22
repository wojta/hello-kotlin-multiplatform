package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.IConsole

/**
 * Created by wojta on 15.12.15.
 */
class SharedClass(val console: IConsole) {

    public var number: Number = 0
    public var text: String = ""

    public fun printMe() {
        console.println("Hello Kotlin!\nThis is a shared code between JavaScript/Java/Android runtimes:[$text] and number:[$number]")
    }

    /**
     * Prints first n prime numbers to console.
     * @param n number of primes
     */
    public fun printPrimes(n: Long) {
        for (i in calcPrimes(n)) console.println("$i");
    }

    /**
     * Calculates first n prime numbers
     * @param n number of primes
     */
    public  fun calcPrimes(n: Long): List<Long> {

        val primes: MutableList<Long>
        primes = arrayListOf<Long>();
        primes.add(2);

        var c = 1;
        var p = 3.0;

        var prime:Boolean

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