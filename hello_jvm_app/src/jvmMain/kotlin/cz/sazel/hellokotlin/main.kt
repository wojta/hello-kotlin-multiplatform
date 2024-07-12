package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console
import kotlinx.coroutines.runBlocking

/**
 * main function for JVM
 */
fun main(vararg args: String) {
    val shared = SharedClass(Console(), Math())
    shared.platform = "JVM"
    shared.printMe()
    runBlocking {
        shared.printPrimes(1000)
    }
}