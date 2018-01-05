package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.DOMConsole
import org.w3c.dom.events.Event
import kotlin.browser.document

/**
 * main function for JavaScript
 */
fun main(vararg args: String) {
    //nothing here, it's executed before DOM is ready
    println("main() web called") //this is written to JavaScript browser's developer console
    document.addEventListener("DOMContentLoaded", {
        println("DOMContentLoaded")
        document.getElementById("startButton")?.addEventListener("click", ::start)
    })
}

/**
 * We start this function from button click
 */
fun start(ev: Event) {
    val shared = SharedClass(DOMConsole(), Math())
    shared.platform = "JavaScript Browser"
    shared.printMe()
    shared.printPrimes(1000)
}



