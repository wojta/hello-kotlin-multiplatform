package cz.sazel.hellokotlin.console

/**
 * Console that logs in JS console object.
 */
actual class Console : IConsole {


    actual override fun println(s: String) {
        //prints text by adding it to the 'console' element
        console.log(s)
    }
}