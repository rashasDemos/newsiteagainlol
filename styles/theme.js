export default {
    breakpoints: ['640px', '1024px','1280px'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
      body: 'Inter, sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 18, 20, 24, 32, 36, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
      secondary: '#30c',
      muted: '#f6f6f6',
      gray900: '#EDEDED',
      gray800: '#E0E0E0',
      gray700: '#C5C5C5',
      gray600: '#B5B5B5',
      gray500: '#A1A1A1',
      gray400: '#7E7E7E',
      gray300: '#676767',
      gray200: '#505050',
      gray100: '#393939',
      blue900: '#CDE0F2',
      blue800: '#A8D2F9',
      blue700: '#7CB8EF',
      blue600: '#5EA4E5',
      blue500: '#307EC6',
      blue400: '#2E71AF',
      blue300: '#2E5B85',
      blue200: '#2B465F',
      blue100: '#1C3144',
    },
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
      },
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      h1: {
        variant: 'text.heading',
        fontSize: 5,
      },
      h2: {
        variant: 'text.heading',
        fontSize: 4,
      },
      h3: {
        variant: 'text.heading',
        fontSize: 3,
      },
      h4: {
        variant: 'text.heading',
        fontSize: 2,
      },
      h5: {
        variant: 'text.heading',
        fontSize: 1,
      },
      h6: {
        variant: 'text.heading',
        fontSize: 0,
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
    },
  }