import React, { useEffect, useState } from "react";

const Input = () => {
  const [data, setData] = useState([]);
   const [text, setText] = useState("");

  const emojiBox = {
    "::smiley::" : "😀",
    "::sad::" : "😫",
    "::happy::": "😊",
  };



 useEffect(() => {
   let arr = text.split(" ");
   setText(arr.map((el) => (emojiBox[el] ? emojiBox[el] : el)).join(" "));
 }, [text]);

 const handleChange = (e) => {
   setText(e.target.value);
 };

  const AddNow = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    text: text,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/text/addText", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .then((res) => fetchData())
    .catch((error) => console.log("error", error));

    setText("");
  };


  const fetchData = () => {
    fetch(`http://localhost:4000/text/getText`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };


  useEffect(() => {
    fetchData();
  }, []);

console.log(text)

  return (
    <>
      <div id="input-container">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={text}
          id="input_box"
        ></input>
        <button onClick={AddNow}>Add Now</button>
      </div>
      <div id="container">
        <div>
          {data.map(({ text }, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Input;
