package cz.sazel.hellokotlin.console

/**
 * Created by wojta on 21.12.15.
 */
class Console:IConsole {

    override fun println(s: String) {
        System.out.println(s)
    }
}