import Accordion from "./components/Accordion/Accordion";

function App() {
  return(
    <main>
      <section>
        <h2>
          Why work with us?
        </h2>
        <Accordion className='accordion'>
          <Accordion.Item id='exp' className='accordion-item' title='We got 20 years of expiriens'>
            <article>
              <p> You can't go wrong with us.</p>
              <p>We got 20 years of expiriens'</p>
            </article>
          </Accordion.Item>
          <Accordion.Item id='local' className='accordion-item' title='We working with local guides'>
            <article>
              <p> Let's have fun you all</p>
              <p>We working with local guides'</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

