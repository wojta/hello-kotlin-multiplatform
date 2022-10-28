import java.math.BigInteger
import kotlin.test.Test
import kotlin.test.assertEquals

class JvmTest {

    @Test
    fun jvmTest() {
        val a = BigInteger.valueOf(2)
        val b = BigInteger.valueOf(3)
        val c = a + b
        assertEquals(BigInteger.valueOf(5), c)
    }
}
