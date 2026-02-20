import { Toaster } from 'sonner';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalPage } from './pages/LegalPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen">
        <Toaster position="top-center" richColors />
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/legal",
    element: (
      <>
        <Header />
        <LegalPage />
        <Footer />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}