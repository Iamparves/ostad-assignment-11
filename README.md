### Building a Cookie-Based Web App with Next.js 13

In this assignment, you will create a simple web application using Next.js 13 that uses cookies to store user preferences, responds with JSON data, and handles redirection and header modification.

#### Live Preview: [Assignment 11](https://ostad-assignment-11-one.vercel.app/)

### Assignment Requirements:

**1. Setting Cookies:**

- [x] Create a Next.js project using version 13.
- [x] Implement a route that sets a cookie when a user clicks a button. The cookie should store a user preference, e.g., "theme: dark" or "language: en".

**2. Reading Cookies:**

- [x] Implement another route that reads the user's preference cookie and displays it on the page.

**3. JSON Response:**

- [x] Create a route that returns a JSON response with the following data:

```json JSON
{
  "message": "Welcome to our API!",
  "version": "1.0"
}
```

**4. Redirection:**

- [x] Implement a route that redirects the user to a different page within your application using NextResponse.redirect().

**5. Header Modification:**

- [x] Create a route that accepts an incoming request with an "Authorization" header.
- [x] Extract the token from the header, prefix it with "Bearer ", and add it as a new "Authorization" header.
- [x] Use NextResponse.next() to produce the response.

**Styling:** Feel free to style with any of the CSS framework
