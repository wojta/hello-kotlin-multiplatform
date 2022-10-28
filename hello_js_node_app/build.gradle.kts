import org.jetbrains.kotlin.gradle.dsl.KotlinJsCompile

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
        binaries.library()
        nodejs {

        }
    }
}

tasks.withType(Copy::class.java) {
    //TODO this is workaround for a bug during build, complaining about package.json being duplicated...
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}

tasks.named<KotlinJsCompile>("compileKotlinJs").configure {
    kotlinOptions.moduleKind = "commonjs"

}
