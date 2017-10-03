package cz.sazel.hellokotlin.console

/**
 * Console for Java console version.
 */
actual class Console : IConsole {

    override actual fun println(s: String) {
        //just print text to output
        System.out.println(s)
    }
}