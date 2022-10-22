enableFeaturePreview("VERSION_CATALOGS")

dependencyResolutionManagement {
    //repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }

    versionCatalogs {
        val kotlinVersion = "1.7.20"
        create("libs") {
            version("kotlin", kotlinVersion)
            version("coroutines", "0.8.8")
            version("appcompat", "1.5.1")
            version("androidXTestVersion", "1.4.0")

            //appcompat
            library("appcompat", "androidx.appcompat", "appcompat").versionRef("appcompat")

            //android test
            library("androidx.test.runner", "androidx.test", "runner").versionRef("androidXTestVersion")
            library("androidx.test.core", "androidx.test", "core").versionRef("androidXTestVersion")

            bundle("androidx.test", listOf("androidx.test.runner", "androidx.test.core"))
        }
    }
}

include(":hello_shared")
include(":hello_android_app")
include(":hello_jvm_app")
include(":hello_js_node_app")
include(":hello_js_browser_app")
