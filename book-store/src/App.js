import React from "react";
import Header from "./component/Header";
import {Routes, Route} from "react-router-dom";
import AddBook from "./component/AddBook";
import Home from "./component/Home";
import About from "./component/About";
import Books from "./component/Books";
import BookDetails from "./component/Book/BookDetails";


function App() {
  return (
    <React.Fragment >
      <header>
        <Header />
      </header>
       <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/add" element={<AddBook />} exact/>
          <Route path="/books" element={<Books />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/books/:id" element={<BookDetails />} exact/>
        </Routes>
       </main>
    </React.Fragment>
  );
}

export default App;
