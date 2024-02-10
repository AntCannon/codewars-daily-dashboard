# Project Journal

## Friday February 9th, 2024
- Initial idea to create website that shows the codewars challenges I complete that day.
- Enter chatGPT prompt to get outline.
  - [chpatGPT chat](https://chat.openai.com/share/743eb459-ba8f-4e86-af68-f519fdea6b3c)
- Create react app.
  - Change react generated README.md to REACT-README.md
  - Add readme.md, outline.md, journal.md
  - Format chatGPT chat to outline.md

    #### Notes
    ### Creating React App
    bash
    ```
    npx create-react-app <folder-name>
    ```
    - Creates project folder and initial files
    - Installs packages
    - Initializes git
    - Makes initial commit

### Install Axios for API integration
bash
```
npm install axios
```
- Updates package-lock.json and package.json

### Project Structure
- Create Header.js and ChallengeCard.js components
  #### Notes
  - It is good practice to create components as different files in a folder 'src/components/<component.js...>
  - Export the component at last line  
    javascript
    ```
    export default <ComponentName>;
    ```

### Import requirement into App.js
- Run imports at top of file
  - React
  - Axios
  - Components
  #### Notes
  - React and States  
    javascript
    ```
    import React, { useEffect, useState } from 'react';
    ```
  - Axios  
    javascript
    ```
    import axios from 'axios';
    ```
  - Components  
    javascript
    ```
    import <ComponentName> from '<relative_path>/<Component_fileName>';
    ```

## MVP complete