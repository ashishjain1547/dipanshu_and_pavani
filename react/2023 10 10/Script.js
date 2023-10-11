const { useState } = React;

const Main = () => {
  const questions = [
    {
      sno: "1",
      ques: "Which of these is not a data type in JavaScript?",
      section: ["Data Types"],
      options: ["String", "Floating Point Number", "Array", "Boolean"],
      ans: "Floating Point Number",
      qtype: "scq",
    },
    {
      sno: "2",
      ques: `What will be the output of the following code?
          let x = 5
          let y = 10
          console.log(x++)
          console.log(x + y)`,
      section: ["Operators", "Code Evaluation"],
      options: ["5 and 15", "6 and 15", "5 and 16", "6 and 16"],
      ans: "5 and 16",
      qtype: "scq",
    },
    {
      sno: "3",
      ques: "Which of these expressions return true?",
      section: ["Data Types"],
      options: [
        "5 == 5.0",
        'new String("John") == "John"',
        'new String("John") == new String("John")',
        'parseInt("5") === parseFloat("5.0")',
      ],
      ans: [
        "5 == 5.0",
        'new String("John") == "John"',
        'parseInt("5") === parseFloat("5.0")',
      ],
      qtype: "mcq",
    },

    {
      sno: "4",
      ques: `Select the data types that are used in the following code:
                      let length = 16;          
                      let lastName = "Johnson";  
                      const x = {
                      firstName: "John",
                      lastName: "Doe"
                      };`,
      section: ["Data Types", "Code Evaluation"],
      options: ["Boolean", "Array", "String", "Number", "Object"],
      ans: ["String", "Number", "Object"],
      qtype: "mcq",
    },
    {
      sno: "5",
      ques: "Which of these is not a direct use case of length property of an array?",
      section: ["Array"],
      options: [
        "To get the number of elements in the array.",
        "To get the last element of the array.",
        "To execute a function for each element of an array.",
      ],
      ans: "To execute a function for each element of an array.",
      qtype: "scq",
    },
  ];

  //  console.log(questions);
  const [currentQues, setCurrentQues] = useState(1);
  const [showScore, SetShowScore] = useState(false);
  const [answersCheckBox, setAnswersCheckBox] = useState([]);
  const [answersRadio, setAnswersRadio] = useState("");

  /// handle the options
  const handleChange = (e) => {
    const quary = e.target.value;
    // console.log(e.target);
    if (e.target.type === "checkbox") {
      console.log("i am in checked");
      if (e.target.checked) {
        console.log(e);
        setAnswersCheckBox([...answersCheckBox, e.target.value]);
        //console.log(answersCheckBox);
      } else {
        let updatedList = [...answersCheckBox];
        updatedList = updatedList.filter((item) => {
          return item !== quary;
        });
        setAnswersCheckBox(updatedList);
        //console.log(answersCheckBox);
      }
    }
    if (e.target.type === "radio") {
      //console.log(e.target.value);
      setAnswersRadio(e.target.value);
    }
  };
  // End of the handleChange
  console.log(answersRadio);
  console.log(answersCheckBox);

  // for the next btn
  const handleClickNext = () => {
    if (currentQues === questions.length - 1) {
      SetShowScore(true);
    } else {
      console.log(setCurrentQues(currentQues + 1));
    }
    handleResult(answersRadio);
  };
  // for the prev btn
  const handleClickPrev = () => {
    console.log(setCurrentQues(currentQues - 1));
  };

  // check ans and update score
  const handleResult = (ans) => {
    console.log(typeof ans);
    if (typeof ans == "string") {
      if (questions[currentQues].ans === ans) {
        console.log("right");
      } else {
        console.log("wrong");
      }
    }
  };
  // handle submit btn
  const handleSubmit = () => {};

  //return statement
  return showScore || currentQues < 0 ? (
    <div>score</div>
  ) : (
    <div>
      <div className="App-header">
        <div className="">{questions[currentQues].ques}</div>
        <div>{currentQues}</div>
        <div className="option">
          {questions[currentQues].options.map((option) => {
            // console.log(option);
            return (
              <div>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="action"
                  type={
                    questions[currentQues].qtype === "scq"
                      ? "radio"
                      : "checkbox"
                  }
                  value={option}
                  id={option}
                  /// for exp
                />
                <label htmlFor={option}>{option}</label>
                <br></br>
              </div>
            );
          })}
        </div>
        <input type="button" value="next" onClick={handleClickNext} />
        <input type="button" value="prev" onClick={handleClickPrev} />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.querySelector(".root"));
