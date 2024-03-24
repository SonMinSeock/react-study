import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="exprience" className="accordion-item-title">
              We got 20 years of experience.
            </Accordion.Title>
            <Accordion.Content id="exprience" className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>we are in the business of planning highly individualized vacation trips for more than 20 years.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="local-guides" className="accordion-item-title">
              We're working with local guides
            </Accordion.Title>
            <Accordion.Content id="local-guides" className="accordion-item-content">
              <article>
                <p>we are not doing this along from our office.</p>
                <p>Instead, we are working with local guides to ensure a safe a pleasant vacation.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
