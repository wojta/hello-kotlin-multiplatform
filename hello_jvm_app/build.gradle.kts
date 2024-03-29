plugins {
    application
    kotlin("jvm")
}

java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

application.mainClassName = "cz.sazel.hellokotlin.MainKt"

dependencies {
    implementation(project(":hello_shared"))
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

tasks.withType<Jar> {
    manifest {
        attributes["Main-Class"] = "cz.sazel.hellokotlin.MainKt"
    }

    duplicatesStrategy = DuplicatesStrategy.EXCLUDE

    sourceSets["main"].java {
        srcDir("src/main/kotlin")
    }
    sourceSets["test"].java {
        srcDir("src/test/kotlin")
    }

    // To add all of the dependencies otherwise a "NoClassDefFoundError" error
    from(sourceSets.main.get().output)

    dependsOn(configurations.runtimeClasspath)
    from({
        configurations.runtimeClasspath.get().filter { it.name.endsWith("jar") }.map { zipTree(it) }
    })
}
