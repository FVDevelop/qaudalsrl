import React from 'react';

const MethodologyDiagram = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <svg
        viewBox="0 0 1400 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="1400" height="600" fill="white" />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003249" />
            <stop offset="100%" stopColor="#007EA7" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto">
            <polygon points="0 0, 12 5, 0 10" fill="#007EA7" />
          </marker>
        </defs>
        
        {/* Stage 1: Diagnóstico */}
        <g>
          <rect x="40" y="80" width="220" height="140" rx="12" fill="#003249" />
          <text x="150" y="125" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
            1. DIAGNÓSTICO
          </text>
          <text x="150" y="155" textAnchor="middle" fill="white" fontSize="17">
            Relevamiento, datos base,
          </text>
          <text x="150" y="180" textAnchor="middle" fill="white" fontSize="17">
            riesgos y oportunidades
          </text>
        </g>

        {/* Arrow 1 */}
        <path d="M 270 150 L 320 150" stroke="#007EA7" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 2: Ingeniería */}
        <g>
          <rect x="330" y="80" width="220" height="140" rx="12" fill="#007EA7" />
          <text x="440" y="125" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
            2. INGENIERÍA
          </text>
          <text x="440" y="155" textAnchor="middle" fill="white" fontSize="17">
            Alternativas, diseño y
          </text>
          <text x="440" y="180" textAnchor="middle" fill="white" fontSize="17">
            documentación técnica
          </text>
        </g>

        {/* Arrow 2 */}
        <path d="M 560 150 L 610 150" stroke="#007EA7" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 3: Plan de obra */}
        <g>
          <rect x="620" y="80" width="220" height="140" rx="12" fill="#009688" />
          <text x="730" y="125" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
            3. PLAN DE OBRA
          </text>
          <text x="730" y="155" textAnchor="middle" fill="white" fontSize="17">
            Cronograma, presupuesto,
          </text>
          <text x="730" y="180" textAnchor="middle" fill="white" fontSize="17">
            contrataciones
          </text>
        </g>

        {/* Arrow 3 */}
        <path d="M 850 150 L 900 150" stroke="#007EA7" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 4: Ejecución */}
        <g>
          <rect x="910" y="80" width="220" height="140" rx="12" fill="#4CAF50" />
          <text x="1020" y="125" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
            4. EJECUCIÓN
          </text>
          <text x="1020" y="155" textAnchor="middle" fill="white" fontSize="17">
            Dirección/inspección,
          </text>
          <text x="1020" y="180" textAnchor="middle" fill="white" fontSize="17">
            aseguramiento de calidad
          </text>
        </g>

        {/* Arrow 4 */}
        <path d="M 1140 150 L 1190 150" stroke="#007EA7" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 5: Puesta en marcha */}
        <g>
          <rect x="1200" y="80" width="160" height="140" rx="12" fill="#8BC34A" />
          <text x="1280" y="115" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            5. PUESTA EN
          </text>
          <text x="1280" y="140" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            MARCHA
          </text>
          <text x="1280" y="170" textAnchor="middle" fill="white" fontSize="16">
            Comisionamiento
          </text>
          <text x="1280" y="190" textAnchor="middle" fill="white" fontSize="16">
            y capacitación
          </text>
        </g>

        {/* Stage 6: Operación y mejora (clean bottom section) */}
        <g>
          <rect x="40" y="300" width="1320" height="120" rx="12" fill="url(#blueGradient)" />
          <text x="700" y="340" textAnchor="middle" fill="white" fontSize="26" fontWeight="bold">
            6. OPERACIÓN Y MEJORA (PROCESO CONTINUO)
          </text>
          <text x="700" y="375" textAnchor="middle" fill="white" fontSize="20">
            Monitoreo, M&V, mantenimiento y optimización
          </text>
        </g>
      </svg>
    </div>
  );
};

export default MethodologyDiagram;