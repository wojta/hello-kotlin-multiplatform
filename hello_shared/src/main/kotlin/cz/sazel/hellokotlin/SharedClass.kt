package cz.sazel.hellokotlin

/**
 * Created by wojta on 15.12.15.
 */
data class SharedClass(var text:String) {

    public var number:Number=0

    public fun printMe() {
        println("This is a shared code between JavaScript and Java Kotlin text:[$text] and number:[$number]")
    }
}