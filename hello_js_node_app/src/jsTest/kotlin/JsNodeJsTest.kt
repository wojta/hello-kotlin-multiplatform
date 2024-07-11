import kotlin.test.Test
import kotlin.test.assertEquals

class JsNodeJsTest {

    @Test
    fun nodeJsTest() {
        val crypto = js("require('crypto')")
        val sha1 = crypto.createHash("sha1")
        sha1.update("foo")
        val expectedHash = "0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33"
        val actualHash = sha1.digest("hex")
        assertEquals(expectedHash, actualHash)
    }
}
