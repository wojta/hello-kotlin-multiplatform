package cz.sazel.hellokotlin.console

import cli.System.Console

/**
 * Console for Java console version.
 */
class Console:IConsole {

    override fun println(s: String) {
        //just print text to output

        Console.WriteLine(s);

    }
}