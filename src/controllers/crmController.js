import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => {
      res.send(err);
    });
};

export const getContacts = (req, res) => {
  Contact.find({})
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => {
      res.send(err);
    });
};

export const getContactsWithID = (req, res) => {
  Contact.findById(req.params.contactId)
    .then(contacts => {
      if (contacts) {
        res.json(contacts);
      } else {
        res.status(404).json({ message: 'Contact not found' });
      }
    })
    .catch(err => {
      res.send(err);
    });
};

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true })
    .then(contact => {
      if (contact) {
        res.json(contact);
      } else {
        res.status(404).json({ message: 'Contact not found' });
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

export const deleteContact = (req, res) => {
  Contact.findOneAndRemove({ _id: req.params.contactId })
    .then(contact => {
      if (contact) {
        res.json({ message: 'Successfully deleted contact' });
      } else {
        res.status(404).json({ message: 'Contact not found' });
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
