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
        binaries.library()
        nodejs {

        }
    }
}

tasks.withType(Copy::class.java) {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}

tasks.named<KotlinJsCompile>("compileKotlinJs").configure {
    kotlinOptions.moduleKind = "commonjs"

}
