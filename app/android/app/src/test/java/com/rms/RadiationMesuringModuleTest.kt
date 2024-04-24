package com.rms

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class RadiationMeasuringModuleTest {
    @Test
    fun `calculate radiation gives correct total dose for 0h exposure`() {
        val module = RadiationMeasuringModule()
        val hoursInSpace = 0.0 // 0 hours in space
        var result = 0.0

        // Callback to capture the result
        val callback: Callback = { dose ->
            result = dose
        }

        // Execute
        module.calculateRadiation(hoursInSpace, callback)

        // Expected calculation: 
        // CosmicDose = 0.5 * 1 * 0 = 0.0
        // SolarDose = 0.5 * 1.5 * 0 = 0.0
        // TotalDose = 0.0 + 0.0 = 0.0
        val expectedDose = 0.0

        // Assertion
        assertEquals(expectedDose, result, 0.01, "The calculated radiation dose should be correct")
    }

    @Test
    fun `calculate radiation gives correct total dose for 1h exposure`() {
        val module = RadiationMeasuringModule()
        val hoursInSpace = 1.0 // 1 hour in space
        var result = 0.0

        // Callback to capture the result
        val callback: Callback = { dose ->
            result = dose
        }

        // Execute
        module.calculateRadiation(hoursInSpace, callback)

        // Expected calculation: 
        // CosmicDose = 0.5 * 1 * 1 = 0.5
        // SolarDose = 0.5 * 1.5 * 1 = 0.75
        // TotalDose = 0.5 + 0.75 = 1.25
        val expectedDose = 1.25

        // Assertion
        assertEquals(expectedDose, result, 0.01, "The calculated radiation dose should be correct")
    }

    @Test
    fun `calculate radiation gives correct total dose for 10h exposure`() {
        val module = RadiationMeasuringModule()
        val hoursInSpace = 10.0 // 10 hours in space
        var result = 0.0

        // Callback to capture the result
        val callback: Callback = { dose ->
            result = dose
        }

        // Execute
        module.calculateRadiation(hoursInSpace, callback)

        // Expected calculation: 
        // CosmicDose = 0.5 * 1 * 10 = 5.0
        // SolarDose = 0.5 * 1.5 * 10 = 7.5
        // TotalDose = 5.0 + 7.5 = 12.5
        val expectedDose = 12.5

        // Assertion
        assertEquals(expectedDose, result, 0.01, "The calculated radiation dose should be correct")
    }
}
