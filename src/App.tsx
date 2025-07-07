import  {Header}  from './components/Header.tsx'
import { MainLayout } from './Layouts/MainLayout.tsx'
import { Hero } from './components/Hero.tsx'
import { Features } from './components/Feactures.tsx'
import {Dashboard} from './Pages/Dashboard.tsx'
import './App.css'

function App() {
  
  return (
    <>
      <Header/>
      <MainLayout>
      <Hero/>
      <Features/>
        <Dashboard/>
        <h1><b>Bienvenue</b></h1>
        <p>Voici l'interface d'un site reponsive et dynamique</p>
      </MainLayout>
     

    </>
  )
}

export default App
