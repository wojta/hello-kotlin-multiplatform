package cz.sazel.hellokotlin.console

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.launch

/**
 * Console shared code declaration. Class is used to output something on screen.
 */
class IosConsole : IConsole {

    val linesFlow: Flow<ArrayList<String>>
        get() = _linesFlow
    private val _linesFlow = MutableSharedFlow<ArrayList<String>>()

    val lines = ArrayList<String>()

    override fun println(s: String) {
        lines += s
        GlobalScope.launch {
            _linesFlow.emit(lines)
        }
    }
}
