package cz.sazel.hellokotlin

/**
 * Created by wojta on 15.12.15.
 */
class Hello {

    internal var test:String=""
        get() = "this is a test " + field
        set(value) {
              field=value
        }

}