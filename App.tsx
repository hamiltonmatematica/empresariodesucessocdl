import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Speakers />
        <Agenda />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;