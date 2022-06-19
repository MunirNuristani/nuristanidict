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
const messages = base("messages")
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

const minifyDocs = docs=>{
  return docs.map(doc=>minifydoc(doc))
}

const minifydoc=doc=>{
  return{
    id: doc.id,
    title:doc.fields.title,
    author:doc.fields.author,
    cover:doc.fields.Book_Picture[0].thumbnails.large.url,
    content:doc.fields.Book_Links[0].url
  }
}
  //export all functions and references to tables. 
export { words, articles, books, letters, abbriviations, messages, minifyRecords, minifyDocs };