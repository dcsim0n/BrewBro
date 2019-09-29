/*
| Brewery model
*/
const request = require('request-promise-native');
const api = require('../api_routes');

class Brewery {

    static findById( id ){
        return request.get( api.by_id( id ))
        .then( body => {
            return JSON.parse( body );
        });
    }
    
    static find( query ){
        if( !query ){
            return request.get( api.all_breweries )
            .then( body => {
                return JSON.parse( body ); 
            });
        }
        if( query.state ){
            return request.get( api.by_state( query.state ))
            .then( body => {
                return JSON.parse( body );
            })
        }

    }
}

module.exports = Brewery;
