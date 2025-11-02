val kotlin_version: String by extra
plugins {
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.skie)
    kotlin("multiplatform")
}

kotlin {
    jvmToolchain(17)
    androidTarget {
    }

    jvm {
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

    applyDefaultHierarchyTemplate()

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
        iosArm64(),
        iosSimulatorArm64(),
        macosArm64(),
        macosX64()
    ).forEach {
        if (it.name.startsWith("ios")) {
            it.binaries.framework {
                baseName = "hello_shared"
                isStatic = true
            }
        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(libs.kotlinx.coroutines.core)
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(libs.kotlin.test)
            }
        }
        val jvmMain by getting {

        }
        val jvmTest by getting

        val jsMain by getting {
            dependencies {
                implementation(libs.kotlinx.coroutines.js)
            }
        }

        val jsTest by getting
        val linuxX64Main by getting
        val linuxArm64Main by getting
        val nativeMain by getting
        val iosMain by getting {
            dependsOn(nativeMain)
        }

        val androidMain by getting {
            dependsOn(jvmMain)
            dependencies {
                implementation(libs.appcompat)
            }
        }
    }
}

skie {
    features {
        enableSwiftUIObservingPreview = true
    }
}

android {
    compileSdk = 34
    namespace = "cz.sazel.hellokotlin.lib"
}
