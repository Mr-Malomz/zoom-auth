import { Appwrite } from 'appwrite';

const sdk = new Appwrite();
sdk.setEndpoint('http://localhost/v1').setProject('ADD YOUR PROJECTID HERE');

export default sdk;
