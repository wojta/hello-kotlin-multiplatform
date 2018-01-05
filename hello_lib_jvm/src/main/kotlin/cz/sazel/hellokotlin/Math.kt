package cz.sazel.hellokotlin

/**
 * Created by vsazel on 22.3.17.
 */
actual class Math : IMath {
    override actual fun sqrt(x: Double): Double = java.lang.Math.sqrt(x)
}