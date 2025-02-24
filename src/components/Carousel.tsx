'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const stories = [
  { id: 1, image: '/story1.jpg', title: 'El Mágico Mundo de las Hadas' },
  { id: 2, image: '/story2.jpg', title: 'Aventuras en el Espacio' },
  { id: 3, image: '/story3.jpg', title: 'El Bosque Encantado' },
  { id: 4, image: '/story4.jpg', title: 'La Ciudad Perdida' },
  { id: 5, image: '/story5.jpg', title: 'El Reino de los Dragones' },
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación al cargar el carrusel
    gsap.from(carouselRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    // Animación al hacer hover en las tarjetas
    const cards = carouselRef.current?.querySelectorAll('.card');
    cards?.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });
  }, []);

  return (
    <div ref={carouselRef} className="container mx-auto mt-24 p-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Cuentos Destacados</h2>
      <div className="flex overflow-x-auto space-x-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="card flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-900">{story.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}