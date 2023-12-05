export default {
  namespaced: true,
  state: {
    suppliers: [
      {
        id: 1,
        imgSrc: 'https://vnebo.ua/files/products/vnebo_blanik_22.1200x800.jpg?28fdeeb34cc2de18d368f1b016d0cb97',
        title: 'Політ',
        icons: [
          {
            id: 1,
            src: 'https://static.vecteezy.com/system/resources/previews/005/576/332/original/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg',
          },
          {
            id: 2,
            src: 'https://media.istockphoto.com/id/1414160809/vector/airplane-icon-plane-flight-pictogram-transport-symbol-travel.jpg?s=612x612&w=0&k=20&c=BtgJVW1RQ9a4i8sTMm-Uk-HAFI2sNbDFQVvHbPKbQA4=',
          },
        ],
      },
      {
        id: 2,
        imgSrc:
          'https://media.istockphoto.com/id/1135795506/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BF%D0%BE%D1%82%D1%83%D0%B6%D0%BD%D0%B8%D0%B9-100-%D0%B7%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%BB%D0%B5%D0%BD%D1%96%D1%81%D1%82%D1%8C-%D0%BA%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%96%D0%B2-%D0%B3%D0%B0%D1%80%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B7-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D1%8E-%D1%81%D1%82%D1%80%D1%96%D1%87%D0%BA%D0%BE%D1%8E.jpg?s=612x612&w=0&k=20&c=CcHU1d5YWsclnp8do0byxiQ7f5-_ogmLBpfSPsZDvR8=',
        title: 'Надійність',
        icons: [
          {
            id: 1,
            src: 'https://static.vecteezy.com/system/resources/previews/005/576/332/original/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg',
          },
        ],
      },
      {
        id: 3,
        imgSrc:
          'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/8/8e/FAA-8083-3A_Fig_12-1.PNG&w=640&q=50',
        title: 'Швидка',
        icons: [
          {
            id: 1,
            src: 'https://static.vecteezy.com/system/resources/previews/005/576/332/original/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg',
          },
          {
            id: 2,
            src: 'https://media.istockphoto.com/id/1414160809/vector/airplane-icon-plane-flight-pictogram-transport-symbol-travel.jpg?s=612x612&w=0&k=20&c=BtgJVW1RQ9a4i8sTMm-Uk-HAFI2sNbDFQVvHbPKbQA4=',
          },
          {
            id: 3,
            src: 'https://static.vecteezy.com/system/resources/previews/009/685/819/original/sign-of-the-ship-symbol-is-isolated-on-a-white-background-ship-icon-color-editable-vector.jpg',
          },
        ],
      },
      {
        id: 4,
        imgSrc: 'https://vacancyimages.rabota.ua/cdn-cgi/image/w=200/e4e5541b-b176-4e68-bef4-fd3b7971271f.jpeg',
        title: 'Економ',
        icons: [
          {
            id: 1,
            src: 'https://static.vecteezy.com/system/resources/previews/005/576/332/original/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg',
          },
        ],
      },
    ],
  },
  getters: {
    suppliers: (state) => state.suppliers,
  },
  mutations: {},
  actions: {},
}
