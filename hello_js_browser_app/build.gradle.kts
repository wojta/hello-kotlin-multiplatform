plugins {
    kotlin("js")
}

dependencies {
    implementation(project(":hello_shared"))
    testImplementation(kotlin("test"))
    testImplementation(project(":hello_shared"))
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
                    useChromeHeadless()
                }
            }
        }
    }

    tasks.withType(Copy::class.java) {
        //TODO this is workaround for a bug during build, complaining about package.json being duplicated...
        duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    }

}
