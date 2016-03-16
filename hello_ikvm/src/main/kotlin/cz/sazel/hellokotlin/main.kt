package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console


/**
 * main function for IKVM
 */
fun main(args : Array<String>) {
    val shared=SharedClass(Console())
    shared.number=1234
    shared.text="IKVM .NET"
    shared.printMe()



    shared.printPrimes(1000)
}