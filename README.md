# Multiplatform Kotlin Hello World

This project demonstrates sharing runtime independent code between different Kotlin's runtimes ([Java](http://www.java.com)/[Android](https://developer.android.com/index.html)/[JavaScript](https://en.wikipedia.org/wiki/JavaScript)). It uses [Gradle](http://gradle.org/) build engine.

Mostly it's inspired by Jetbrains' code - [here](https://github.com/JetBrains/kotlin/tree/master/libraries/tools/kotlin-gradle-plugin/src/test/resources/testProject/kotlin2JsProject) 

## What is Kotlin?
[![Kotlin](https://upload.wikimedia.org/wikipedia/commons/b/b5/Kotlin-logo.png)
otlin](http://kotlinlang.org) is a programming language developed by [Jetbrains](https://www.jetbrains.com/). It's fully compatibile with [Java](http://www.java.com) runtimes and also there is (currently experimental) support for [JavaScript](https://en.wikipedia.org/wiki/JavaScript) transpilation. 

## What is it doing?
* writes Hello World!
* calculates first 1000 prime numbers (this part is shared between runtimes) and prints them

## Structure
* ``hello_android`` - version for Android runtime
* ``hello_java`` - version for Java runtime
* ``hello_ikvm`` - version for IKVM - .NET runtime 
* ``hello_js`` - version for JavaScript (web browser) runtime
* ``hello_shared`` - shared Kotlin code (calculating prime numbers)
* ``web`` - demo web page for JavaScript version

## How it works?
Currently it's done by using sourcefiles from `hello_shared` module. In older versions, it was done by terrible hack and this approach is much simpler. 

Unfortunately `hello_js` module has still some issues with dependency recognition in IntelliJ, also it requires compile dependency, so the `hello_shared` module gets compiled twice. I hope that there would be some change in `kotlin2js` plugin to allow properly include other source files.


## Building and running the demo
It was checked only under Linux Mint, probably there won't be any problems with most Unix-like environments.

### Android version
You can use Android Studio to run the application. To build from command line, you can use

    # ./gradlew hello_android:build

and APK file is located in your ``build`` directory.

![Hello Android]
(.images/hello_android.png)
    
### Java version

    # ./gradlew hello_java:build

You can than run the JAR file using `java -jar` command. 

![Hello Java]
(.images/hello_java.png)

### IKVM version

    # ./gradlew hello_ikvm:ikvm

IKVM is experimental compiler of Java bytecode to .NET bytecode. So this makes `hello_ikvm.exe` file in `hello_ikvm/build/libs` directory. It can be executed on Windows or using Mono/Wine on Linux.
    
### JavaScript version 

    # ./gradlew hello_js:build

Web files are stored in `hello_js/web`. 
You can use some web server or *Open in Browser* option in context menu on file in IntelliJ.  

![Hello JavaScript]
(.images/hello_js.png)

    
### to see all build options    
    
    # ./gradlew tasks --all
    
## License
Do whathever you want with this. 
