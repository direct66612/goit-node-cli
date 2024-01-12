const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join("db", "contacts.json");
async function listContacts() {
  try {
    const readResult = await fs.readFile(contactsPath);
    return readResult.toString();
  } catch (err) {
    console.log(err);
  }
}
async function getContactById(contactId) {
  try {
    const readResult = await fs.readFile(contactsPath);
    const parseDate = JSON.parse(readResult);
    const result = parseDate.filter(({ id }) => id === contactId);
    return result.length === 0 ? null : result;
  } catch (err) {
    console.log(err);
  }
}
