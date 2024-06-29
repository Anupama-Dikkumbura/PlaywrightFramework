import { test } from '@playwright/test';
import {decryptEnvFile, encryptEnvFile} from "../utils/EncryptEnvFile";
import {convertCsvFileToJsonFile} from "../utils/CsvToJsonUtil";

test.describe.skip('util functions',()=>{
    test.skip('env test', async({page})=>{
        // console.log(process.env.NODE_ENV);
        // console.log(process.env.userid);
        // console.log(process.env.password);

        // const plaintext = "Hello, Anupama!";
        // const encryptedText = encrypt(plaintext);
        // console.log('SALT: ', process.env.SALT);
        // console.log('Encrypted: ', encryptedText);
        // const decryptedText= decrypt(encryptedText);
        // console.log('Decrypted: ', decryptedText);
        // encryptEnvFile();
        //decryptEnvFile();
    });

    test('encrypt env', async ({page})=>{
        encryptEnvFile();
    })

    test.skip('decrypt env', async ({page})=>{
        decryptEnvFile();
    })

    //Convert CSV files to JSON
    test.skip("csv to json", async({page})=>{
        convertCsvFileToJsonFile("data.csv","datademo.json")
    })

})