// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            height: {
                '96': '24rem',
                '128': '32rem'
            },
            width: {
                '96': '24rem',
                '128': '32rem'
            },
            zIndex: {
                '-10': '-10',
            }
        }
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
}