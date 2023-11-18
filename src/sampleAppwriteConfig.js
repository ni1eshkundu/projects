import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = ''
export const DATABASE_ID = ''
export const COLLECTION_ID_MESSAGES = ''


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('655767309cd801713a8f');

export const databases = new Databases(client);
export const account = new Account(client);


export default client;