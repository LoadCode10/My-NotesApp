# 📝 Notes Manager App

## ✅ Create Notes
Add a note with:
- **Title**
- **Content**
- **Type** (Personal, Idea, Reminder, Work)
- **Date & Time** (auto-generated)
- **Unique ID** (`crypto.randomUUID()`)

---

## ✅ Filter Notes
Filter notes by type using the category dropdown.  
Options include:
- Personal  
- Idea  
- Reminder  
- Work  
- All notes  

---

## ✅ Search Notes
- Live searching using a text input  
- Filters notes instantly based on their text content  

---

## ✅ Delete Notes
- Delete button on each note  
- Confirmation modal before removing a note  
- Automatically removes the note from:
  - The UI  
  - `localStorage`  

---

## ✅ Local Storage Persistence
Notes are saved inside **localStorage**, so they remain even after refreshing the page.

---

# 🏗️ Project Structure

### Main Components

| Component              | Description                                                     |
|-----------------------|-----------------------------------------------------------------|
| **MyNote class**      | Generates a new note object with title, content, type, date, ID |
| **addMyNote()**       | Creates a new note and saves it to localStorage                 |
| **displayNote()**     | Builds note cards and injects them into the page                |
| **deleteNoteInLocal()** | Removes a note from localStorage                               |
| **displaySelectedNotes()** | Filters notes by category                                   |
| **searchInput handler** | Filters notes based on text input                              |
| **Modal logic**       | Shows/hides Add Note & Delete Confirmation modals               |

---

# 📂 Data Model

Each note is stored as:

```json
{
  "title": "My Note",
  "content": "This is the content",
  "type": "Idea",
  "date": "2025-01-01 14:22",
  "id": "a12b-..."
}

---

🧩 How it Works
➤ Adding a Note

User opens the modal

Fills the form

Submits → note object created via MyNote class

Note saved to localStorage

UI re-renders and displays the new note

➤ Displaying Notes

Notes loaded from localStorage when DOMContentLoaded fires

Each note becomes a styled card inside .notes-container

➤ Filtering Notes

Selecting a category hides all cards that don’t match the chosen type

➤ Searching Notes

keyup event runs on the search bar

Loops through each .note-card

Matches text & updates visibility in real-time

➤ Deleting Notes

Clicking delete opens a confirmation modal

On confirm:

The note is removed from localStorage

The note DOM element is removed from the page

💾 LocalStorage Functions
saveNotesToLocal()

Stores the notes array inside localStorage.

getNotesInLocal()

Returns all saved notes or an empty array if none exist.

deleteNoteInLocal(id)

Removes the note whose ID matches the provided parameter.

🛠️ Technologies Used

HTML

CSS

Vanilla JavaScript

localStorage API

Font Awesome Icons
