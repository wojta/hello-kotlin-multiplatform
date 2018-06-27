package cz.sazel.hellokotlin

import org.junit.runner.RunWith
import org.junit.runners.Suite

@RunWith(Suite::class)
@Suite.SuiteClasses(MathTest::class, SharedClassTest::class)
class TestSuite