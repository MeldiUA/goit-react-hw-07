import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contacts from '../contacts.json'


const slice = createSlice({
    name: "contacts",
    initialState: {
        items: contacts,
    },
    reducers: {
        addContact: {
        reducer: (state, action) => {
            state.items.push(action.payload);
        },
        prepare: (value) => {
          return {
            payload: {
                ...value, 
                id: nanoid(),
            },
          };
        }},
        deleteContact(state, action){
            state.items = state.items.filter(item => item.id != action.payload);
        },
      
    },
  });

export const selectContacts = (state) => state.contacts.items;

export const {addContact, deleteContact} = slice.actions;

export default slice.reducer;
