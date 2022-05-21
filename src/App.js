import React from "react"
import Card from './components/Card'
import data from './data'
import './App.css'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id} 
        title={item.title}
        description={item.description}
        rating={item.rating}
      />
    )
  })
  return (
    <section className="cards-list">
      {cards}
    </section>
  );
}
