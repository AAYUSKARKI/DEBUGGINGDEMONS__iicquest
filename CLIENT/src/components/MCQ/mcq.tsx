import axios from 'axios'
import {useEffect} from 'react'
const MentalHealthMCQ = () => {
    const questions = [
      {
        question: "In the past week, how often have you felt down, depressed, or hopeless?",
        options: ["Rarely (less than 1 day)", "Sometimes (2-3 days)", "Often (4 or more days)"],
      },
      {
        question: "How often do you feel overwhelmed by your studies or responsibilities?",
        options: ["Never", "Occasionally", "Very often"],
      },
      {
        question: "Do you find it difficult to concentrate or focus for extended periods?",
        options: ["No, I can focus well.", "Sometimes, I get distracted.", "Yes, I struggle to concentrate most of the time."],
      },
      {
        question: "How many hours of sleep do you typically get per night?",
        options: ["7-8 hours", "Less than 6 hours", "More than 9 hours"],
      },
      {
        question: "How often do you wake up feeling tired and lacking energy?",
        options: ["Rarely (less than 1 day a week)", "Sometimes (2-3 days a week)", "Most days of the week"],
      },
      {
        question: "Do you struggle to fall asleep at night or find yourself waking up frequently?",
        options: ["No, I sleep soundly most nights.", "Occasionally, I have trouble sleeping.", "Yes, I have difficulty falling asleep or staying asleep most nights."],
      },
      {
        question: "How often do you withdraw from social activities or avoid spending time with friends and family?",
        options: ["Never", "Sometimes", "Often"],
      },
    ];
  
    return (
      <div  >

     <div className="flex justify-center items-center">  
     <div className="flex  flex-col m-5 gap-3 bg-slate-300 p-4 rounded-md">
      <h2 className="m-auto  text-4xl font-bold my-4">Mental Health Check-In</h2>
        <div className="flex  flex-col ">
        <p className="font-bold text-3xl">Please answer the following questions honestly to assess your current well-being.</p>
        {questions.map((question, index) => (
          <div key={index} className="font-bold text-2xl">
            <p>{question.question}</p>
            <ul className="text-xl text-slate-700 font-md">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <input type="radio" name={`question-${index}`} value={option} /> {option}
                </li>
              ))}
              <br/>
            </ul>
          </div>
        ))}
        {/* submit button  */}
        </div>
        <button className="bg-blue-600 h-12 rounded-md text-white text-2xl font-bold">Submit</button>
      </div>
     </div>
      </div>
    );
  };
  
  export default MentalHealthMCQ;

