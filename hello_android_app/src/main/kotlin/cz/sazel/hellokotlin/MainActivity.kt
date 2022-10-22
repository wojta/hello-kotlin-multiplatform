package cz.sazel.hellokotlin

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import cz.sazel.hellokotlin.console.AndroidConsole
import cz.sazel.hellokotlin.console.IConsole
import cz.sazel.hellokotlin.databinding.ActivityMainBinding
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.async

/**
 * In Android this activity is a start point.
 */
@ExperimentalCoroutinesApi
class MainActivity : AppCompatActivity(), CoroutineScope by MainScope() {

    lateinit var sharedClass: SharedClass
    private lateinit var binding: ActivityMainBinding

    private lateinit var console: IConsole

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        with(binding) {
            btStart.setOnClickListener { startClick() }
            console = AndroidConsole(tvConsole)
            sharedClass = SharedClass(console, Math())
            sharedClass.platform = "Android"
        }
    }

    private fun calcPrimes(n: Long) = sharedClass.calcPrimes(n)

    private fun startClick() {
        sharedClass.printMe()
        //we can't have direct sharedClass.printPrimes(1000) there, we need to do it asynchronously to not block the UI
        async {
            val primes: List<Long> = calcPrimes(1000)
            val output = primes.map { prime -> prime.toString() }.reduce { s1, s2 -> s1 + "\n" + s2 }
            console.println(output)
        }
    }

}
