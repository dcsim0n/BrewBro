
const api = {
  all_breweries : ( ) => "https://api.openbrewerydb.org/breweries",
  by_state : ( state ) => `https://api.openbrewerydb.org/breweries?by_state=${ state }`,
  by_tag : ( tag ) => `https://api.openbrewerydb.org/breweries?by_tag=${ tag }`
};

module.exports = api
