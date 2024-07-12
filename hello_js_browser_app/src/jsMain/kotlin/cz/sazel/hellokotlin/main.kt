package cz.sazel.hellokotlin

import cz.sazel.hellokotlin.console.DOMConsole
import kotlinx.browser.document
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.events.Event

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
    GlobalScope.launch {
        shared.printPrimes(1000)
    }
}



