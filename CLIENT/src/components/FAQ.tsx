import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import Question from './Question';
import './styles.css'
const questions = [
  {
    id: 1,
    question: 'What are the signs of stress in students?',
    answer: 'Irritability, changes in sleep patterns, headaches, stomach issues, and difficulty concentrating. Emotional signs include feelings of overwhelm, anxiety, or depression',
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
  {
    id: 5,
    question: 'How can schools support students’ mental health?',
    answer: 'Schools can offer counseling services, mental health education, stress management workshops, and create a supportive environment that encourages open communication about mental health issues.',
  },
  {
    id: 6,
    question: 'What role does nutrition play in mental health for students?',
    answer: 'A balanced diet with adequate vitamins and minerals can improve mood, energy levels, and cognitive function, while deficiencies can contribute to anxiety, depression, and other mental health issues.',
  },
  {
    id: 7,
    question: 'How does physical exercise impact students’ mental health?',
    answer: 'Physical exercise releases endorphins, reduces stress hormones, improves sleep, and boosts self-esteem, all of which contribute positively to mental health.',
  },
  {
    id: 8,
    question: 'What are the effects of social media on students’ mental health?',
    answer: 'Social media can lead to increased anxiety, depression, and feelings of isolation due to cyberbullying, comparison with others, and the pressure to present a perfect life online.',
  },
  {
    id: 9,
    question: 'How can students develop healthy sleep habits?',
    answer: 'Maintaining a regular sleep schedule, creating a relaxing bedtime routine, limiting screen time before bed, and ensuring a comfortable sleep environment can help improve sleep quality.',
  },
  {
    id: 10,
    question: 'Why is time management important for students’ mental health?',
    answer: 'Effective time management reduces stress, prevents burnout, and allows students to balance academic responsibilities with relaxation and social activities, leading to better overall well-being.',
  },
  {
    id: 11,
    question: 'What is the impact of peer pressure on students’ mental health?',
    answer: 'Peer pressure can lead to increased stress, anxiety, and risky behaviors as students may feel compelled to conform to group norms and expectations, sometimes against their better judgment.',
  },
  {
    id: 12,
    question: 'How can students seek help if they are struggling with mental health issues?',
    answer: 'Students can talk to a trusted adult, school counselor, or mental health professional. Many schools also have resources and support groups available for students in need.',
  },
  {
    id: 13,
    question: 'What are the symptoms of burnout in students?',
    answer: 'Symptoms include chronic fatigue, lack of motivation, feelings of helplessness, difficulty concentrating, and a decrease in academic performance. Emotional exhaustion and detachment are also common.',
  },
  {
    id: 14,
    question: 'How does bullying affect students’ mental health?',
    answer: 'Bullying can lead to severe emotional distress, anxiety, depression, and low self-esteem. It can also result in physical symptoms like headaches and stomachaches and negatively impact academic performance.',
  },
  {
    id: 15,
    question: 'What strategies can students use to improve focus and concentration?',
    answer: 'Techniques include setting specific goals, breaking tasks into smaller steps, minimizing distractions, practicing mindfulness, and taking regular breaks to rest and recharge.',
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
      <h1 className='font-bold text-4xl text-center p-4'>How can we help you?</h1>
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