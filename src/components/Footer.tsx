export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2023 Tales App. Todos los derechos reservados.</p>
          <ul className="flex justify-center space-x-6">
            <li><a href="/about" className="hover:text-blue-300">Sobre Nosotros</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contacto</a></li>
            <li><a href="/privacy" className="hover:text-blue-300">Privacidad</a></li>
          </ul>
        </div>
      </footer>
    );
  }