# Next.js 15: Unexpected Error Accessing Page Directly

This repository demonstrates an uncommon bug in Next.js 15 related to accessing pages directly without going through a specific route that sets a variable in localStorage.

## Bug Description

The issue occurs when navigating to the `/about` page directly without first visiting the `/` (Home) page.  The About page attempts to access user data from localStorage which might not be set if the user accessed the page directly. This leads to an error, specifically a `TypeError: Cannot read properties of null (reading 'name')`.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access the `/about` page directly in your browser. You should encounter an error.
5. Access the `/` page first, then navigate to `/about`. The About page should load correctly.

## Solution

The solution is to modify the About page to handle the case where the user data is not available in localStorage, preventing the error.