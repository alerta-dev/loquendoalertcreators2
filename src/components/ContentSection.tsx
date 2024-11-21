import React from 'react';
import { Download } from 'lucide-react';

interface DownloadItem {
  id: string;
  name: string;
  description: string;
  downloadUrl: string;
}

const mockData: Record<string, DownloadItem[]> = {
  programas: [
    { id: '1', name: 'Adobe Photoshop 2024', description: 'Editor de imágenes profesional', downloadUrl: '#' },
    { id: '2', name: 'Visual Studio Code', description: 'Editor de código potente', downloadUrl: '#' },
    { id: '3', name: 'Blender', description: 'Software de modelado 3D', downloadUrl: '#' },
  ],
  plugins: [
    { id: '1', name: 'SEO Plugin', description: 'Optimización para motores de búsqueda', downloadUrl: '#' },
    { id: '2', name: 'Security Suite', description: 'Conjunto de herramientas de seguridad', downloadUrl: '#' },
  ],
  renders: [
    { id: '1', name: 'Escena Urbana', description: 'Render 4K de ciudad moderna', downloadUrl: '#' },
    { id: '2', name: 'Paisaje Natural', description: 'Escena de naturaleza en alta calidad', downloadUrl: '#' },
  ],
  fondos: [
    { id: '1', name: 'Abstracto Moderno', description: 'Fondo abstracto 4K', downloadUrl: '#' },
    { id: '2', name: 'Paisaje Nocturno', description: 'Ciudad de noche en 4K', downloadUrl: '#' },
  ],
  sonidos: [
    { id: '1', name: 'Pack de Efectos', description: 'Efectos de sonido variados', downloadUrl: '#' },
    { id: '2', name: 'Música Ambiental', description: 'Tracks para ambientación', downloadUrl: '#' },
  ],
  materiales: [
    { id: '1', name: 'Texturas 4K', description: 'Pack de texturas en alta resolución', downloadUrl: '#' },
    { id: '2', name: 'Materiales PBR', description: 'Materiales realistas para 3D', downloadUrl: '#' },
  ],
};

const ContentSection: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  if (activeSection === 'inicio') {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-6">Bienvenido a DownloadHub</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Tu portal de descargas para recursos digitales. Encuentra programas, plugins, 
          renders y mucho más. Todo lo que necesitas en un solo lugar.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {['programas', 'plugins', 'renders'].map((section) => (
            <div key={section} className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors">
              <h3 className="text-xl font-semibold mb-2 capitalize">{section}</h3>
              <p className="text-gray-400 text-sm">
                Explora nuestra colección de {section} disponibles para descarga.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const items = mockData[activeSection] || [];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8 capitalize">{activeSection}</h2>
      <div className="grid gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-zinc-900 rounded-lg p-6 flex items-center justify-between hover:bg-zinc-800 transition-colors">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Descargar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentSection;