import Accordion from "./components/Accordion/Accordion";

function App() {
  return(
    <main>
      <section>
        <h2>
          Why work with us?
        </h2>
        <Accordion className='accordion'>
        <Accordion.Item id='exp' className='accordion-item'>
          <Accordion.Title id='exp' className='accordion-item-title'>
          We got 20 years of expiriens
            </Accordion.Title  >
          <Accordion.Content id='exp' className='accordion-item-content' >
          <article>
              <p> Let's have fun you all</p>
              <p>We working with local guides</p>
            </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id='local' className='accordion-item'>
          <Accordion.Title id='local' className='accordion-item-title'>
          We working with local guides
            </Accordion.Title  >
          <Accordion.Content id='local' className='accordion-item-content' >
          <article>
              <p> Let's have fun you all</p>
              <p>We working with local guides</p>
            </article>
            </Accordion.Content>
          </Accordion.Item>
          
        </Accordion>
      </section>
    </main>
  );
}

export default App;