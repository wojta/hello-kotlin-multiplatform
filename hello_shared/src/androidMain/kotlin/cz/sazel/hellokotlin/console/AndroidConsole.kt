package cz.sazel.hellokotlin.console

import android.app.Activity
import android.text.NoCopySpan
import android.text.PrecomputedText
import android.text.Spannable
import android.text.TextPaint
import android.util.Log
import android.widget.TextView
import androidx.core.text.PrecomputedTextCompat
import androidx.core.widget.TextViewCompat
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

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
