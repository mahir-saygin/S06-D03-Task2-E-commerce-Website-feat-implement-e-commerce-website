import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Products from './components/Products';
import SideBar from './components/SideBar';

function App() {
  const [category, setCategory] = useState('electronics');
  /* ADIM 1: seçilen kategoriyi tutmak için category isimli bir state tanımlayalım ve başlangıç değeri 'electronics' olsun. */

  function handleCatChange(cat) {
    setCategory(cat);
  }
  /* ADIM 2: seçilen kategoriyi değiştirecek bir change handler fonskiyonu yazalım ve adı handleCatChange olsun. */

  return (
    <>
      <Header />
      <div className="content-section">
        {/* ADIM 3: category ve handleCatChange'i aynı isimlerle prop olarak ilgili component/componentlere yollayalım */}
        <SideBar category={category} handleCatChange={setCategory} />
        <Products category={category} />
      </div>
      <Footer />
    </>
  );
}

export default App;
