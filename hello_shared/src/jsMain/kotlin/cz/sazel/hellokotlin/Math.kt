package cz.sazel.hellokotlin

/**
 * Created by vsazel on 22.3.17.
 */
actual class Math : IMath {

    private val mathJs = js("Math")

    actual override fun sqrt(x: Double): Double = mathJs.sqrt(x)
}