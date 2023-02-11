jQuery("#carousel").owlCarousel({
  autoplay: false,
  rewind: true,
  margin: 20,
  infnite:true,
  loop: true,
  responsiveClass: true,
  autoHeight: true,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});

