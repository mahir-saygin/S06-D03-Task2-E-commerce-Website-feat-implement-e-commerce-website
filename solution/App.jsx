import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Products from './components/Products';
import SideBar from './components/SideBar';

function App() {
  /* ADIM 1: seçilen kategoriyi tutmak için category isimli bir state tanımlayalım ve başlangıç değeri 'electronics' olsun. */
  const [category, setCategory] = useState('electronics');

  /* ADIM 2: seçilen kategoriyi değiştirecek bir change handler fonskiypnu yazalım ve adı handleCatChange olsun. */
  function handleCatChange(cat) {
    setCategory(cat);
  }
  return (
    <>
      <Header />
      <div className="content-section">
        {/* ADIM 3: category ve handleCatChange'i aynı isimlerle prop olarak ilgili component/componentlere yollayalım */}
        <SideBar handleCatChange={handleCatChange} category={category} />
        <Products category={category} />
      </div>
      <Footer />
    </>
  );
}

export default App;
