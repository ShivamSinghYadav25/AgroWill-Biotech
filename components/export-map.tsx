'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const markets: { name: string; coordinates: [number, number] }[] = [
  { name: 'India', coordinates: [78.9, 22.6] },
  { name: 'United Arab Emirates', coordinates: [54.3, 24.4] },
  { name: 'United Kingdom', coordinates: [-1.5, 52.4] },
  { name: 'Germany', coordinates: [10.4, 51.1] },
  { name: 'United States', coordinates: [-98.5, 39.8] },
  { name: 'Singapore', coordinates: [103.8, 1.35] },
  { name: 'Australia', coordinates: [133.8, -25.3] },
  { name: 'Japan', coordinates: [138.2, 36.2] },
  { name: 'South Africa', coordinates: [24.6, -28.9] },
  { name: 'Brazil', coordinates: [-51.9, -14.2] },
]

export function ExportMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 165 }}
        width={800}
        height={400}
        role="img"
        aria-label="World map highlighting Agrowill Biotech export markets"
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: 'var(--secondary)',
                    stroke: 'var(--border)',
                    strokeWidth: 0.5,
                    outline: 'none',
                  },
                  hover: { fill: 'var(--muted)', outline: 'none' },
                  pressed: { fill: 'var(--muted)', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
        {markets.map((market) => (
          <Marker key={market.name} coordinates={market.coordinates}>
            <circle r={5} fill="var(--primary)" fillOpacity={0.25} />
            <circle r={2.5} fill="var(--primary)" />
          </Marker>
        ))}
      </ComposableMap>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 p-4 text-xs text-muted-foreground">
        {markets.map((market) => (
          <li key={market.name} className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {market.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
