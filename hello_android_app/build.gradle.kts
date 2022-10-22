plugins {
    id("com.android.application")
}

dependencies {
    implementation(libs.appcompat.get())
    implementation(project(":hello_shared"))
    androidTestImplementation(libs.bundles.androidx.test)
    testImplementation(kotlin("test"))
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
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        named("release") {
            isMinifyEnabled = false
            setProguardFiles(listOf(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro"))
        }
    }

}
