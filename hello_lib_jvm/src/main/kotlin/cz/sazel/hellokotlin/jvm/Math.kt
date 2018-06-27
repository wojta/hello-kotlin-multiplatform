package cz.sazel.hellokotlin.jvm

import cz.sazel.hellokotlin.IMath

class Math : IMath {
    override fun sqrt(x: Double): Double = java.lang.Math.sqrt(x)
}
