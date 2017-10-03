package cz.sazel.hellokotlin.console

import android.widget.TextView

/**
 * Created by wojta on 22.12.15.
 */
class Console(val textView: TextView) : IConsole {
    override fun println(s: String) {
        textView.text = textView.text.toString() + s + "\n"
    }
}