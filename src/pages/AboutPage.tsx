import PageHero from '../components/pageHero/pageHero'
import "../styles/about.css"
import Footer from '../components/footer/Footer'
const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <section className="page section section-center about-center">
      <img src="https://images.unsplash.com/photo-1542653605-9ad296a12d11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vYmlsZSUyMHN0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="nice desk" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sequi sunt, fugit vitae quibusdam fuga! Dolor nam sint ex neque iusto excepturi, magnam est sequi dolore mollitia vitae magni libero velit consectetur nostrum quidem ut, a ad! Pariatur recusandae consequuntur aliquam, libero facere reprehenderit optio culpa. Minima deleniti praesentium eos.</p>
      </article>
    </section>
    <Footer />
  </main>
}

export default AboutPage
