import React, { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

const images = [
  "/assets/img.jpeg",
  "/assets/img1.jpeg",
  "/assets/img2.jpeg",
  "/assets/img3.jpeg",
  "/assets/img4.jpeg",
  "/assets/img5.jpeg",
  "/assets/img6.jpeg",
  "/assets/img7.jpeg",
  "/assets/img8.jpeg",
  "/assets/img9.jpeg",
  "/assets/img10.jpeg",
  "/assets/img11.jpeg"
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="font-sans">
      <Navbar />

      <section className="bg-dark text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading title="Homestay Gallery" subtitle="A Glimpse of Paradise" light={true} />
        </div>
      </section>

      <section className="py-24 bg-light px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden cursor-pointer group luxury-shadow"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>
          <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
