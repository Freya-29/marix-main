var express = require('express');
const {v4: uuidv4} = require('uuid');
var AWS = require("aws-sdk");
const app = express();
// var database = require('./database.js');


const tableName = 'UserTable';
const tableName2 = 'Role';
const tableName3 = 'Employee';
const tableName4 = 'Designation';
const tableName5 = 'Campaign';
const tableName6 = 'Feedback';
const tableName7 = 'Category';
const tableName8 = 'Department';



// Set up the AWS SDK with your credentials

AWS.config.update({

    region: 'ap-south-1',
    endpoint: 'http://10.62.0.61:8000',            //mainport
    // endpoint: 'http://localhost:8000',         //testingport


});


// Create a DynamoDB service object

const dynamodb = new AWS.DynamoDB();

// Define the table schema

// UserTable TableNo1

// const tableParams = {

//     TableName: tableName,

//     KeySchema: [

//         { AttributeName: 'id', KeyType: 'HASH' },
//         { AttributeName: 'role', KeyType: 'RANGE' } // Partition key

//     ],

//     AttributeDefinitions: [

//         { AttributeName: 'id', AttributeType: 'S' },

//         { AttributeName: 'username', AttributeType: 'S' },


//         { AttributeName: 'password', AttributeType: 'S' },

//         { AttributeName: 'role', AttributeType: 'S' },


//     ],
//     GlobalSecondaryIndexes: [{
//         IndexName: "userIndex",
//         KeySchema: [
//             {
//                 AttributeName: "username",
//                 KeyType: "HASH"
//             },
//             {
//                 AttributeName: "password",
//                 KeyType: "RANGE"
//             }
//         ],
//         Projection: {
//             ProjectionType: "ALL"
//         },
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 1,
//             WriteCapacityUnits: 1
//         }
//     }],

//     ProvisionedThroughput: {

//         ReadCapacityUnits: 5,

//         WriteCapacityUnits: 5

//     }

// };


// Create the table

// dynamodb.createTable(tableParams, (err, data) => {

//     if (err) {

//         console.error(`Unable to create table ${tableName}. Error JSON: ${JSON.stringify(err, null, 2)}`);

//     } else {

//         console.log(`Created table ${tableName}. Table description JSON: ${JSON.stringify(data, null, 2)}`);

//     }

// });
// console.log(database.createTable("USER"));

// var params = {
//     TableName : tableName,
//     Item : {
//         "id" : "USER:" + uuidv4(),
//         "role" : "ROLE:" + uuidv4(),
//         "username": "hetetye",
//         "password" : 'shajkjdkal',
//         "firstName" : 'Hetvi',
//         "lastName" : 'parikh',
//         "email": "ahsjh@dhjf.com",
//         "type": "USER"
//     }
// };
// var docClient = new AWS.DynamoDB.DocumentClient();


// console.log("Adding a new item...");
// docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err,
//                 null, 2));
//     } else {
//         console.log("Added item:", params.Item.firstName);
//         console.log("Added item:", params.Item.id);
//         console.log("Added item:", params.Item.role);
//         console.log("Added item:", params.Item.lastName);
//         console.log("Added item:", params.Item.password);
//         console.log("Added item:", params.Item.type);
//         console.log("Added item:", params.Item.username);
//         console.log("Added item:", params.Item.email);
//     }
// });

///Role Table TableNo2


// const tableParams2  = {

//     TableName: tableName2,

//     KeySchema: [

//         { AttributeName: 'id', KeyType: 'HASH' },

//     ],

//     AttributeDefinitions: [

//         { AttributeName: 'id', AttributeType: 'S' },

//         { AttributeName: 'name', AttributeType: 'S' },

//     ],
//     GlobalSecondaryIndexes: [{
//         IndexName: "RoleIndex",
//         KeySchema: [
//             {
//                 AttributeName: "name",
//                 KeyType: "HASH"
//             },
            
        
//         ],
//         Projection: {
//             ProjectionType: "ALL"
//         },
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 1,
//             WriteCapacityUnits: 1
//         }
//     }],

//     ProvisionedThroughput: {

//         ReadCapacityUnits: 5,

//         WriteCapacityUnits: 5

//     }

// };

// dynamodb.createTable(tableParams2, (err, data) => {

//     if (err) {

//         console.error(`Unable to create table ${tableName2}. Error JSON: ${JSON.stringify(err, null, 2)}`);

//     } else {

