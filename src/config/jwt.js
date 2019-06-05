import jwt from 'jsonwebtoken';

const secret = "wunmis-andela-automart-challenge";

export const generateToken = (payload) => {
    //synchronous token generation
    let token;
    try{
        token = jwt.sign(payload, secret);
    } catch (e) {
        console.log("Couldn't generate token.");
    }
    return token;
}

export const verifyToken = (token) => {
    let decodedPayload;
    
    //synchronous token verification
    try {
        decodedPayload = jwt.verify(token, secret);
    } catch (e) {
        console.log("Couldn't verify token.");
    }

    return decodedPayload;
}

