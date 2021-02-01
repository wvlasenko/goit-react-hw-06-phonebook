import { v4 as uuid4 } from 'uuid';
import actionTypes from './contacts-types';

export const addContact = (name, number) => ({
  type: actionTypes.ADDCONTACT,
  payload: {
    id: uuid4(),
    name,
    number,
  },
});

export const removeContact = id => ({
  type: actionTypes.REMOVECONTACT,
  payload: id,
});

export const filterContacts = name => ({
  type: actionTypes.CONTACTFILTER,
  payload: `${name}`,
});
