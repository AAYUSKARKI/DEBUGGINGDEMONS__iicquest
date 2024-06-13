import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import Question from './Question';
import './styles.css'
const questions = [
  {
    id: 1,
    question: 'About Pricing',
    answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 2,
    question: 'Fix problems & request removals',
    answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 3,
    question: 'Browse the web',
    answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 4,
    question: 'Search on your phone or tablet',
    answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
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
      <h2>How can we help you?</h2>
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