//         console.log(`Created table ${tableName2}. Table description JSON: ${JSON.stringify(data, null, 2)}`);

//     }

// });




// //Employee Table TableNo3

// const tableParams3 = {

//     TableName: tableName3,

//     KeySchema: [

//         { AttributeName: 'id', KeyType: 'HASH' },
       

//     ],

//     AttributeDefinitions: [

//         { AttributeName: 'id', AttributeType: 'S' },

//         { AttributeName: 'designation', AttributeType: 'S' },


//         { AttributeName: 'department', AttributeType: 'S' },

       


//     ],
//     GlobalSecondaryIndexes: [{
//         IndexName: "departmentIndex",
//         KeySchema: [
//             {
//                 AttributeName: "department",
//                 KeyType: "HASH"
//             },
//             {
//                 AttributeName: "designation",
//                 KeyType: "RANGE"
//             }
//         ],
//         Projection: {
//             ProjectionType: "ALL"
//         },
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 1,
//             WriteCapacityUnits: 1
//         }
//     }],

//     ProvisionedThroughput: {

//         ReadCapacityUnits: 5,

//         WriteCapacityUnits: 5

//     }

// };


// // Create the table

// dynamodb.createTable(tableParams3, (err, data) => {

//     if (err) {

//         console.error(`Unable to create table ${tableName3}. Error JSON: ${JSON.stringify(err, null, 2)}`);

//     } else {

//         console.log(`Created table ${tableName3}. Table description JSON: ${JSON.stringify(data, null, 2)}`);

//     }

// });

// var params = {
//         TableName : tableName3,
//         Item : {
//             "id" : "EMPLOYEE:" + uuidv4(),
//             "designation" : "DESIGNATION:" + uuidv4(),
//             "department": "DEPARTMENT:" + uuidv4(),
//             "reportsTo" : "REPORTSTO:" + uuidv4(),
//             "firstName" : 'Sanskar',
//             "lastName" : 'Rathi',
//             "email": "ahsjh@dhjf.com",
//             "type": "EMPLOYEE"
//         }
//     };
//     var docClient = new AWS.DynamoDB.DocumentClient();
    
    
//     console.log("Adding a new item...");
//     docClient.put(params, function(err, data) {
//         if (err) {
//             console.error("Unable to add item. Error JSON:", JSON.stringify(err,
//                     null, 2));
//         } else {
//             console.log("Added item:", params.Item.id);
//             console.log("Added item:", params.Item.designation);
//             console.log("Added item:", params.Item.department);
//             console.log("Added item:", params.Item.reportsTo);
//             console.log("Added item:", params.Item.firstName);
//             console.log("Added item:", params.Item.lastName);
//             console.log("Added item:", params.Item.email);
//             console.log("Added item:", params.Item.type);
//         }
//     });



// Designation Table TableNo4

// const tableParams4 = {

//         TableName: tableName4,
    
//         KeySchema: [   
//             { AttributeName: 'id', KeyType: 'HASH' },
//         ],
    
//         AttributeDefinitions: [
    
//             { AttributeName: 'id', AttributeType: 'S' },
//             { AttributeName: 'designation', AttributeType: 'S' },
//         ],
//         GlobalSecondaryIndexes: [{
//             IndexName: "designationIndex",
//             KeySchema: [
//                 {
//                     AttributeName: "designation",
//                     KeyType: "HASH"
//                 },
                
//             ],
//             Projection: {
//                 ProjectionType: "ALL"
//             },
//             ProvisionedThroughput: {
//                 ReadCapacityUnits: 1,
//                 WriteCapacityUnits: 1
//             }
//         }],
    
//         ProvisionedThroughput: {
    
//             ReadCapacityUnits: 5,
    
//             WriteCapacityUnits: 5
    
//         }
    
//     };
     
//     // Create the table
    
//     dynamodb.createTable(tableParams4, (err, data) => {
    
//         if (err) {
    
//             console.error(`Unable to create table ${tableName4}. Error JSON: ${JSON.stringify(err, null, 2)}`);
    
//         } else {
    
//             console.log(`Created table ${tableName4}. Table description JSON: ${JSON.stringify(data, null, 2)}`);
    
//         }
    
