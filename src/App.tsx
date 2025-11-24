import Header from './Header.tsx'
import List from './List.tsx'
import Button from './Button.tsx'
import Footer from './Footer.tsx'

function App() {
  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <Header />
      <main>
        <h2>Lista</h2>
        <List />
        <h2>Botões</h2>
        <Button lang='inglês' handleClick={() => handleButtonClick('https://en.wikipedia.org/wiki/Main_Page')} />
        <Button lang='português' handleClick={() => handleButtonClick('https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal')} />
        <Button lang='francês' handleClick={() => handleButtonClick('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal')} />
      </main>
      <Footer />
    </>
  )
}

export default App
