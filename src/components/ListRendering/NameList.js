import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Massa"];
  // without keys - React throws a Warning in console
  // const nameList = names.map((name) => <h1>{name}</h1>);

  // using index as keys - not recommended, and could cause issues as seen here: https://codepen.io/gopinav/pen/gQpepq (try adding at start of list and try sorting)
  // we only do this if the list meets all these conditions
  // (1) the items in the list have no stable/unique id, (2) The list is a static list and will not change,
  // (3) The list will never be reordered or filtered
  // Note: 2nd param is always the index of the elt being processed
  const nameList = names.map((name, index) => (
	<h1 key={index}>
	  {index}: {name}
	</h1>
  ));

  const people = [
	{
	  id: 1,
	  name: "Bruce",
	  age: 30,
	  skill: "Tech",
	},
	{
	  id: 2,
	  name: "Clark",
	  age: 28,
	  skill: "Flying",
	},
	{
	  id: 3,
	  name: "Diana",
	  age: 26,
	  skill: "Justice",
	},
  ];

  // instead of having the JSX here, it is recommended to have the JSX be another conponent
  const personList = people.map((person) => {
	// see this interesting article about key props: https://reactjs.org/docs/lists-and-keys.html#keys. Keys are very important on efficient update of the UI
	// key is a can be anything, as long as we know for sure it is unique for all elts in list
	// key props are reserved, and are NOT accessible in the child component
	return <Person key={person.id} person={person}></Person>;
  });

  return (
	<div>
	  {/* without the map method */}
	  {/* <h2> {names[0]} </h2> 
			<h2> {names[1]} </h2> 
			<h2> {names[2]} </h2>  
			*/}

	  {/* Using map method: */}
	  {/* {names.map( name => {
				return <h1>{name}</h1>
			})} */}
	  {/* OR Since we are returning a one-liner*/}
	  {/* {names.map(name => <h1>{name}</h1>)} */}

	  {/* finally to move logic out of return statement */}
	  {nameList}
	  {/* {personList} */}
	</div>
  );
}

export default NameList;
