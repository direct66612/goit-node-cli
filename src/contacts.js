import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";
const contactsPath = path.join("db", "contacts.json");
export async function listContacts() {
  try {
    const readResult = await fs.readFile(contactsPath);
    return readResult.toString();
  } catch (err) {
    console.log(err);
  }
}
export async function getContactById(contactId) {
  try {
    const readResult = await fs.readFile(contactsPath);
    const parseDate = JSON.parse(readResult);
    const findEl = parseDate.find(({ id }) => id === contactId);
    if (findEl === undefined) {
      return null;
    }
    return findEl;
  } catch (err) {
    console.log(err);
  }
}
export async function removeContact(contactId) {
  try {
    const readResult = await fs.readFile(contactsPath);
    const parseDate = JSON.parse(readResult);
    const findEl = parseDate.find(({ id }) => id === contactId);
    const indexEl = parseDate.indexOf(findEl);
    parseDate.splice(indexEl, 1);
    if (findEl === undefined) {
      return null;
    }
    await fs.writeFile(contactsPath, JSON.stringify(parseDate));
    return findEl;
  } catch (err) {
    console.log(err);
  }
}
export async function addContact(name, email, phone) {
  const newObj = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  try {
    const readResult = await fs.readFile(contactsPath);
    const parseDate = JSON.parse(readResult);
    parseDate.push(newObj);
    await fs.writeFile(contactsPath, JSON.stringify(parseDate));
    return newObj;
  } catch (err) {
    console.log(err);
  }
}
