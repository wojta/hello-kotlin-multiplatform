import org.jetbrains.kotlin.gradle.dsl.KotlinJsCompile

plugins {
    kotlin("js")
}

dependencies {
    implementation(project(":hello_lib"))
    testImplementation(kotlin("test"))
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled = true
                }
            }
            testTask {
                useKarma {
                    useFirefox()
                }
            }
        }
    }
}

tasks.withType(Copy::class.java) {
    //TODO this is workaround for a bug during build, complaining about package.json being duplicated...
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}
