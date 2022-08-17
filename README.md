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

<!-- ## Profile edit page
    - 2 p tags to label the input values 
    - 2 input values for username and bio
    - 1 button at the end to update user profile -->

<!-- ## Users display page
    - title for the users page
    - divs per user to hold the data that is to be displayed 
    - 3 p tags to show the data of the user? 
        - 1 for name 
        - 1 for preview of bio
        - 1 for joined date??  -->

<!-- ## Planning/ Commits
    1) planning out the new features
        - new files will need to be created with their own html pages with the correct js files linked to them
    2) hard code both html pages to get an idea of what the page will look like
        - include individual css pages to make them local within the new folders 
    3) create profile functionality / update profile functionality - (new nav button)
        - upsert? 
            insert something if it does exist or update if it doesn't exist 
            user can either update profile if one is already created or create a profile is none exist 
        - user should be able to update the contents of their profile 
            change username 
            update bio 
    5) display all users - (new nav button)
        - show all users who have signed up 
            display username
            display description 
            last spot is still tbd - maybe signed up date or number of post-its 
    6) new navigation 
        navigation buttons on the home bulletin board page for user to navigate 
        "No nav on /auth page" just means that the users shouldn't be able to get to the new links before they're signed in -->