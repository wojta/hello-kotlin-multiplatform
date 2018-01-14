package cz.sazel.hellokotlin

import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.BlockJUnit4ClassRunner
import kotlin.math.sqrt
import kotlin.test.assertEquals

@RunWith(BlockJUnit4ClassRunner::class)
class MathTest {

    @Test
    fun sqrtTest() {
        assertEquals(2.0, sqrt(4.0))
    }
}