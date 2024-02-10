# Project Journal

## Friday February 9th, 2024
### Initial Idea
- Initial idea to create website that shows the codewars challenges I complete that day.
- Enter chatGPT prompt to get outline of steps to take.
  - [chatGPT chat](https://chat.openai.com/share/743eb459-ba8f-4e86-af68-f519fdea6b3c)

### Create reat app
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
  - It is good practice to create components as different files in a folder 'src/components/<ComponentName.js...>

### Importing requirements
- Run imports at top of file
  - React
  - Axios
  - Components
  - CSS
  - Images
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
    import <ComponentName> from '<Component_relative_path>/<Component_fileName>';
    ```
  - CSS  
    javascript
    ```
    import '<CSS_relative_path>'
    ```
  - Images  
    javascript
    ```
    import {<imageName>} from '<image_relative_path>'
    ```

### Components and .js Files
- Create WelcomeSection.js and ChallengeSection.js

  #### Notes
  - Files implementing react must import React at the top  
  javascript - ComponentName.js
    ```
    import React from 'react';
    ```
  - Create the component  
  javascript - ComponentName.js
    ```
    const <ComponentName> = ( props? ) => {
      return (
        <>JSX code here</> {/* fragment enclosure OR*/}
        <div>JSX code here</div> {/* parent element*/}
      )
    }
    ```
  - Export the component at last line  
    javascript - ComponentName.js
    ```
    export default <ComponentName>;
    ```
  - Import component to other component or App.js  
    javascript - Component.js OR App.js
    ```
    import <ComponentName> from './Component/<ComponentName.js>
    ```
  - Render component in other component or App.js  
    javascript - Component.js OR App.js
    ```
    const App = () => {
      return (
        <div>
          <ComponentName /> {/* This line renders the component*/}
        </div>
      )
    }
    ```
  - Full example of importing component into App.js file  
    javascript - App.js
    ```
    // import
    import ComponentName from './components/ComponentName.js'

    // App.js component
    const App.js = () => {

      return (
        <div>
          <ComponentName /> {/* renders component with name*/}
        </div>
      )
    }

    // export App.js
    export default App.js
    ```

### CSS and .css Files
- Create WelcomeSection.css and ChallengeSection.css
- Revise App.css rules
  #### Notes
  - If using separate css files it is good practice to name them after your components.
  - Look up importing css file as module.
  - import css file  
    javascript
    ```
    import '<CSS_relative_path>'
    ```
  - CSS files is comprised of CSS rules  
    css - Syntax.css
    ```
    selector1, selector2 {
      property1: value;
      property2: value;
    }
    ```



## MVP complete