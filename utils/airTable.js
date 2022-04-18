const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: "keyMo9aus7MQMwY4g",
});

// Initialize a base
const base = Airtable.base("appkSkJWLVJ3dGidy");

// References to tables
const words = base("Words");
const articles = base("Articles");
const books = base("Books");
const letters = base("Alphabet")

//reduces the unnecessary data and fills empty fields
const minifyRecords = records => {
    return records.map(record => minifyData(record));
  };
  const minifyData = record => {
    return {
      id: record.id,
      fields: record.fields
    };
  };

  //export all functions and references to tables. 
export { words, articles, books, letters , minifyRecords };