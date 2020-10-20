const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config()  

exports.handler = async (event, context) => {
  try {

    // Only allow POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    let reqObj = JSON.parse(event.body);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

    var result = await client.query(
      q.Create(
        q.Collection('data'),
        { data: { cnic: reqObj.cnic ,username: reqObj.username, email: reqObj.email , password: reqObj.password , confirmpassword: reqObj.confirmpassword } },
      )
    );
    
    console.log("Entry Created and Inserted in Container: " + result.ref.id);
   
    
    return {
      statusCode: 200,
      body: JSON.stringify({ id: `${result.ref.id}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}