//     });

    // var params = {
    //         TableName : tableName4,
    //         Item : {
    //             "id" : "DESIGNATION:" + uuidv4(),
    //             "designation" : "SOFTWARE DEVELOPER" ,
    //             "canReview" : [
    //                 {
    //                     "designation" : "DESIGNATION: " + uuidv4()
    //                 },
    //                 {
    //                     "designation" : "DESIGNATION: " + uuidv4()
    //                 },
    //                 {
    //                     "designation" : "DESIGNATION: " + uuidv4()
    //                 }
    //             ],
    //             "type": "DESIGNATION"
    //         }
    //     };
    //     var docClient = new AWS.DynamoDB.DocumentClient();
        
        
    //     console.log("Adding a new item...");
    //     docClient.put(params, function(err, data) {
    //         if (err) {
    //             console.error("Unable to add item. Error JSON:", JSON.stringify(err,
    //                     null, 2));
    //         } else {
    //             console.log("Added item:", params.Item.id);
    //             console.log("Added item:", params.Item.name);
    //             console.log("Added item:", params.Item.canReview);
    //             console.log("Added item:", params.Item.type);
    //         }
    //     });
        

// //CAmpaign Table TableNo5

// const tableParams5 = {

//     TableName: tableName5,

//     KeySchema: [

//         { AttributeName: 'id', KeyType: 'HASH' },
//         // { AttributeName: 'for', KeyType: 'RANGE' },
       

//     ],

//     AttributeDefinitions: [

//         { AttributeName: 'id', AttributeType: 'S' },

//         { AttributeName: 'for', AttributeType: 'S' },

//         { AttributeName: 'startedBy', AttributeType: 'S' },

//         // { AttributeName: 'reviewer', AttributeType: 'S' },

//     ],
//     GlobalSecondaryIndexes: [{
//         IndexName: "CampaignIndex",
//         KeySchema: [
//             {
//                 AttributeName: "startedBy",
//                 KeyType: "HASH"
//             },
//             {
//                 AttributeName: "for",
//                 KeyType: "RANGE"
//             }
//         ],
//         Projection: {
//             ProjectionType: "ALL"
//         },
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 1,
//             WriteCapacityUnits: 1
//         }
//     }],

//     ProvisionedThroughput: {

//         ReadCapacityUnits: 5,

//         WriteCapacityUnits: 5

//     }

// };


// // Create the table

// dynamodb.createTable(tableParams5, (err, data) => {

//     if (err) {

//         console.error(`Unable to create table ${tableName5}. Error JSON: ${JSON.stringify(err, null, 2)}`);

//     } else {

//         console.log(`Created table ${tableName5}. Table description JSON: ${JSON.stringify(data, null, 2)}`);

//     }

// });

// Feedback Table TableNo6


// const tableParams6 = {

//     TableName: tableName6,

//     KeySchema: [

//         { AttributeName: 'id', KeyType: 'HASH' },
//         { AttributeName: 'for', KeyType: 'RANGE' },
       

//     ],

//     AttributeDefinitions: [

//         { AttributeName: 'id', AttributeType: 'S' },

//         { AttributeName: 'for', AttributeType: 'S' },

//         { AttributeName: 'campaignId', AttributeType: 'S' },

//         { AttributeName: 'reviewer', AttributeType: 'S' },

//     ],
//     GlobalSecondaryIndexes: [{
//         IndexName: "FeedbackIndex",
//         KeySchema: [
//             {
//                 AttributeName: "campaignId",
//                 KeyType: "HASH"
//             },
//             {
//                 AttributeName: "reviewer",
//                 KeyType: "RANGE"
//             }
//         ],
//         Projection: {
//             ProjectionType: "ALL"
//         },
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 1,
//             WriteCapacityUnits: 1
//         }
//     }],

//     ProvisionedThroughput: {

//         ReadCapacityUnits: 5,

//         WriteCapacityUnits: 5

//     }

// };


// // Create the table

// dynamodb.createTable(tableParams6, (err, data) => {

//     if (err) {

//         console.error(`Unable to create table ${tableName6}. Error JSON: ${JSON.stringify(err, null, 2)}`);

//     } else {

//         console.log(`Created table ${tableName6}. Table description JSON: ${JSON.stringify(data, null, 2)}`);

//     }

// });

// var params = {
//     TableName : tableName6,
//     Item : {
//         "id" : "FEEDBACK:" + uuidv4(),
//         "campaignId" : "CAMPAIGN :" + uuidv4(),
//         "for" : "EMPLOYEE :" + uuidv4(),
//         "reviewer" : "EMPLOYEE :" + uuidv4(),
//         "review" : [
//             {
//                 "category" : "CATEGORY: " + uuidv4()
//             },
//             {
//                 "rating" : 8
//             },
//             {
//                 "comments" : "feedback from user "
//             }
//         ],
//         "type": "FEEDBACK"
//     }
// };
// var docClient = new AWS.DynamoDB.DocumentClient();


