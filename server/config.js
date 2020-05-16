module.exports = {
  baseUrl: {
    protocol: 'http',
    hostname: 'api.openweathermap.org',
    path: '/data/2.5/weather',
  },

  query: {
    name: 'q',
    id: 'id',
    coordinates: {
      latitude: 'lat',
      longitude: 'lon',
    },
    zipcode: 'zip',
  },

  APIkey: 'e76d659427500cb282d3910fd17e5943',
};
