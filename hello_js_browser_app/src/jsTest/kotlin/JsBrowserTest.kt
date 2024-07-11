import kotlinx.browser.document
import kotlin.test.Test
import kotlin.test.assertEquals

class JsBrowserTest {

    @Test
    fun documentTest() {
        val expectedData = "Test node"
        val node = document.createTextNode(expectedData)
        assertEquals(expectedData, node.data)
    }
}
