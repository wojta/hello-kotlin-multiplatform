package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

/**
 * main function for JavaScript
 */
fun main() {
    start()
}

/**
 * We start this function from <button onClick="
 */
fun start() {
    val shared = SharedClass(Console(), Math())
    shared.platform = "Node.js"
    shared.printMe()
    GlobalScope.launch {
        shared.printPrimes(1000)
    }
}



