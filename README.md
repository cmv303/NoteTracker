# Note Taker Starter Code

GIVEN a note-taking application

<!--TODO: Route the landing page to notes page-->
1. Opening the Note Taker should present with a landing page with a link to a notes page

<!--TODO: implement addEventListener method to handle button clicks-->
<!--TODO: left hand should have stored (previous) notes available for user-->
<!--TODO: right hand should have place to write notes and their titles-->
2. If the link on notes page is clicked, it should present with a page with existing notes listed in the left-hand column, and on the right-hand colum there should be empty fields to enter a new note title and text

<!--TODO: make Save icon appear when user starts typin. (Look at old todo homework example?)-->
3. Entering a new note title and text, should signal a Save icon to appear in the top-of-page Nav bar.

<!--TODO: Save button should trigger storage db, and that info should be moved ot the left hand side-->
4. If the save button does get clicked, then the new note appears on the left hand side with other, existing notes.

<!--TODO: Clicking on existing note on left side will make it appear on righthand side-->
5. Clicking on an existing note in the list in the left-hand column should cause that note to appear in the right-hand column

<!--TODO: Clicking on Write icon will open new blank fields with text areas for Note title and text. This should appear in the right hand column-->
6. Clicking on the Write icon in the navigation at the top of the page, will cause empty fields to display so the user can enter a new note title and text in the right-hand column

<!--TODO: Make sure the following is implemented:-->
7. The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the fs module.

8. The following HTML routes should be created: `GET /notes` should return the notes.html file. `GET *` should return the index.html file.

9. The following API routes should be created: `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

10. `POST /api/notes` should receive a new note to save on the `request body`, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to `give each note a unique id` when it's saved (look into npm packages that could do this for you).
