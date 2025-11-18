import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

const updateContacts = (contacts) => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const buffer = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(buffer);
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  console.log(result);
  return result || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
