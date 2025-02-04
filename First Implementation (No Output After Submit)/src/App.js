// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


import React, { useState } from "react";

const ChildComponent = ({ formData }) => {
  return (
    <div>
      <h2>Submitted Data:</h2>
      {formData && (
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [formData, setFormData] = useState(null);
  const [inputData, setInputData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(inputData); // Pass data to child component
    setInputData({ name: "", email: "" }); // Clear form after submit
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Props Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={inputData.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={inputData.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <ChildComponent formData={formData} />
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const ChildComponent = ({ formData, showOutput }) => {
//   return (
//     <div>
//       <h2>Submitted Data:</h2>
//       {showOutput && formData && (
//         <div>
//           <p><strong>Name:</strong> {formData.name}</p>
//           <p><strong>Email:</strong> {formData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [formData, setFormData] = useState(null);
//   const [inputData, setInputData] = useState({ name: "", email: "" });
//   const [showOutput, setShowOutput] = useState(false); // Control output display

//   const handleChange = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData(inputData); // Store submitted data
//     setShowOutput(false); // Keep output hidden even after submitting
//     setInputData({ name: "", email: "" }); // Clear form fields
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>React Props Example (No Output After Submit)</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={inputData.name}
//           onChange={handleChange}
//           required
//         />
//         <br /><br />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={inputData.email}
//           onChange={handleChange}
//           required
//         />
//         <br /><br />
//         <button type="submit">Submit</button>
//       </form>

//       {/* Output will not be shown after submit */}
//       <ChildComponent formData={formData} showOutput={showOutput} />
//     </div>
//   );
// };

// export default App;