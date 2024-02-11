# Project Journal

## Friday February 9th, 2024
### Initial Idea
- Initial idea to create website that shows the codewars challenges I complete that day.
- Enter chatGPT prompt to get outline of steps to take.
  - [chatGPT chat](https://chat.openai.com/share/743eb459-ba8f-4e86-af68-f519fdea6b3c)

### Create React App
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
  - Import React and States to .js file  
    ```javascript``` - App.js / Component.js
    ```
    import React, { useEffect, useState } from 'react';
    ```
  - Import Axios  
    ```javascript``` - App.js / Component.js
    ```
    import axios from 'axios';
    ```
  - Import Components  
    ```javascript``` - App.js / Component.js
    ```
    import <ComponentName> from '<Component_relative_path>/<Component_fileName>';
    ```
  - Import Stylesheet  
    ```javascript``` - App.js / Component.js
    ```
    import '<CSS_relative_path>'
    ```
  - Import Images  
    ``````javascript`````` - App.js / Component.js
    ```
    import {<imageName>} from '<image_relative_path>'
    ```

### Components and .js Files
- Create WelcomeSection.js and ChallengeSection.js
- Render them in App.js component
  #### Notes
  - Files implementing react must import React at the top  
  ```javascript``` - ComponentName.js
    ```
    import React from 'react';
    ```
  - Create the component  
  ```javascript``` - ComponentName.js
    ```
    const <ComponentName> = ( props? ) => {
      return (
        <>JSX code here</> {/* fragment enclosure OR*/}
        <div>JSX code here</div> {/* parent element*/}
      )
    }
    ```
  - Export the component at last line  
    ```javascript``` - ComponentName.js
    ```
    export default <ComponentName>;
    ```
  - Import component to other component or App.js  
    ```javascript``` - Component.js OR App.js
    ```
    import <ComponentName> from './Component/<ComponentName.js>
    ```
  - Render component in other component or App.js  
    ```javascript``` - Component.js OR App.js
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
    ```javascript``` - App.js
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
    ```javascript```
    ```
    import '<CSS_relative_path>'
    ```
  - CSS files are comprised of CSS rules  
    css - Syntax.css
    ```
    selector1, selector2 { // begin css rule
      property1: value;
      property2: value;
    } // end css rule
    ```
  - Linking tags in your components to rules in css requires the tag's className attribute to match the selector in the css rule.  
    ```javascript``` - App.js
    ```
    <tag className="ClassNameExample"></tag> 
    ```
    css - App.css
    ```
    .ClassNameExample {
      font-size: 15px;
    }
    ```

### Fetch requests with axios
- Import axios into component files
- Test api fetches following tutorials
- Implement successful fetches in component files
- To store data you need to use State which is covered after this section
  #### Notes
  Using APIs requires basic understanding of ```promises``` along with ```async / await```
  - Importing axios library  
    ```javascript``` - Component.js
    ```
    import axios from 'axios';
    ```
  - Axios fetch syntax used here  
  ```javascript``` - App.js / Component.js
    ```
    axios.get(cURL) // invoke get method
      
      // after promise is resolved, set Variable variable to the returned object response.
      //Use path to key / index into data as necessary. 
      .then(response => setVariable(response.path))
      
      // if promise is rejected set Error variable to the returned error.
      .catch(error => setError(error)) 
    ```

### Basic Hooks in React
  #### Notes
  Hooks let you use different React features from your components.
  - Importing states  
  ```javascript``` - App.js / Component.js
    ```
    import { useState, useEffect } from 'react'
    
    const App.js = () => {
      const [userData, setUserData] = useState(null);

      return(
        <div>
        </div>
      )
    }
    ```
  - At use  
  ```javascript``` - App.js / Component.js
    ```
    // notice React before the useState call
    const [userData, setUserData] = React.useState(null);
    ```

### useState
- Create useState
  #### Notes
  States can be imported at the beginning of the file or can be called when being used. I used useState and useEffect here

  State lets a component “remember” information like user input. The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
  - Syntax
    ```javascript``` - App.js / Component.js
      ```
      const [state, setState] = React.useState(initialValue);
      ```
    - useState
      - Deconstruct to initialize
      - Must have initial value
    - state
      - Can be referenced like any other variable
      - React does not like when variables are assigned
    - setState
      - Used to assign values to state

### Storing Fetched Data with State
- 
### useEffect
- Set up axios request in useEffect
- Use useState to save response data
  #### Notes
  - Syntax  
  ```javascript``` - App.js / Component.js

### Cards
- Create Card component in ChallengeSection.js
- Use props
- Use loop to iterate through array and push target katas


## MVP complete