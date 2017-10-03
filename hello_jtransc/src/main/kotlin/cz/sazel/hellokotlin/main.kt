package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.Console

import com.jtransc.JTranscVersion;

/**
 * main function for Java
 */
fun main(vararg args: String) {
    val shared = cz.sazel.hellokotlin.SharedClass(Console())
    shared.number = 1234
    shared.text = JTranscVersion.getRuntime() + " " + JTranscVersion.getVersion()
    shared.printMe()


    shared.printPrimes(1000)
}