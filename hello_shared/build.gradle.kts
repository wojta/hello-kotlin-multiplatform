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
            if (System.getenv("CIRCLECI") == null) { //skip tests in CI as it doesn't work there
                testTask {
                    useKarma {
                        useFirefox()
                    }
                }
            }
        }
        nodejs()
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
        val androidMain by getting {
            dependsOn(jvmMain)
        }
    }

}

android {
    compileSdk = 32
    namespace = "cz.sazel.hellokotlin.lib"
}
