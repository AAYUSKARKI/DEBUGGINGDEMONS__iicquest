import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import Question from './Question';
import './styles.css'
const questions = [
  {
    id: 1,
    question: 'What are the signs of stress in students?',
    answer: 'Irritability, changes in sleep patterns, headaches, stomach issues, and difficulty concentrating. Emotional signs include feelings of overwhelm, anxiety, or depression'
  },
  {
    id: 2,
    question: 'How can students manage stress effectively?',
    answer: 'Regular physical activity, adequate sleep, healthy eating, mindfulness practices, time management skills, and seeking support from friends, family, or mental health professionals.',
  },
  {
    id: 3,
    question: 'What are common mental health issues among students?',
    answer: 'Anxiety, depression, attention deficit hyperactivity disorder (ADHD), and eating disorders. Each of these conditions has specific symptoms and requires appropriate intervention.',
  },
  {
    id: 4,
    question: 'What are the benefits of mindfulness and meditation for students?',
    answer: 'Improved focus, reduced stress and anxiety, better emotional regulation, and enhanced overall well-being. Practices can include meditation, deep breathing exercises, or yoga.',
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([] as any);

  useEffect(() => {
    const results = questions.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div >
      <h1 className='font-bold text-3xl text-center'>How can we help you?</h1>
    <Searchbar onSearchChange={handleSearchChange} />
      <section className='faq'>
        {searchResults.map(item=> (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

export default FAQ;