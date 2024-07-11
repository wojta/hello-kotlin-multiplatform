package cz.sazel.hellokotlin

import platform.posix.sqrt as sqrt_

/**
 * Created by vsazel on 22.3.17.
 */
actual class Math : IMath {
    actual override fun sqrt(x: Double): Double =
        sqrt_(x)


}
