import React from 'react'
import './App.css';
import AccordionItem from './components/AccordionItem';

const App = () => {

  const accordionData = [
    {
      id: 1,
      title: "First accordion title",
      content: 'Lorem ipsum dolor sit amet. Aut sunt earum aut laboriosam praesentium eos doloremque vero ab voluptatibus perferendis aut earum architecto aut sapiente autem.'
    },
    {
      id: 2,
      title: "Second accordion title",
      content: 'Lorem ipsum dolor sit amet. Aut sunt earum aut laboriosam praesentium eos doloremque vero ab voluptatibus perferendis aut earum architecto aut sapiente autem.'
    },
    {
      id: 3,
      title: "Third accordion title",
      content: 'Lorem ipsum dolor sit amet. Aut sunt earum aut laboriosam praesentium eos doloremque vero ab voluptatibus perferendis aut earum architecto aut sapiente autem.'
    },
  ]

  return (
    <div className="accordion-container">
      {accordionData.map(accordion => {
        return (
          <AccordionItem key={accordion.id}  title={accordion.title} content={accordion.content}  />
        )
      })}
    </div>
  );
}

export default App;
