package cz.sazel.hellokotlin

/**
 * Created by wojta on 15.12.15.
 */
fun main(args : Array<String>) {
    val pokusik= Pokusik()
    println("Hello, world!")
    println(pokusik.test)
    pokusik.test="xx"
    println(pokusik.test)
}