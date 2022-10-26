
val KotlinJsBrowserDsl.isCircleCI: Boolean
    get() = System.getenv("CIRCLECI") != null
