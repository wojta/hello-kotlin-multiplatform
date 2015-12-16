package cz.sazel.hellokotlin

/**
 * Created by wojta on 15.12.15.
 */
class Pokusik {

    internal var test:String=""
        get() = "toto je testik " + field
        set(value) {
              field=value
        }

}