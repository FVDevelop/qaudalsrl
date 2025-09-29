import React from 'react';

const MethodologyDiagram = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <svg
        viewBox="0 0 1600 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="1600" height="600" fill="white" />
        
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
          <rect x="40" y="60" width="280" height="180" rx="12" fill="#003249" />
          <text x="180" y="125" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
            1. DIAGNÓSTICO
          </text>
          <text x="180" y="155" textAnchor="middle" fill="white" fontSize="19">
            Relevamiento, datos base,
          </text>
          <text x="180" y="180" textAnchor="middle" fill="white" fontSize="19">
            riesgos y oportunidades
          </text>
        </g>

        {/* Arrow 1 */}
        <path d="M 330 150 L 370 150" stroke="#007EA7" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Stage 2: Ingeniería */}
        <g>
          <rect x="380" y="60" width="280" height="180" rx="12" fill="#007EA7" />
          <text x="520" y="125" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
            2. INGENIERÍA
          </text>
          <text x="520" y="155" textAnchor="middle" fill="white" fontSize="19">
            Alternativas, diseño y
          </text>
          <text x="520" y="180" textAnchor="middle" fill="white" fontSize="19">
            documentación técnica
          </text>
        </g>

        {/* Arrow 2 */}
        <path d="M 670 150 L 710 150" stroke="#007EA7" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Stage 3: Plan de obra */}
        <g>
          <rect x="720" y="60" width="280" height="180" rx="12" fill="#009688" />
          <text x="860" y="125" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
            3. PLAN DE OBRA
          </text>
          <text x="860" y="155" textAnchor="middle" fill="white" fontSize="19">
            Cronograma, presupuesto,
          </text>
          <text x="860" y="180" textAnchor="middle" fill="white" fontSize="19">
            contrataciones
          </text>
        </g>

        {/* Arrow 3 */}
        <path d="M 1010 150 L 1050 150" stroke="#007EA7" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Stage 4: Ejecución */}
        <g>
          <rect x="1060" y="60" width="280" height="180" rx="12" fill="#4CAF50" />
          <text x="1200" y="125" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
            4. EJECUCIÓN
          </text>
          <text x="1200" y="155" textAnchor="middle" fill="white" fontSize="19">
            Dirección/inspección,
          </text>
          <text x="1200" y="180" textAnchor="middle" fill="white" fontSize="19">
            aseguramiento de calidad
          </text>
        </g>

        {/* Arrow down to stage 5 */}
        <path d="M 1200 250 L 1200 290" stroke="#007EA7" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Stage 5: Puesta en marcha */}
        <g>
          <rect x="1060" y="300" width="280" height="120" rx="12" fill="#8BC34A" />
          <text x="1200" y="335" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
            5. PUESTA EN MARCHA
          </text>
          <text x="1200" y="365" textAnchor="middle" fill="white" fontSize="18">
            Comisionamiento y capacitación
          </text>
        </g>

        {/* Stage 6: Operación y mejora (clean bottom section) */}
        <g>
          <rect x="40" y="450" width="1520" height="120" rx="12" fill="url(#blueGradient)" />
          <text x="800" y="490" textAnchor="middle" fill="white" fontSize="26" fontWeight="bold">
            6. OPERACIÓN Y MEJORA (PROCESO CONTINUO)
          </text>
          <text x="800" y="525" textAnchor="middle" fill="white" fontSize="20">
            Monitoreo, M&V, mantenimiento y optimización
          </text>
        </g>
      </svg>
    </div>
  );
};

export default MethodologyDiagram;