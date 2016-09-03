package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console

/**
 * main function for JavaScript
 */
fun main(vararg args: String) {
    //nothing here, it's executed before DOM is ready
}

/**
 * We start this function from <button onClick="
 */
fun start() {
    val shared=SharedClass(Console())
    shared.number=1234
    shared.text="JavaScript"
    shared.printMe()
    shared.printPrimes(1000)
}



