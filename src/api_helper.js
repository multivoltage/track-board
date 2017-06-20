const URL_API = 'https://raw.githubusercontent.com/multivoltage/track-board/master/src/data.json';

const api_helper = {

    GetData: () => {
        // TODO - cache request
        // if(this.entities)
        //     return Promise.resolve(this.entities);
        
        // else 
        return new Promise((resolve,reject) => {
            fetch(URL_API)
            .then((res) => res.json())
            .then((dataObj) => {
                let entities = dataObj.entities.concat(dataObj.entities);
                let users = dataObj.users;
                let data = {
                    entities: entities,
                    users: users
                };               
                resolve(data);
            })
            .catch((e) => {
                reject(e);
            });        
        });
    },

    GetEntity: (entity_id) => {
        return new Promise((resolve,reject) => {
            fetch(URL_API)
            .then((res) => res.json())
            .then((dataObj) => {
                let entities = dataObj.entities.concat(dataObj.entities);
                let entityFound = entities.find((e) => e.id === entity_id);
                resolve(entityFound);
            })
            .catch((e) => {
                reject(e);
            });
        });
    }
}

export default api_helper;


