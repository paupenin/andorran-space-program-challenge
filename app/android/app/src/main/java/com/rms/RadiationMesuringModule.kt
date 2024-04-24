package com.rms

// Define Callback type inlined function
typealias Callback = (Double) -> Unit

class RadiationMeasuringModule() {
    companion object {
        const val AVERAGE_COSMIC_RADIATION_RATE = 0.5 // millisieverts per hour
        const val SHIELDING_FACTOR = 1 // 0% effective shielding
        const val SOLAR_RADIATION_MULTIPLIER = 1.5 // Increased exposure to solar activity
    }

    /**
     * Calculate radiation exposure in space based on hours spent.
     * @param hoursInSpace Number of hours spent in space.
     * @param callback Callback to return the result.
     */
    fun calculateRadiation(hoursInSpace: Double, callback: Callback) {
        val cosmicDose = AVERAGE_COSMIC_RADIATION_RATE * SHIELDING_FACTOR * hoursInSpace
        val solarDose = AVERAGE_COSMIC_RADIATION_RATE * SOLAR_RADIATION_MULTIPLIER * hoursInSpace
        val totalDose = cosmicDose + solarDose

        callback.invoke(totalDose)
    }
}