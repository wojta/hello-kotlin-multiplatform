package cz.sazel.hellokotlin.console

/**
 * Console for Java console version.
 */
class Console:IConsole {

    override fun println(s: String) {
        //just print text to output
        cli.System.Console.WriteLine(s);

    }
}