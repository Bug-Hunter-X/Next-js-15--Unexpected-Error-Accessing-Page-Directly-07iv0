```javascript
// pages/about.js

export default function About() {
  const user = JSON.parse(localStorage.getItem('user')) || null; // Handle null case

  if (!user) {
    return <p>Please access this page through the Home page.</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {user ? user.name : 'Guest'}!</p> {/*Conditional rendering*/}
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  // Setting a user in localStorage
  localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```