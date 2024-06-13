import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Option {
  optionText: string;
  optionNumber: number;
}

interface Question {
  question: string;
  options: Option[];
}

const MentalHealthMCQ: React.FC = () => {

  const navigate = useNavigate()
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const getAllQuestions = async () => {
    try {
      const res = await axios.get('http://localhost:7000/api/v1/mcq/getquestions');
      console.log(res.data.data,'is')
      setQuestions(res.data.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  const handleOptionChange = (questionIndex: number, option: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:7000/api/v1/mcq/submitanswers', answers);
      console.log(res.data);

      if(res.data.redirectTopreliminary){
         navigate('/secondstage')
      }
      if(res.data.redirectToprecaution)
        {
          navigate('/firststage')
        }
        if(res.data.redirectTopoststage)
          {
            navigate('/thirdstage')
          }
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col m-5 gap-3 bg-slate-300 p-4 rounded-md">
          <h2 className="m-auto text-4xl font-bold my-4">Mental Health Check-In</h2>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">
              Please answer the following questions honestly to assess your current well-being.
            </p>
            {questions.slice(0,7).map((question, index) => (
              <div key={index} className="font-bold text-2xl">
                <p>{question.question}</p>
                <ul className="text-xl text-slate-700 font-md">
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option.optionText}
                        onChange={() => handleOptionChange(index, option.optionText)}
                      />{' '}
                      {option.optionText}
                    </li>
                  ))}
                  <br />
                </ul>
              </div>
            ))}
            {/* submit button */}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-600 h-12 rounded-md text-white text-2xl font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthMCQ;
