# Community Bulletin Board

## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Project Starter Setup

### Overview

[Here](https://whimsical.com/page-wireframes-QKB9N3bD8HbmJDt12t5AHE) is an overview of the app and features that will be added this week.

### Setup Steps

1. GitHub repo
    1. Copy the template repository
    1. Setup Netlify
    1. Clone local
    1. Make dev branch, make sure to push this branch to github
    1. You will create a feature branch off dev for the days work
    1. Work in VS Code as usual
1. Supabase
    1. Make new project (copy password for using tools like beekeeper)
    1. From "auth>settings>email", turn off email confirmations and save
    1. From "sql editor", new script and run starter schema `db/schema.sql`
    1. From "sql editor", new script and run starter category data `db/categories.sql`
    1. From "settings > api", copy URL and Key into `fetch-utils.js`

## planning
<!-- html elements for the post-it detail page that needs to be rendered upon click 
    - Div - to hold the contents of the overall note 
    - button - to delete the post
    - header - for the title of the post 
    - pTag - for the updated date of the post??
    - pTag - for the contents of the note itself -->

## Events that need to happen
<!-- - 1 - Feature for adding note and data showing on Supabase works so can move onto the next feature 
    - 2 - On click per post-it, user should be redirected to a new page displaying the contents of the note in detail 
            - need to add an event listener to the post-it notes within the render function 

    - 3 - note detail should include the title, updated date, and the text of the note
            - need to create a render details function to render the existing info from supabase (active post-it notes) onto a new HTML document in the details tab 

    - 4 - user will have the option to delete the note as well as add comments if needed

    - 5 - ultimately, the home page should display all the notes updated to their latest changes -->