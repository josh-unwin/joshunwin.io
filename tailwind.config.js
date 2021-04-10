const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      ultrawide: '.2em'
    },
    rotate: {
      '6': '6deg',
      '3': '3deg',
      '90': '90deg'
    },
    extend: {
      boxShadow: {
        card: '3px 3px 15px rgba(0,0,0,0.1)',
        cardhover: '5px 5px 10px rgba(0,0,0,0.2)',
        cardDark: '3px 3px 15px rgba(0,0,0,0.4)',
        cardhoverDark: '5px 5px 10px rgba(0,0,0,0.6)'
      },
      inset: {
        '-55': '-55px',
      },
      animation: {
        'slow-pulse': 'blinker 1.5s ease-out infinite'
      },
      keyframes: {
        blinker: {
          '50%': { opacity: '0' }
        }
      },
      spacing: {
        'card-mob-height': '34rem',
        'card-mob-width': '20rem',
        'card-height': '20rem',
        'card-width': '35rem',
      },
      colors: {
        gray: {
          '950': '#111112'
        },
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        primarycolor: {
          light: '#8cdeff',
          DEFAULT: '#70d6ff',
          dark: '#64c8f0',
          darker: '#3fb6e6',
        },
      },
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans],
        code: ['Share Tech Mono', ...fontFamily.mono],
        title: ['Roboto', ...fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primarycolor.darker'),
              '&:hover': {
                color: theme('colors.primarycolor.DEFAULT')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
