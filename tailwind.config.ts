module.exports = {
    theme: {
        extend: {
            colors: {
                ffGray: '#0d0d11',     // Deep matte charcoal turn-out coat base
                ffOrange: '#ff4500',   // Blazing 3rd Gen Pyrokinesis Orange
                ffRed: '#d6001c',      // Core Overheat Red
                ffThermal: '#00f0ff',  // Special Fire Force Glowing Blue Protective Trim
            },
            animation: {
                'ember-drift': 'emberDrift 6s ease-in-out infinite',
                'thermal-pulse': 'thermalPulse 2s ease-in-out infinite',
            },
            keyframes: {
                emberDrift: {
                    '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 0.2 },
                    '50%': { transform: 'translateY(-40px) translateX(10px) rotate(180deg)', opacity: 0.6 },
                },
                thermalPulse: {
                    '0%, 100%': { opacity: 0.4, filter: 'drop-shadow(0 0 2px #00f0ff)' },
                    '50%': { opacity: 1, filter: 'drop-shadow(0 0 8px #00f0ff)' },
                }
            }
        },
    },
}