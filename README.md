# 📝 Notes Manager App

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) 
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
[![LocalStorage](https://img.shields.io/badge/Storage-localStorage-green)]()

A simple, responsive web application to **create, categorize, search, and manage notes**.  
All notes are saved in **localStorage**, so your data persists across sessions.

---

## 🚀 Features

### ✅ Add Notes
- Add a note with:
  - **Title**  
  - **Content**  
  - **Type**: Personal, Idea, Reminder, Work  
  - **Date & Time** (auto-generated)  
  - **Unique ID** (using `crypto.randomUUID()`)

### ✅ Filter Notes
- Filter notes by category using a dropdown  
- Categories: Personal, Idea, Reminder, Work, All  

### ✅ Search Notes
- Live search based on note text content  
- Updates UI in real-time as you type  

### ✅ Delete Notes
- Delete button on each note  
- Confirmation modal before deletion  
- Removes note from both UI and **localStorage**  

### ✅ Local Storage Persistence
- Notes persist after page reload or browser close  
- Data stored under the key: `myNotes`  

---

## 🏗️ Project Structure

| Component              | Description                                                     |
|------------------------|-----------------------------------------------------------------|
| **MyNote class**       | Generates a new note object with title, content, type, date, ID |
| **addMyNote()**        | Creates a new note and saves it to localStorage                 |
| **displayNote()**      | Builds note cards and injects them into the page                |
| **deleteNoteInLocal()**| Removes a note from localStorage                                 |
| **displaySelectedNotes()** | Filters notes by category                                     |
| **searchInput handler**| Filters notes based on text input                                 |
| **Modal logic**        | Shows/hides Add Note & Delete Confirmation modals               |

---

## 🧩 How it Works

### ➤ Adding a Note
- User opens the modal  
- Fills the form  
- Submits → note object created via **MyNote** class  
- Note saved to **localStorage**  
- UI updates and displays the new note  

### ➤ Displaying Notes
- Notes loaded from **localStorage** when the page loads  
- Each note is rendered as a styled card inside **`.notes-container`**  

### ➤ Filtering Notes
- Selecting a category hides all non-matching notes  

### ➤ Searching Notes
- `keyup` event listens on the search input  
- Loops through all **`.note-card`** elements  
- Matches content and updates visibility dynamically  

### ➤ Deleting Notes
- Delete button opens a confirmation modal  
- On confirm:  
  - Note removed from **localStorage**  
  - Note removed from the UI  

---

## 💾 LocalStorage Functions

### `saveNotesToLocal(notes)`
Stores notes array in **localStorage**.

### `getNotesInLocal()`
Retrieves saved notes or returns an empty array if none exist.

### `deleteNoteInLocal(id)`
Removes the note with the matching ID from **localStorage**.

---

## 🛠️ Technologies Used
- **HTML5**  
- **CSS3**  
- **Vanilla JavaScript (ES6+)**  
- **localStorage API**  
- **Font Awesome icons**
