package cz.sazel.hellokotlin.jvm.console

import cz.sazel.hellokotlin.console.IConsole

/**
 * Console for Java console version.
 */
class Console : IConsole {

    override fun println(s: String) {
        //just print text to output
        System.out.println(s)

    }
}
