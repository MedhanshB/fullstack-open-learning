```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET /exampleapp/spa
    Server-->>Browser: HTML

    Browser->>Server: GET /exampleapp/spa.js
    Server-->>Browser: JavaScript

    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: JSON containing notes

    Note over Browser: JavaScript renders notes

    Note over Browser: User submits a new note
    Browser->>Server: POST /new_note_spa
    Server-->>Browser: 201 Created

    Note over Browser: JavaScript updates the page