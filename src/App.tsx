/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import AppPromo from './components/AppPromo';
import LocationFinder from './components/LocationFinder';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-[#FFC72C] selection:text-black flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MenuHighlights />
        <AppPromo />
        <LocationFinder />
      </main>
      <Footer />
    </div>
  );
}
