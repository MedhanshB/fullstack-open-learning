```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Note over Browser: User types a new note and clicks Save

    Browser->>Server: POST /exampleapp/new_note_spa
    Note over Browser: Sends note data as JSON

    Note over Server: Server saves the new note

    Server-->>Browser: 201 Created

    Note over Browser: JavaScript updates the notes on the page
    Note over Browser: Page is not reloaded