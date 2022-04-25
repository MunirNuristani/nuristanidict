const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AT_API_KEY
});


// Initialize a base
const base = Airtable.base(process.env.NEXT_PUBLIC_AT_BASE_ID);

// References to tables
const words = base("Words");
const articles = base("Articles");
const books = base("Books");
const letters = base("Alphabet")
const abbriviations = base('Abbr')

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
export { words, articles, books, letters, abbriviations , minifyRecords };