package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.IConsole

/**
 * Shared multiplatform code written in Kotlin
 * @param console you need to pass some IConsole for printing things.
 */
class SharedClass(val console: IConsole, val math: IMath) {

    var platform: String = ""

    fun printMe() {
        console.println("Hello Kotlin!\n\nThis is a shared code between multiple runtimes. Current platform: [$platform]:")
    }

    /**
     * Prints first n prime numbers to console.
     * @param n number of primes
     */
    fun printPrimes(n: Long) {
        for (i in calcPrimes(n)) console.println("$i")
    }

    /**
     * Calculates first n prime numbers
     * @see <a href="http://www.paul-scott.com/nth-prime.php">Source code inspired by this PHP version</a>
     * @param n number of primes
     */
    fun calcPrimes(n: Long): List<Long> {

        val primes = arrayListOf<Long>()
        if (n > 0) primes.add(2)

        var c = 1
        var p = 3.0

        var prime: Boolean

        while (n > 1) {
            // Check if p is prime
            prime = true
            val sqrt = math.sqrt(p)
            (1..c).filter { primes[it - 1] < sqrt }.forEach {
                if ((p.toLong() % primes[it]) == 0L) {
                    prime = false
                    return@forEach
                }
            }
            // Record p if prime
            if (prime) {
                primes.add(p.toLong())
                c++
                if (c.toLong() == n) {
                    break
                }
            }

            // Next p to check
            p += 2
        }
        return primes.toList()
    }
}