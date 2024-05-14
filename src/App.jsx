import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return(
    <main>
      <section>
        <h2>
          Why work with us?
        </h2>
        <Accordion className='accordion'>
          <AccordionItem className='accordion-item' title='We got 20 years of expiriens'>
            <article>
              <p> You can't go wrong with us.</p>
              <p>We got 20 years of expiriens'</p>
            </article>
          </AccordionItem>
          <AccordionItem className='accordion-item' title='We working with local guides'>
            <article>
              <p> Let's have fun you all</p>
              <p>We working with local guides'</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;


//Introducing Compound Components
