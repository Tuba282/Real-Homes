import AgentsSection from "./Agents"
import Hero from "./Hero"
import ImageSection from "./ImagesSection"
import InquirySection from "./InquirySection"
import Partners from "./Partners"
import Properties from "./Properties"
import Testimonial from "./Testimonial"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Properties />
      <InquirySection />
      <ImageSection />
      <AgentsSection />
      <Testimonial />
      <Partners />
    </div>
  )
}

export default Home