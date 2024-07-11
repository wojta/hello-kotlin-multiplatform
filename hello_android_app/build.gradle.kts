import org.jetbrains.kotlin.js.translate.context.Namer.kotlin

plugins {
    id("com.android.application")
    kotlin("multiplatform")
}

kotlin {
    jvmToolchain(17)

    androidTarget {
        dependencies {
            implementation(libs.appcompat.get())
            implementation(project(":hello_shared"))
            androidTestImplementation(libs.bundles.androidx.test)
            testImplementation(libs.kotlin.test)
        }
    }
}

android {
    compileSdk = 34
    namespace= "cz.sazel.hellokotlin"

    buildFeatures {
        viewBinding = true
    }

    defaultConfig {
        applicationId = "cz.sazel.hellokotlin"
        minSdk = 14
        targetSdk = 34
        versionCode = 2
        versionName = "1.2"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        named("release") {
            isMinifyEnabled = false
            setProguardFiles(listOf(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro"))
        }
    }
    namespace = "cz.sazel.hellokotlin"

}
