import React from 'react';

const MethodologyDiagram = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <svg
        viewBox="0 0 1200 900"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="1200" height="900" fill="white" />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003249" />
            <stop offset="100%" stopColor="#007EA7" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="15" markerHeight="12" refX="14" refY="6" orient="auto">
            <polygon points="0 0, 15 6, 0 12" fill="#007EA7" />
          </marker>
          <marker id="arrowhead-white" markerWidth="15" markerHeight="12" refX="14" refY="6" orient="auto">
            <polygon points="0 0, 15 6, 0 12" fill="white" />
          </marker>
        </defs>
        
        {/* Stage 1: Diagnóstico */}
        <g>
          <rect x="80" y="80" width="200" height="120" rx="12" fill="#003249" />
          <text x="180" y="115" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            1. DIAGNÓSTICO
          </text>
          <text x="180" y="145" textAnchor="middle" fill="white" fontSize="16">
            Relevamiento, datos base,
          </text>
          <text x="180" y="165" textAnchor="middle" fill="white" fontSize="16">
            riesgos y oportunidades
          </text>
        </g>

        {/* Arrow 1 */}
        <path d="M 290 140 L 350 140" stroke="#007EA7" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 2: Ingeniería */}
        <g>
          <rect x="360" y="80" width="200" height="120" rx="12" fill="#007EA7" />
          <text x="460" y="115" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            2. INGENIERÍA
          </text>
          <text x="460" y="145" textAnchor="middle" fill="white" fontSize="16">
            Alternativas, diseño y
          </text>
          <text x="460" y="165" textAnchor="middle" fill="white" fontSize="16">
            documentación técnica
          </text>
        </g>

        {/* Arrow 2 */}
        <path d="M 570 140 L 630 140" stroke="#009688" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 3: Plan de obra */}
        <g>
          <rect x="640" y="80" width="200" height="120" rx="12" fill="#009688" />
          <text x="740" y="115" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            3. PLAN DE OBRA
          </text>
          <text x="740" y="145" textAnchor="middle" fill="white" fontSize="16">
            Cronograma, presupuesto,
          </text>
          <text x="740" y="165" textAnchor="middle" fill="white" fontSize="16">
            contrataciones
          </text>
        </g>

        {/* Arrow 3 (down) */}
        <path d="M 740 210 L 740 280" stroke="#4CAF50" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 4: Ejecución */}
        <g>
          <rect x="640" y="290" width="200" height="120" rx="12" fill="#4CAF50" />
          <text x="740" y="325" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            4. EJECUCIÓN
          </text>
          <text x="740" y="355" textAnchor="middle" fill="white" fontSize="16">
            Dirección/inspección,
          </text>
          <text x="740" y="375" textAnchor="middle" fill="white" fontSize="16">
            aseguramiento de calidad
          </text>
        </g>

        {/* Arrow 4 (left) */}
        <path d="M 630 350 L 570 350" stroke="#8BC34A" strokeWidth="4" markerEnd="url(#arrowhead)" />

        {/* Stage 5: Puesta en marcha */}
        <g>
          <rect x="360" y="290" width="200" height="120" rx="12" fill="#8BC34A" />
          <text x="460" y="320" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
            5. PUESTA EN
          </text>
          <text x="460" y="340" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
            MARCHA
          </text>
          <text x="460" y="370" textAnchor="middle" fill="white" fontSize="16">
            Comisionamiento y
          </text>
          <text x="460" y="390" textAnchor="middle" fill="white" fontSize="16">
            capacitación
          </text>
        </g>

        {/* Arrow 5 (connecting back to start for continuous cycle) */}
        <path d="M 350 350 L 290 350 L 290 280 L 180 280 L 180 210" stroke="#8BC34A" strokeWidth="3" markerEnd="url(#arrowhead)" strokeDasharray="8,4" />

        {/* Stage 6: Operación y mejora (transversal) */}
        <g>
          <rect x="80" y="500" width="760" height="140" rx="12" fill="url(#blueGradient)" fillOpacity="0.95" />
          <text x="460" y="545" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
            6. OPERACIÓN Y MEJORA (PROCESO CONTINUO)
          </text>
          <text x="460" y="580" textAnchor="middle" fill="white" fontSize="18">
            Monitoreo, M&amp;V, mantenimiento y optimización
          </text>
          
          {/* Bidirectional arrows connecting to all stages */}
          <path d="M 180 490 L 180 420" stroke="white" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead-white)" markerStart="url(#arrowhead-white)" />
          <path d="M 460 490 L 460 420" stroke="white" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead-white)" markerStart="url(#arrowhead-white)" />
          <path d="M 740 490 L 740 420" stroke="white" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead-white)" markerStart="url(#arrowhead-white)" />
          
          {/* Additional feedback arrows from stage 6 to early stages */}
          <path d="M 150 500 Q 100 450 100 300 Q 100 250 150 220" stroke="white" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead-white)" fill="none" />
          <path d="M 770 500 Q 820 450 820 300 Q 820 250 770 220" stroke="white" strokeWidth="3" strokeDasharray="8,4" markerEnd="url(#arrowhead-white)" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default MethodologyDiagram;