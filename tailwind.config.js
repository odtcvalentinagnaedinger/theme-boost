const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            md: ' 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, .05)',
            lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            outline: '0 0 0 3px rgba(66,153,225,0.5)',
            focus: '0 0 0 3px rgba(66,153,225,0.5)',
            'none': 'none',
        },
        extend: {
            flex: {
                '0-0-05': '0 0 50%'
            },
            fontSize: {
                'icon-size': '2.5rem'
            },
            gridTemplateColumns: {
                '1-340': '1fr 340px',
                '120-1xfr': '120px 1fr',
                '120-2xfr': '120px 1fr 1fr',
            },
            gridTemplateRows: {
                'auto-1fr': 'auto 1fr',
            },
            gridRowEnd: {
                'span-3': 'span 3',
            },
            gridColumnEnd: {
                'span-2': 'span 2',
                'span-3': 'span 3',
            },
            width: {
                '9': '2.25rem',
                'fix-560px': '560px',
            },
            height: {
                'fix-24px': '24px',
                'fix-40px': '40px',
                'fix-48px': '48px',
                'fix-120px': '120px',
                'fix-132px': '132px',
                'fix-240px': '240px',
            },
            minHeight: {
                '400px': '400px',
            },
            maxHeight: {
                '316px': '316px',
                '736px': '736px',
            },
            maxWidth: {
                '124px': '124px',
                '126px': '126px',
                '192px': '192px',
                '480px': '480px',
                '424px': '424px',
                '840px': '840px',
                '960px': '960px',
                '1120px': '1120px',
                '1218px' : '1218px',
                '1240px' : '1240px',
            },
            margin: {
                'center': '0 auto'
            },
            transitionProperty: {
                'visibility': 'visibility',
                'height': 'height'
            },
            inset: {
                'full': '100%'
            },
            transitionDuration: {
                '20': '0.2s',
                '30': '0.3s'
            },
            transitionTimingFunction: {
                'ease-out-expo': 'cubic-bezier(0.39, 0.58, 0.57, 1)',
            },
            borderWidth: {
                '2px': '2px',
                '3px': '3px'
            },
        }
    },
    plugins: [
        plugin(function({ addUtilities }) {
            const utilities = {
                '.justify-self-center': {
                    justifySelf: 'center'
                },
                '.justify-self-end': {
                    justifySelf: 'end'
                },
                '.translate-right': {
                    'transform': 'translateX(0)',
                },
                '.translate-left': {
                    'transform': 'translateX(-135%)',
                },
                '.webkit-transition': {
                    transitionProperty: '-webkit-transform'
                },
                '.self-baseline': {
                    alignSelf: 'baseline'
                }
            }

            addUtilities(utilities)
        })
    ],
    variants: {
      borderWidth: ['responsive', 'hover', 'focus'],
    }
}
