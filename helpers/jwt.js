const jwt = require('jsonwebtoken')

const generarJWT = ( uid, name ) =>{

    const payload = {uid, name};

    return new Promise( (resolve, reject ) => {

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (error, token) =>{
    
            if( error ){
                //TODO MAL
                console.log(error);
                reject(error);
    
            }else{
                // Todo Bien
                resolve( token );
            }
    
        }
        );

    })



}

module.exports = {
    generarJWT
}


