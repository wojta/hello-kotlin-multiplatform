package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console
import kotlinx.coroutines.runBlocking

/**
 * main function
 */
fun main() {
    val shared = SharedClass(Console(), Math())
    shared.platform = "Native ${arch()}"
    shared.printMe()
    runBlocking {
        shared.printPrimes(1000)
    }
}



