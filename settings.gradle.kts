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

            //appcompat
            library("appcompat", "androidx.appcompat","appcompat").versionRef("appcompat")

//          alias(
//                "libsodium"
//            ).to(
//                "com.ionspin.kotlin",
//                "multiplatform-crypto-libsodium-bindings"
//            ).versionRef("libsodium")

            // Showkase
            //alias("showkase").to("com.airbnb.android", "showkase").versionRef("showKaseVersion")
            //bundle("junit", listOf("junit", "assertj", "mockk", "coroutines-test"))

            //plugin("android-application", "corrigo.android.application").version("1.0.0")

            plugin("kotlin", "kotlin-gradle-plugin").versionRef("kotlin")
            plugin("multiplatform", "org.jetbrains.kotlin.multiplatform").versionRef("kotlin")
        }
    }
}

include(":hello_lib")
include(":hello_android_app")
include(":hello_jvm_app")
include(":hello_js_node_app")
include(":hello_js_browser_app")
