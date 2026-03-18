"use client";
import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

declare const L: any; // Leaflet global

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EuroIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12" />
      <path d="M4 14h9" />
      <path d="M19 6a7 7 0 1 0 0 12" />
    </svg>
  );
}

const features = [
  {
    id: 'rapidite',
    icon: <ClockIcon />,
    title: 'Intervention rapide',
    desc: <>Temps moyen d'arrivée inférieur à <span className="t4c-mono">45</span> minutes sur l'ensemble de notre zone.</>
  },
  {
    id: 'wallonie-flandre',
    icon: <MapPinIcon />,
    title: 'Wallonie & Flandre',
    desc: 'Couverture complète des deux régions. Autoroutes et routes secondaires.',
  },
  {
    id: 'prix',
    icon: <EuroIcon />,
    title: 'Prix transparent',
    desc: 'Devis annoncé par téléphone avant intervention. Aucun supplément caché.',
  },
];

const cities = [
  [51.2194, 4.4025, 'Anvers (base)', true],
  [51.0543, 3.7174, 'Gand', false],
  [51.2093, 3.2247, 'Bruges', false],
  [50.8503, 4.3517, 'Bruxelles', false],
  [50.8798, 4.7005, 'Leuven', false],
  [50.9307, 5.3325, 'Hasselt', false],
  [50.6326, 5.5797, 'Liège', false],
  [50.4669, 4.8670, 'Namur', false],
  [50.4542, 3.9563, 'Charleroi', false],
  [50.4541, 3.6886, 'Mons', false],
  [50.6833, 3.1667, 'Tournai', false],
  [50.8271, 3.2653, 'Courtrai', false],
  [49.6833, 5.8167, 'Arlon', false],
  [50.2649, 4.4431, 'Couvin', false],
  [51.0924, 2.8926, 'Ostende', false]
];

export function CoverageZone({ dict }: { dict: any }) {
  const textRef = useScrollReveal<HTMLDivElement>();
  const mapContainerRef = useScrollReveal<HTMLDivElement>();
  const mapRef = useRef<any>(null);
  const mapInitialized = useRef(false);

  const features = [
    {
      id: 'rapidite',
      icon: <ClockIcon />,
      title: dict.coverageZone.features.speed.title,
      desc: <>{dict.coverageZone.features.speed.desc}</>
    },
    {
      id: 'wallonie-flandre',
      icon: <MapPinIcon />,
      title: dict.coverageZone.features.area.title,
      desc: dict.coverageZone.features.area.desc,
    },
    {
      id: 'prix',
      icon: <EuroIcon />,
      title: dict.coverageZone.features.price.title,
      desc: dict.coverageZone.features.price.desc,
    },
  ];

  useEffect(() => {
    // We use an intersection observer to init map when visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !mapInitialized.current) {
        initLeafletMap();
      }
    }, { threshold: 0.1 });

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    function initLeafletMap() {
      if (mapInitialized.current) return;
      
      // Si Leaflet n'est pas encore chargé via next/script, on réessaie dans 100ms
      if (typeof L === 'undefined') {
        setTimeout(initLeafletMap, 100);
        return;
      }
      
      mapInitialized.current = true;

      const map = L.map('coverage-map', {
        center: [50.5, 4.5],
        zoom: 8,
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: false
      });

      mapRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 12,
        minZoom: 7
      }).addTo(map);

      const pulseIcon = L.divIcon({
        className: '',
        html: '<div class="map-marker-pulse"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      const cityIcon = L.divIcon({
        className: '',
        html: '<div class="map-marker-city"></div>',
        iconSize: [8, 8],
        iconAnchor: [4, 4]
      });

      cities.forEach(([lat, lng, name, isMain]: any) => {
        const marker = L.marker([lat, lng], {
          icon: isMain ? pulseIcon : cityIcon
        }).addTo(map);
        
        marker.bindTooltip(name, {
          className: 'map-tooltip',
          direction: 'top',
          offset: [0, isMain ? -12 : -8]
        });
      });

      L.circle([50.5, 4.5], {
        radius: 130000,
        color: '#FF4500',
        weight: 1,
        opacity: 0.25,
        fillColor: '#FF4500',
        fillOpacity: 0.04,
        dashArray: '6 4'
      }).addTo(map);
    }

    return () => {
      observer.disconnect();
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        mapInitialized.current = false;
      }
    };
  }, []);

  return (
    <section
      id="zone"
      style={{
        background: 'var(--t4c-bg)',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* Text column */}
          <div ref={textRef} className="t4c-reveal">
            <span className="t4c-section-label">{dict.coverageZone.badge}</span>
            <h2 style={{
              fontFamily: 'var(--t4c-font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.01em',
              color: 'var(--t4c-text)',
              textTransform: 'uppercase',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            }}>
              {dict.coverageZone.title1}
              <br />
              <span style={{ color: 'var(--t4c-accent)' }}>{dict.coverageZone.title2}</span>
            </h2>
            <p style={{
              fontFamily: 'var(--t4c-font-body)',
              fontSize: '1rem',
              color: 'var(--t4c-muted)',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}>
              {dict.coverageZone.subtitle}
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {features.map((f) => (
                <div key={f.id} className="t4c-zone-feature">
                  <div className="t4c-zone-icon-wrap">
                    {f.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--t4c-font-display)',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      letterSpacing: '0.03em',
                      color: 'var(--t4c-text)',
                      textTransform: 'uppercase',
                      marginBottom: '0.25rem',
                    }}>
                      {f.title}
                    </div>
                    <p style={{
                      fontFamily: 'var(--t4c-font-body)',
                      fontSize: '0.875rem',
                      color: 'var(--t4c-muted)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map column */}
          <div
            ref={mapContainerRef}
            className="t4c-reveal t4c-reveal-delay-2"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="t4c-map-card">
              <div id="coverage-map"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

