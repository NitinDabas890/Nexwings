// JavaScript test to check if the file is working
document.addEventListener("DOMContentLoaded", function () {
  alert("script.js is successfully connected and working!");
});
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeOutBg: {
          '0%': { backgroundColor: '#FDBA74' },
          '100%': { backgroundColor: 'transparent' },
        }
      },
      animation: {
        'fade-bg': 'fadeOutBg 5s ease-in-out forwards'
      }
    }
  },
  plugins: [],
};
const sliderEl = document.getElementById('slider');
let interval = setInterval(autoSlide, 4000);

sliderEl.addEventListener('mouseenter', () => clearInterval(interval));
sliderEl.addEventListener('mouseleave', () => {
  interval = setInterval(autoSlide, 4000);
});
