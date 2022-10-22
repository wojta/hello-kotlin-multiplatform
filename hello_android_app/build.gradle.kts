plugins {
    id("com.android.application")
    kotlin("multiplatform")
}

kotlin {
    android()
    sourceSets {
        val androidMain by getting {
            dependencies {
                implementation(libs.appcompat.get())
                implementation(project(":hello_lib"))
            }
        }
    }
}


android {
    compileSdk = 32

    buildFeatures {
        viewBinding = true
    }

    defaultConfig {
        applicationId = "cz.sazel.hellokotlin"
        minSdk = 14
        targetSdk = 32
        versionCode = 2
        versionName = "1.2"
    }

    buildTypes {
        named("release") {
            isMinifyEnabled = false
            setProguardFiles(listOf(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro"))
        }
    }

}
