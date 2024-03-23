import Accordion from "./components/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.item id="exprience" title="We got 20 years of exprience" className="accordion-item">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>we are in the business of planning highly individualized vacation trips for more than 20 years.</p>
            </article>
          </Accordion.item>
          <Accordion.item id="local-guides" title="We're working with local guides" className="accordion-item">
            <article>
              <p>we are not doing this along from our office.</p>
              <p>Instead, we are working with local guides to ensure a safe a pleasant vacation.</p>
            </article>
          </Accordion.item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
