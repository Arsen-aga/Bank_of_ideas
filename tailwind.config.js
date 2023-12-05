module.exports = {
  purge: {
    enabled: false,
    content: ['./app/*.html', './app/**/*.svg'],
  },
  theme: {
    screens: {
      'sm': '468px',
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1550px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        xs: '16px',
        sm: '16px',
      },
    },
    fontFamily: {
      'nunito-700': 'NunitoSans-Bold',
      'nunito-400': 'NunitoSans-Regular',
    },
    extend: {
      colors: {
        'header': '#6EBB62',
        'btn': '#6EBB62',
        'btn-sec-21': '#4042A4',
        'btn-sec-22': '#189113',
        'default': '#C8F3C8',
        'block-r': '#ddd9f9',
        'block-l': '#c8f2ca',
        'default-text': '#333333',
      },
      backgroundImage: {
        'section-1': "url('../img/section-1/bg.jpg')",
        'section-4': "url('../img/section-4/bg-1.png')",
        'bg-grad': 'linear-gradient(180deg, rgba(221,217,249,1) 0%, rgba(201,240,204,1) 100%)',
        'footer': "url('../img/footer.jpg')",
      },
      maxWidth: {

      },
      spacing: {

      },
      gridTemplateColumns: {

      },
      lineHeight: {

      },
    },
  },
  plugins: [],
}
