🚀 Features:

✅ Create Notes
Add a note with:
Title
Content
Type (Personal, Idea, Reminder, Work)
Date & time (auto generated)
Unique ID (using crypto.randomUUID())

✅ Filter Note:
Filter notes by type using the category <select>.
Options include:
Personal
Idea
Reminder
Work
All notes

✅ Search Note:
Live searching using a text input.
Filters notes instantly based on their text content.

✅ Delete Notes:
Delete button on each note.
Confirmation modal before removing a note.
Automatically removes:
- From the UI
- From localStorage

✅ Local Storage Persistence
Notes are saved inside localStorage, so they remain even after refreshing the page.

🏗️ Project Structure:
Main Components
Component	Description
MyNote class	Generates a new note object with title, content, type, date, and ID
addMyNote()	Creates a new note and saves it to localStorage
displayNote()	Builds note cards and injects them into the page
deleteNoteInLocal()	Removes a note from localStorage
displaySelectedNotes()	Filters notes by category
searchInput handler	Filters notes based on text input
Modal logic	Shows/hides Add Note and Delete Confirmation modals

📂 Data Model:
Each note is stored as:
{
  "title": "My Note",
  "content": "This is the content",
  "type": "Idea",
  "date": "2025-01-01 14:22",
  "id": "a12b-..."
}
Stored in localStorage under:
myNotes

🧩 How it Works
1. Adding a note
User opens the modal
Fills the form
Submits it → new note object created via MyNote class
Note pushed into array and saved to localStorage
Notes re-rendered

2. Displaying notes
App loads notes from localStorage during DOMContentLoaded
Each note becomes a styled card injected into the .notes-container

3. Filtering notes
Selecting a note type hides all cards that don’t match

4. Searching notes
Keyup event loops through .note-card
Shows only those containing the typed string

5. Deleting notes
Clicking delete opens confirmation modal
If confirmed:
- Note removed from localStorage
- Note removed from DOM

💾 LocalStorage Functions
saveNotesToLocal()
Stores notes array in localStorage.
getNotesInLocal()
Reads saved notes or returns an empty array.
deleteNoteInLocal(id)
Removes note where the ID matches.

🛠️ Technologies Used
HTML
CSS
Vanilla JavaScript
localStorage API
Font Awesome icons
