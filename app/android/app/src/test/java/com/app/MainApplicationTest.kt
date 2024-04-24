package com.app

import kotlin.test.Test
import kotlin.test.assertNotNull
import kotlin.test.assertEquals

class MainApplicationTest {
    @Test fun `test app can be created`() {
        val classUnderTest = MainApplication()
        assertNotNull(classUnderTest.greeting, "app should have a greeting")
        assertEquals("Andorra Space Program - Hello World!", classUnderTest.greeting)
    }
}
