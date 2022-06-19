import React from 'react'
import Header from '../Homepage/Header'

function Tutorial() {
  return (
    <div>
        <Header />
        <div class="nav-bottom">
            
            <div class="col-3">
        	<div>
                Tutorial
            </div>
            
            <span class="focus-bg"></span>
            </div>
            </div>
        <div className='tutorial-div'>
            
        <header>
    <h1><a href="#">Tutorial</a></h1>
  </header>
  <main>
    <article>
      <h2>Web development</h2>
      <h3>JavaScript</h3><br/>
      <p>
      JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic .
      </p><br/>

      <pre>
      document.getElementById("demo").innerHTML = "My First JavaScript";

        <br/>
        </pre>
        <br/>
      <p>
          <h3>JavaScript Values</h3><br/>
          The JavaScript syntax defines two types of values:

Fixed values
Variable values
Fixed values are called Literals.

Variable values are called Variables.


       </p><br/>
       <pre>
       // How to create variables:<br />
var x;<br />
let y;<br />

// How to use variables:<br />
x = 5;<br />
y = 6;<br />
let z = x + y;<br />
       </pre><br/>
      <p><h3>
      Variables</h3><br/>
      Variables are containers for storing data (storing data values).

In this example, x, y, and z, are variables, declared with the var keyword: </p><br/>
    <pre>
    var x = 5;<br />
    var y = 6;<br />
    var z = x + y;<br />
    </pre><br/>
      <p><h3>The Concept of Data Types</h3><br/>
        In programming, data types is an important concept.
        To be able to operate on variables, it is important to know something about the type.
        <pre><br/>
        let length = 16;                        // Number<br />
let lastName = "Johnson";                      // String<br />
let x=[1,2,3,4]                                 //array<br />
            </pre></p><br/>
      <p><h3>
      JavaScript Strings
          </h3><br/>
          A JavaScript string is zero or more characters written inside quotes.
          <pre><br/>
          let text = "John Doe";
          </pre>
          </p><br/>
      <p><h3>JavaScript HTML DOM Document</h3><br/>
      The document object represents your web page.

        If you want to access any element in an HTML page, you always start with accessing the document object.

        Below are some examples of how you can use the document object to access and manipulate HTML.
        <pre><br/>
        document.getElementById(id)	//Find an element by element id <br />
        element.attribute = new value	//Change the attribute value of an HTML element<br />
        element.style.property = new style	//Change the style of an HTML element<br />
        </pre><br/>
       </p>
      <p>
          <h3>JavaScript HTML DOM - Changing CSS</h3><br/>
            <pre>
            document.getElementById(id).style.property = new style
            </pre><br/>

      </p>
        </article>
    </main>
    <footer>

            Reference

    </footer>
    <footer>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PlbupGCBV6w"
     title="YouTube video player" frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </footer>
    </div>
    </div>
  )
}

export default Tutorial