package cz.sazel.hellokotlin

/**
 * Created by vsazel on 22.3.17.
 */
expect class Math : IMath {

    override fun sqrt(x: Double): Double

}