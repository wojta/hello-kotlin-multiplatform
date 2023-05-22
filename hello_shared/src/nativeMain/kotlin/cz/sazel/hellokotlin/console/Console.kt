package cz.sazel.hellokotlin.console

/**
 * Console shared code declaration. Class is used to output something on screen.
 */
actual class Console : IConsole {
    actual override fun println(s: String) {
        platform.posix.printf("$s\n")
    }

}