// console.log("Adding a new item...");
// docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err,
//                 null, 2));
//     } else {
//         console.log("Added item:", params.Item.id);
//         console.log("Added item:", params.Item.campaignId);
//         console.log("Added item:", params.Item.for);
//         console.log("Added item:", params.Item.reviewer);
//         console.log("Added item:", params.Item.review);
//         console.log("Added item:", params.Item.type);
//     }
// });


// Category Table TableNo7


// const tableParams7 = {

//     TableName: tableName7,

//     KeySchema: [   
//         { AttributeName: 'id', KeyType: 'HASH' },
//     ],

//     AttributeDefinitions: [

//         { AttributeName: 'id', AttributeType: 'S' },
//         { AttributeName: 'category', AttributeType: 'S' },
//     ],
//     GlobalSecondaryIndexes: [{
//         IndexName: "categoryIndex",
//         KeySchema: [
//             {
//                 AttributeName: "category",
//                 KeyType: "HASH"
//             },
            
//         ],
//         Projection: {
//             ProjectionType: "ALL"
//         },
//         ProvisionedThroughput: {
//             ReadCapacityUnits: 1,
//             WriteCapacityUnits: 1
//         }
//     }],

//     ProvisionedThroughput: {

//         ReadCapacityUnits: 5,

//         WriteCapacityUnits: 5

//     }

// };
 
// // Create the table

// dynamodb.createTable(tableParams7, (err, data) => {

//     if (err) {

//         console.error(`Unable to create table ${tableName7}. Error JSON: ${JSON.stringify(err, null, 2)}`);

//     } else {

//         console.log(`Created table ${tableName7}. Table description JSON: ${JSON.stringify(data, null, 2)}`);

//     }

// });

// var params = {
//         TableName : tableName7,
//         Item : {
//             "id" : "CATEGORY:" + uuidv4(),
//             "category" : "Ownership" ,
//             "designation" : [
//                 {
//                     "designation" : "DESIGNATION: " + uuidv4()
//                 },
//                 {
//                     "designation" : "DESIGNATION: " + uuidv4()
//                 },
//                 {
//                     "designation" : "DESIGNATION: " + uuidv4()
//                 }
//             ],
//             "type": "CATEGORY"
//         }
//     };
//     var docClient = new AWS.DynamoDB.DocumentClient();
    
    
//     console.log("Adding a new item...");
//     docClient.put(params, function(err, data) {
//         if (err) {
//             console.error("Unable to add item. Error JSON:", JSON.stringify(err,
//                     null, 2));
//         } else {
//             console.log("Added item:", params.Item.id);
//             console.log("Added item:", params.Item.category);
//             console.log("Added item:", params.Item.designation);
//             console.log("Added item:", params.Item.type);
//         }
//     });
    





// Department Table TableNo8

// const tableParams8  = {

//         TableName: tableName8,
    
//         KeySchema: [
    
//             { AttributeName: 'id', KeyType: 'HASH' },
    
//         ],
    
//         AttributeDefinitions: [
    
//             { AttributeName: 'id', AttributeType: 'S' },
    
//             { AttributeName: 'departmentName', AttributeType: 'S' },
    
//         ],
//         GlobalSecondaryIndexes: [{
//             IndexName: "DepartmentIndex",
//             KeySchema: [
//                 {
//                     AttributeName: "departmentName",
//                     KeyType: "HASH"
//                 },
                
            
//             ],
//             Projection: {
//                 ProjectionType: "ALL"
//             },
//             ProvisionedThroughput: {
//                 ReadCapacityUnits: 1,
//                 WriteCapacityUnits: 1
//             }
//         }],
    
//         ProvisionedThroughput: {
    
//             ReadCapacityUnits: 5,
    
//             WriteCapacityUnits: 5
    
//         }
    
//     };
    
//     dynamodb.createTable(tableParams8, (err, data) => {
    
//         if (err) {
    
//             console.error(`Unable to create table ${tableName8}. Error JSON: ${JSON.stringify(err, null, 2)}`);
    
//         } else {
    
//             console.log(`Created table ${tableName8}. Table description JSON: ${JSON.stringify(data, null, 2)}`);
    
//         }
    
//     });
