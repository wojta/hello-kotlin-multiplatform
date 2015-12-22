package cz.sazel.hellokotlin


import android.os.AsyncTask
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.TextView
import android.widget.VideoView
import butterknife.Bind
import butterknife.ButterKnife
import butterknife.OnClick
import cz.sazel.hellokotlin.console.Console
import org.jetbrains.anko.async
import org.jetbrains.anko.uiThread

class MainActivity : AppCompatActivity() {

    @Bind(R.id.tvConsole)
    lateinit var tvConsole: TextView

    lateinit var sharedClass:SharedClass

    lateinit private var console: Console

    protected override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        ButterKnife.bind(this)
        console=Console(tvConsole)
        sharedClass= SharedClass(console)
        sharedClass.number=1234
        sharedClass.text="Android"
    }

    @OnClick(R.id.btStart)
    protected fun startClick(v: View) {
        sharedClass.printMe()
        //we can't have direct sharedClass.printPrimes(1000) there, we need to do it asynchronously to not block the UI
        async {
            val primes=sharedClass.calcPrimes(1000);
            val output=primes.map { prime -> prime.toString() }.reduce { s1, s2 -> s1+"\n"+s2 }
            uiThread {
                console.println(output)
            }
        }
    }

}
