import { program } from "commander";
import {
  getContactById,
  removeContact,
  addContact,
  listContacts,
} from "../src/contacts.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const resultListContacts = await listContacts();
      console.log(resultListContacts);
      break;

    case "get":
      const resultGetContactById = await getContactById(id);
      console.log(resultGetContactById);
      break;

    case "add":
      const resultAddContact = await addContact(name, email, phone);
      console.log(resultAddContact);
      break;

    case "remove":
      const resultRemoveContact = await removeContact(id);
      console.log(resultRemoveContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
