package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console

/**
 * main function for Java
 */
fun main(vararg args: String) {
    val shared = SharedClass(Console(), Math())
    shared.platform = "JVM"
    shared.printMe()

    shared.printPrimes(1000)
}