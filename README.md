# Kotlin Hello World project both for Java and Javascript

This project demonstrates sharing runtime independent code between versions for different Kotlin's runtimes (Java and Javascript). It uses [Gradle](http://gradle.org/) build engine.

Mostly it's inspired by Jetbrains' code - [here](https://github.com/JetBrains/kotlin/tree/master/libraries/tools/kotlin-gradle-plugin/src/test/resources/testProject/kotlin2JsProject) 


## Structure
* ``hello_java`` - version for Java runtime
* ``hello_js`` - version for JavaScript (web browser) runtime
* ``hello_shared`` - shared Kotlin code
* ``web`` - demo web page for JavaScript version

## How to share Kotlin code between different runtimes
Basically you can write independent code only by using Kotlin libraries. Currently I only use default [stdlib](https://kotlinlang.org/api/latest/jvm/stdlib/).  

## How it works
Currently it's done by terrible hack in [hello_shared\build.gradle](https://github.com/wojta/hello-kotlin/blob/master/hello_shared/build.gradle). We need different build process in ``hello_shared`` module. It's determined by name of the task that was started. I would be happy, if anyone can suggest a better solution,


## Building and running the demo
It was checked only under Linux Mint, probably there won't be any problems with most Unix-like environments.

    
### Java version

    # ./gradlew hello_java:run
    
### JavaScript version (assuming default Google Chrome is installed)

    # ./gradlew hello_js:run
    
### to see all build options    
    
    # ./gradlew tasks --all
    
## License
Do whathever you want with this. 
