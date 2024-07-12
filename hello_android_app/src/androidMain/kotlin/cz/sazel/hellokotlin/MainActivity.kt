package cz.sazel.hellokotlin

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import cz.sazel.hellokotlin.console.AndroidConsole
import cz.sazel.hellokotlin.console.IConsole
import cz.sazel.hellokotlin.databinding.ActivityMainBinding
import cz.sazel.hellokotlin.jvm.Math
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch

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

    private fun startClick() {
        sharedClass.printMe()
        lifecycleScope.launch(Dispatchers.IO) {
            sharedClass.printPrimes(1000)
        }
    }
}
