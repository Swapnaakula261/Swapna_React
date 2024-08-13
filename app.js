
/* at end create element this heading is a js object and render function job is to take this heading object and converting it into heading tag and put it in the browser*/


/* 

nested html structure creation
<div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div>
creating this by react
createElement("element",{},"children")
more then one childresn then we are converting it into array
[val,val]   array of children


when root. render replacing wverything in root not appending replacing the data
react taking control
react works only inside the root eleement other portion work same

-----React is a libraryIt can work independently in a small portion as well thats why its a library----it is giving some methods to help in our application. react can work in existing app as well 
array of children making our code complext right? for this we have 

JSX  => makes react easy rather then core development
*/



const parent=React.createElement("div",{id:"parent"},

[React.createElement("div",{id:"child1"},
[React.createElement("h1",{id:"hea"},"Swapna"),React.createElement("h3",{id:"he"},"Seetha"),React.createElement("h2",{id:"head"},"Akula")]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"hea"},"Swapna"),React.createElement("h3",{id:"he"},"Seetha"),React.createElement("h2",{id:"head"},"Akula")]
)]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);




const heading=React.createElement("h2",{id:"swa",swa:"s"},"HEllo world");
console.log(heading);
console.log(heading.props.children);

/*const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

 