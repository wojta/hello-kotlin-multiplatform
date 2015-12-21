package cz.sazel.hellokotlin.console

/**
 * Created by wojta on 21.12.15.
 */
class Console : IConsole {

    val document: dynamic=js("document")

    override fun println(s: String) {
        document.getElementById("console").appendChild(document.createTextNode("$s\n"));
    }
}