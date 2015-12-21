package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console

/**
 * Created by wojta on 15.12.15.
 */
fun main(args : Array<String>) {

}

fun start() {
    val hello= Hello()
    println("Hello, world!")
    println(hello.test)
    hello.test="xx"
    println(hello.test)


    val shared=SharedClass(Console())
    shared.number=1234
    shared.text="JavaScript"
    shared.printMe()
    shared.printPrimes(1000)
}



