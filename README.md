# Multiplatform Kotlin Hello World

This project demonstrates sharing runtime independent code between different Kotlin's runtimes ([Java](http://www.java.com)/[Android](https://developer.android.com/index.html)/[Javascript](https://en.wikipedia.org/wiki/JavaScript)). It uses [Gradle](http://gradle.org/) build engine.

Mostly it's inspired by Jetbrains' code - [here](https://github.com/JetBrains/kotlin/tree/master/libraries/tools/kotlin-gradle-plugin/src/test/resources/testProject/kotlin2JsProject) 

## What is Kotlin
![Kotlin](https://upload.wikimedia.org/wikipedia/commons/b/b5/Kotlin-logo.png)
[Kotlin](http://kotlinlang.org) is a programming language developed by [Jetbrains](https://www.jetbrains.com/). It's fully compatibile with [Java](http://www.java.com) runtimes and also there is (currently experimental) support for [Javascript](https://en.wikipedia.org/wiki/JavaScript) transpilation. 

## What is it doing?
* writes Hello World!
* calculates first 1000 prime numbers (this part is shared between runtimes) and prints them

## Structure
* ``hello_android`` - version for Android runtime
* ``hello_java`` - version for Java runtime
* ``hello_js`` - version for JavaScript (web browser) runtime
* ``hello_shared`` - shared Kotlin code (calculating prime numbers)
* ``web`` - demo web page for JavaScript version

## How it works
Currently it's done by terrible hack in [hello_shared/build.gradle](https://github.com/wojta/hello-kotlin/blob/master/hello_shared/build.gradle). We need different build process in ``hello_shared`` module. It's determined by name of the task that was started. I would be happy, if anyone can suggest a better solution.


## Building and running the demo
It was checked only under Linux Mint, probably there won't be any problems with most Unix-like environments.

### Android version
You can use Android Studio to run the application. To build from command line, you can use

    # ./gradlew hello_android:build

Build file is located in your ``build/hello-kotlin/hello_android/outputs/apk`` 
![Hello Android]
(https://raw.githubusercontent.com/wojta/hello-kotlin/master/.images/hello_android.png)
    
### Java version

    # ./gradlew hello_java:run

![Hello Java]
(https://raw.githubusercontent.com/wojta/hello-kotlin/master/.images/hello_java.png)
    
### JavaScript version (assuming default Google Chrome is installed)

    # ./gradlew hello_js:run

![Hello JavaScript]
(https://raw.githubusercontent.com/wojta/hello-kotlin/master/.images/hello_js.png)

    
### to see all build options    
    
    # ./gradlew tasks --all
    
## License
Do whathever you want with this. 
