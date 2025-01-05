import {
  BrownComponent,
  Declaration,
  HomeVideo,
  Intro,
  OurProducts,
  Testimonial,
  ProductCategories,
  Services
} from './components';
import ContactForm from './components/Contact Form';
import ExporterDisclaimer from './components/ExporterDisclaimer';

function App() {
  return (
    <>
      <HomeVideo />
      <Intro />
      <ProductCategories />
      <Services />
      <Declaration />
      <OurProducts />
      <ExporterDisclaimer />
      <BrownComponent />
      <Testimonial />
      <ContactForm/>
    </>
  );
}

export default App;
