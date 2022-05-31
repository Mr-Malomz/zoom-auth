import { Appwrite } from 'appwrite';

const sdk = new Appwrite();
sdk.setEndpoint('http://localhost/v1').setProject('6294eecca5821a6f92f9');

export default sdk;
