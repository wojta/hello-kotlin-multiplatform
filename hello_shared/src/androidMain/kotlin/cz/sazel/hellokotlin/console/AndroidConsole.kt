package cz.sazel.hellokotlin.console

import android.app.Activity
import android.widget.TextView

/**
 * Android specific console implementation.
 */
class AndroidConsole(private val textView: TextView) : IConsole {
    override fun println(s: String) {
        (textView.context as Activity).runOnUiThread {
            textView.text = "${textView.text}$s\n"
        }
    }
}
