package cz.sazel.hellokotlin.console

/**
 * Console for web.
 */
class Console : IConsole {

    /**
     * This is attached to HTML DOM document.
     */
    val document: dynamic=js("document")

    override fun println(s: String) {
        //prints text by adding it to the 'console' element
        document.getElementById("console").appendChild(document.createTextNode("$s\n"));
    }
}