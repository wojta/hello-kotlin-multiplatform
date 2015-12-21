package cz.sazel.hellokotlin

/**
 * Created by wojta on 15.12.15.
 */
fun main(args : Array<String>) {
    val hello= Hello()
    println("Hello, world!")
    println(hello.test)
    hello.test="xx"
    println(hello.test)

    val shared=SharedClass("Shared class experiment")
    shared.number=1234
    shared.printMe()
}