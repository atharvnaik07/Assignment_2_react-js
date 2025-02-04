# Assignment No.2 - React Props Example

## Description
This assignment demonstrates how to use React props to pass data between a parent and a child component. The application consists of two implementations:
## 🚀 Features  
- Modular component-based architecture  
- Dynamic state handling using React Hooks  
- Props-driven data flow  
- Responsive UI design  
- Clean and maintainable code  

## 📂 Project Structure  
```
/src  
  ├── components/   # Reusable React components  
  ├── pages/        # Page-level components  
  ├── assets/       # Static assets (images, styles, etc.)  
  ├── App.js        # Main application component  
  ├── index.js      # Entry point  
```

## 🛠️ Technologies Used  
- React.js  
- JavaScript (ES6+)  
- HTML & CSS  
- React Hooks (useState, useEffect)  
- JSX


## Installation and Usage 
1. Clone the repository or copy the code files into your React project.
2. Navigate to the project directory.
3. Install dependencies (if not already installed):
   ```sh
   npm install
   ```
4. Start the React app:
   ```sh
   npm start
   ```

## Code Explanation
### First Implementation (No Output After Submit)
- The `App` component manages form state using `useState`.
- The `handleSubmit` function stores form data but does not display it after submission.
- The `ChildComponent` receives form data via props but does not render it due to `showOutput` being `false`.
![image](https://github.com/user-attachments/assets/e105b9d1-2ffd-4854-8abb-20048c408672)

### Second Implementation (With Output Displayed After Submit)
- The `App` component stores submitted data in `formData` state.
- The `ChildComponent` receives the submitted data via props and displays it immediately.
- The form fields reset after submission.
![image](https://github.com/user-attachments/assets/a0ca7493-1bb2-43f8-9b69-3392015fd8c7)

## Author
Atharv Paresh Naik

## License
This project is open-source and free to use.

