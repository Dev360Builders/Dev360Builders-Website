import AboutPage from "./_components/AboutPage";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import ServicesPage from "./_components/ServicePage";
import WorkTogether from "./_components/WorkTogether";

export default function Home() {
  return (
    <div className="bg-white bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <Navbar />
      <Hero />
      <WorkTogether />
      <ServicesPage />
      <AboutPage />
      
      {/* Add other sections here */}
      <div className="h-screen"></div> {/* Placeholder for next section */}
    </div>
  );
}