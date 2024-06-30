import {faker} from '@faker-js/faker';
import * as path from "node:path";
import * as fs from "node:fs";
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

interface UserData{
    name: string;
    email: string;
    username: string;
    phone: string;
    age: number;
    address: string;
}

//Function to generate fake user data
const generateUserData = (): UserData =>{
    return{
        name: faker.person.firstName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        phone: faker.phone.number(),
        age: faker.number.int({min: 18, max: 60}),
        address: faker.location.county(),
    };
};

//Function to generate an array of fake user data
export const generateTestData = (numRecords: number): UserData[] =>{
    return faker.helpers.multiple(generateUserData, {count: numRecords});
}

//TestData directory
const testdataDir = path.resolve(__dirname, "../testdata");

//Function to export data to JSON file
export const exportToJson = (data: UserData[], fileName: string) => {
    fs.writeFileSync(`${testdataDir}\\${fileName}`, JSON.stringify(data, null, 2));
    console.log(`Data exported to JSON file: ${testdataDir}\\${fileName}`);
}

//Function to export data to CSV file
export const exportToCsv = (data: UserData[], fileName: string)=>{
    const csvWriter = createCsvWriter({
        path: `${testdataDir}\\${fileName}`,
        header: [
            {id: 'name', title: 'Name'},
            {id: 'email', title: 'Email'},
            {id: 'username', title: 'Username'},
            {id: 'phone', title: 'Phone'},
            {id: 'age', title: 'Age'},
            {id: 'address', title: 'Address'},
        ],
    });

    csvWriter.writeRecords(data).then(()=>{
        console.log(`Data exported to  CSV fie: ${testdataDir}\\${fileName}`);
    });
};

