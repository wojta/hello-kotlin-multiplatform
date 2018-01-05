package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console

/**
 * main function for JavaScript
 */
fun main(vararg args: String) {
    //nothing here
}

/**
 * We start this function from <button onClick="
 */
fun start() {
    val shared = SharedClass(Console(), Math())
    shared.platform = "Node.js"
    shared.printMe()
    shared.printPrimes(1000)
}



