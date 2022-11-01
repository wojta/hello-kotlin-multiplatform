val kotlin_version: String by extra
plugins {
    id("com.android.library")
    kotlin("multiplatform")
}

kotlin {
    android {

    }

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }

    js(IR) {
        browser {
            testTask {
                useKarma {
                    useChromeHeadless()
                }
            }
        }
        nodejs()
    }

//    val hostOs = System.getProperty("os.name")
//    val isMingwX64 = hostOs.startsWith("Windows")
//    val nativeTarget = when {
//        //hostOs == "Mac OS X" -> macosX64("native")
//        hostOs == "Linux" -> linuxX64("native")
//        isMingwX64 -> mingwX64("native")
//        else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
//    }
//
    listOf(
        linuxX64("linuxX64"),
        linuxArm64("linuxArm64"),
//        mingwX86("mingwX86"),
//        mingwX64("mingwX64")
    ).forEach {

    }

    sourceSets {
        val commonMain by getting {

        }
        val commonTest by getting {
            dependencies {
                implementation(libs.kotlin.test)
            }
        }
        val jvmMain by getting {

        }
        val jvmTest by getting

        val jsMain by getting

        val jsTest by getting
        val linuxX64Main by getting
        val linuxArm64Main by getting

        val nativeMain by creating {
            dependsOn(commonMain)
            linuxX64Main.dependsOn(this)
            linuxArm64Main.dependsOn(this)
        }
        val nativeTest by creating {
            dependsOn(commonTest)
            dependencies {
                implementation(libs.kotlin.test)
            }
        }

        val androidMain by getting {
            dependsOn(jvmMain)
        }
    }

}

android {
    compileSdk = 32
    namespace = "cz.sazel.hellokotlin.lib"
}
