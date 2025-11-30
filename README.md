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
