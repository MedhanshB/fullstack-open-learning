sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: HTML

    Browser->>Server: GET /exampleapp/main.css
    Server-->>Browser: CSS

    Browser->>Server: GET /exampleapp/main.js
    Server-->>Browser: JavaScript

    Note over Browser: JavaScript executes

    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: JSON containing notes

    Note over Browser: JavaScript renders the notes