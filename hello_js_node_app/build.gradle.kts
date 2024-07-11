import org.jetbrains.kotlin.gradle.dsl.KotlinJsCompile

plugins {
    kotlin("multiplatform")
}

kotlin {
    js(IR) {
        binaries.library()
        nodejs {
            useCommonJs()
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
        val jsMain by getting
    }
}

//tasks.withType(Copy::class.java) {
//    //TODO this is workaround for a bug during build, complaining about package.json being duplicated...
//    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
//}
