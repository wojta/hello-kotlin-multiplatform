package cz.sazel.hellokotlin

import android.content.Context
import androidx.test.filters.SmallTest
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.runner.AndroidJUnit4
import org.junit.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith

/**
 * [Testing Fundamentals](http://d.android.com/tools/testing/testing_android.html)
 */
@RunWith(AndroidJUnit4::class)
class ApplicationTest {

    lateinit var context: Context

    @Before
    fun init() {
        context = InstrumentationRegistry.getInstrumentation().context.applicationContext
    }


    @Test
    fun testAndroidSpecificThing() {
        val expectedText = "Hello Kotlin!"
        val actualText = context.getString(R.string.app_name)
        assertEquals(expectedText, actualText)
    }
}
