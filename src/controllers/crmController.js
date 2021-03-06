import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import to from 'await-to-js';
const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {

    let newContact = new Contact(req.body);
    let err, contact;
    [err, contact] = await to(newContact.save());
    if(err) return res.json({success:false});

    return res.send({success:true, contacts:contact})
};

export const getContacts = async (req, res) => {
    
    let err, contacts;
    [err, contacts] = await to(Contact.find({}));
    if(err) return res.json({success:false});

    return res.send({success:true, contacts:contacts})
};

export const getContactWithID = async (req, res) => {
    
    let err, contact;
    [err, contact] = await to(Contact.findById(req.params.contactId));
    if(err) return res.json({success:false});

    return res.send({success:true, contacts:contact})
};

export const updateContact = async (req, res) => {

    let err, contact;
    [err, contact] = await to(Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}));
    if(err) return res.json({success:false});

    return res.send({success:true, contacts:contact})
};

export const deleteContact = async (req, res) => {
   
    let err, contact;
    [err, contact] = await to(Contact.remove({_id: req.params.contactId}));
    if(err) return res.json({success:false});

    return res.json({message:'Successfully delete contact!'})
};

