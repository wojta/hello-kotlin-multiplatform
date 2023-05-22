import org.jetbrains.kotlin.com.intellij.openapi.util.SystemInfo.isLinux
import org.jetbrains.kotlin.com.intellij.openapi.util.SystemInfo.isWindows
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget

plugins {
    kotlin("multiplatform")
}


kotlin {

    val platforms = mutableListOf<KotlinNativeTarget>()
    if (isLinux) {
        platforms += linuxArm64()
        platforms += linuxX64()
    }

    if (isWindows) {
        platforms += mingwX86()
        platforms += mingwX64()
    }

    platforms.forEach {
        it.binaries {
            executable("hello_console_app") {
                entryPoint = "cz.sazel.hellokotlin.main"
            }
        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(project(":hello_shared"))
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation(project(":hello_shared"))
            }
        }

        val consoleMain by creating {
            dependsOn(commonMain)
            dependencies {
                implementation(project(":hello_shared"))
            }
            if (isLinux) {
                val linuxArm64Main by getting
                val linuxX64Main by getting
                linuxX64Main.dependsOn(this)
                linuxArm64Main.dependsOn(this)
            }
            if (isWindows) {
                val mingwX86Main by getting
                val mingwX64Main by getting
                mingwX86Main.dependsOn(this)
                mingwX64Main.dependsOn(this)
            }
        }
    }
}
