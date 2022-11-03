const {createApp} = Vue;

createApp({
  data() {
    return {
      sliderItems: [
        {
          title: "Svezia",
          description: "Stoccolma, la capitale, è una città moderna, anche se vi sono zone che conservano un'atmosfera paesana.",
          image: "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg"
        },
        {
          title: "Perù",
          description: "Il Perù è un paese pieno di ricchezze. La natura selvaggia si mischia a una cultura millenaria, fatta di storie affascinanti e di leggende che si perdono indietro nel tempo.",
          image: "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg"
        },
        {
          title: "Cile",
          description: "Tanti paesi in uno: ecco l'essenza del Cile. Tanto lungo geograficamente quanto multiforme per clima, paesaggi ed ecosistemi. Gli altopiani aridi del deserto di Atacama sono diversissimi dalle vigne colorate della Valle di Casablanca.",
          image: "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c"
        },
        {
          title: "Argentina",
          description: "L'incredibile varietà della sua geografia e la sua vivace cultura, un mix di radici indigene e influenze europee, danno vita a un paese ricchissimo di spunti, contrasti e grandi passioni.",
          image: "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg"
        },
        {
          title: "Colombia",
          description: "Dalle cordigliere al deserto, dal Mar dei Caraibi fino all'Amazzonia, la Colombia è una destinazione eccitante che offre qualcosa per tutti i gusti.",
          image: "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop"
        }
      ],
      counterIndex: 0
    }
  },
  methods: {
  },
  mounted() {

  },
  created() {

  }
}).mount("#app");