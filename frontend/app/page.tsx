import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import ServicesPage from "./_components/ServicePage";
import WorkTogether from "./_components/WorkTogether";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WorkTogether />
      <ServicesPage />
      
      {/* Add other sections here */}
      <div className="h-screen"></div> {/* Placeholder for next section */}
    </div>
  );
}