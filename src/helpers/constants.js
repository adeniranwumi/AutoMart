export const isProduction = () => process.env.NODE_ENV === 'production';

export const devDomain = 'http://localhost:3000';

const versionOneRoot = '/api/v1';

export const testRootUrl = (!isProduction() ? devDomain : '') + versionOneRoot;

export const rootUrl = versionOneRoot;

export const userSignUpUrl = `${rootUrl}/sign-up`;
export const userSignInUrl = `${rootUrl}/sign-in`;
export const userDetailsUrl = `${rootUrl}/user`;
export const carSaleAdUrl = `${rootUrl}/car`;

export const message = 'This is Automart and you are seeing an invalid endpoint on this version of the API';
