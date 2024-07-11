plugins {
    kotlin("multiplatform")
}

kotlin {

    listOf(
        linuxX64(),
        linuxArm64(),
//        mingwX86(),
//        mingwX64()
    ).forEach {
        it.binaries  {
            executable("hello_console_app") {
                entryPoint = "cz.sazel.hellokotlin.main"
            }
        }
    }

    applyDefaultHierarchyTemplate()

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

        val linuxArm64Main by getting
        val linuxX64Main by getting
//        val mingwX86Main by getting
//        val mingwX64Main by getting
    }
}
