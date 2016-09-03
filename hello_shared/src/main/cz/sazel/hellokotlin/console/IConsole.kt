package cz.sazel.hellokotlin.console

/**
 * Console shared code declaration. Class is used to output something on screen.
 */
interface IConsole {

    /**
     * Prints text to console.
     * @param s text to print
     */
    public fun println(s:String)
}