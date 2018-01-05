package cz.sazel.hellokotlin.console

import kotlin.browser.document

/**
 * Console for web.
 */
class DOMConsole : IConsole {


    override fun println(s: String) {
        //prints text by adding it to the 'console' element
        document.getElementById("console")?.appendChild(document.createTextNode("$s\n"))
    }
}