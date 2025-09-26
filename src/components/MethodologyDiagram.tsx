import React from 'react';

const MethodologyDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="800" height="600" fill="white" />
        
        {/* Stage 1: Diagnóstico */}
        <g>
          <rect x="50" y="50" width="140" height="80" rx="8" fill="#003249" />
          <text x="120" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            1. DIAGNÓSTICO
          </text>
          <text x="120" y="95" textAnchor="middle" fill="white" fontSize="10">
            Relevamiento, datos base,
          </text>
          <text x="120" y="108" textAnchor="middle" fill="white" fontSize="10">
            riesgos y oportunidades
          </text>
        </g>

        {/* Arrow 1 */}
        <path d="M 200 90 L 240 90" stroke="#007EA7" strokeWidth="3" markerEnd="url(#arrowhead)" />

        {/* Stage 2: Ingeniería */}
        <g>
          <rect x="250" y="50" width="140" height="80" rx="8" fill="#007EA7" />
          <text x="320" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            2. INGENIERÍA
          </text>
          <text x="320" y="95" textAnchor="middle" fill="white" fontSize="10">
            Alternativas, diseño y
          </text>
          <text x="320" y="108" textAnchor="middle" fill="white" fontSize="10">
            documentación técnica
          </text>
        </g>

        {/* Arrow 2 */}
        <path d="M 400 90 L 440 90" stroke="#009688" strokeWidth="3" markerEnd="url(#arrowhead)" />

        {/* Stage 3: Plan de obra */}
        <g>
          <rect x="450" y="50" width="140" height="80" rx="8" fill="#009688" />
          <text x="520" y="75" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            3. PLAN DE OBRA
          </text>
          <text x="520" y="95" textAnchor="middle" fill="white" fontSize="10">
            Cronograma, presupuesto,
          </text>
          <text x="520" y="108" textAnchor="middle" fill="white" fontSize="10">
            contrataciones
          </text>
        </g>

        {/* Arrow 3 (down) */}
        <path d="M 520 140 L 520 180" stroke="#4CAF50" strokeWidth="3" markerEnd="url(#arrowhead)" />

        {/* Stage 4: Ejecución */}
        <g>
          <rect x="450" y="190" width="140" height="80" rx="8" fill="#4CAF50" />
          <text x="520" y="215" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            4. EJECUCIÓN
          </text>
          <text x="520" y="235" textAnchor="middle" fill="white" fontSize="10">
            Dirección/inspección,
          </text>
          <text x="520" y="248" textAnchor="middle" fill="white" fontSize="10">
            aseguramiento de calidad
          </text>
        </g>

        {/* Arrow 4 (left) */}
        <path d="M 440 230 L 400 230" stroke="#8BC34A" strokeWidth="3" markerEnd="url(#arrowhead)" />

        {/* Stage 5: Puesta en marcha */}
        <g>
          <rect x="250" y="190" width="140" height="80" rx="8" fill="#8BC34A" />
          <text x="320" y="210" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            5. PUESTA EN
          </text>
          <text x="320" y="225" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
            MARCHA
          </text>
          <text x="320" y="245" textAnchor="middle" fill="white" fontSize="10">
            Comisionamiento y
          </text>
          <text x="320" y="258" textAnchor="middle" fill="white" fontSize="10">
            capacitación
          </text>
        </g>

        {/* Stage 6: Operación y mejora (transversal) */}
        <g>
          <rect x="50" y="330" width="540" height="100" rx="8" fill="#FFA726" fillOpacity="0.9" />
          <text x="320" y="355" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            6. OPERACIÓN Y MEJORA (PROCESO CONTINUO)
          </text>
          <text x="320" y="380" textAnchor="middle" fill="white" fontSize="12">
            Monitoreo, M&V, mantenimiento y optimización
          </text>
          
          {/* Bidirectional arrows connecting to all stages */}
          <path d="M 120 320 L 120 140" stroke="white" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-white)" markerStart="url(#arrowhead-white)" />
          <path d="M 320 320 L 320 280" stroke="white" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-white)" markerStart="url(#arrowhead-white)" />
          <path d="M 520 320 L 520 280" stroke="white" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-white)" markerStart="url(#arrowhead-white)" />
        </g>

        {/* Arrow definitions */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#007EA7" />
          </marker>
          <marker id="arrowhead-white" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default MethodologyDiagram;