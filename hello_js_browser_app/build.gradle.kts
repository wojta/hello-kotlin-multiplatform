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
            if (System.getenv("CIRCLECI") == null) { //skip tests in CI as it doesn't work there
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

}
