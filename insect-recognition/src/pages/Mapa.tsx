import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet'; // Importando o Leaflet e o tipo LatLngExpression
import 'leaflet/dist/leaflet.css'; // Importando o CSS do Leaflet
import "leaflet.heat";

// Interface para os dados do heatmap
interface HeatmapData {
  lat: number;
  lng: number;
  count: number;
}

// Componente para o Heatmap
function HeatmapLayer({ data }: { data: HeatmapData[] }) {
  const map = useMap();

  useEffect(() => {
    // Convertendo os dados para o formato esperado pelo leaflet.heat
    const heatmapPoints: L.HeatLatLngTuple[] = data.map(({ lat, lng, count }) => [lat, lng, count]);

    // Criando o heatLayer
    const heatmapLayer = L.heatLayer(heatmapPoints, {
      radius: 20,
      blur: 15,
      maxZoom: 100,
    });

    heatmapLayer.addTo(map); // Adicionando o heatLayer ao mapa

    // Limpeza ao desmontar o componente
    return () => {
      map.removeLayer(heatmapLayer);
    };
  }, [map, data]);

  return null;
}

// Dados de exemplo
const pontosDeMonitoramento: HeatmapData[] = [
  { lat: -24.6749, lng: -54.2814, count: 15 },
  { lat: -24.6756, lng: -54.2818, count: 25 },
  { lat: -24.6755, lng: -54.2811, count: 10 },
  { lat: -24.6762, lng: -54.2812, count: 52 },
];

// Componente principal do mapa
function MapaDeCalor() {
  return (
    <MapContainer
      center={[-24.67573978950437, -54.28106709219699]} // Coordenadas do centro do mapa
      zoom={13} // Nível de zoom inicial
      style={{ height: '100vh', width: '100%' }} // Estilo do mapa
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Fonte do mapa
      />
      <HeatmapLayer data={pontosDeMonitoramento} /> {/* Usando o HeatmapLayer */}
        
    </MapContainer>
  );
}

export default MapaDeCalor;

