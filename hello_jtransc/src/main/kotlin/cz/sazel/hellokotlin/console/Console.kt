package cz.sazel.hellokotlin.console

/**
 * Console for Java console version.
 */
class Console: cz.sazel.hellokotlin.console.IConsole {

    override fun println(s: String) {
        //just print text to output
        System.out.println(s)
    }
}