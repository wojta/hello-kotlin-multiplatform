package cz.sazel.hellokotlin.console

import android.widget.TextView

/**
 * Android specific console implementation.
 */
class AndroidConsole(val textView: TextView) : IConsole {
    override fun println(s: String) {
        textView.text = "${textView.text}$s\n"
    }
}
