// Business Model Canvas Data
const canvasData = {
  generatedAt: "2025-01-13T15:30:00Z",
  customerSegments: {
    primary: "Equipos de fútbol amateur y ligas barriales en Argentina que necesitan uniformes personalizados con diseños únicos para diferenciarse, típicamente con presupuestos limitados pero alta demanda de identidad visual",
    secondary: [
      "Empresas mineras que requieren uniformes corporativos resistentes y con branding institucional",
      "PyMEs y empresas medianas que necesitan indumentaria corporativa para eventos, promociones o identificación de personal"
    ],
    characteristics: [
      "Compran en volumen (mínimo 15 unidades por pedido)",
      "Valoran la personalización y diseño único sobre el precio",
      "Ciclo de compra estacional (pre-temporada de torneos, eventos corporativos)",
      "Decisión de compra grupal o institucional (delegado, gerente de RRHH)",
      "Sensibles a tiempos de entrega para fechas específicas"
    ]
  },
  valuePropositions: {
    main: "Indumentaria deportiva y corporativa 100% personalizada con sublimación de alta calidad, fabricada localmente con control total del proceso y tiempos de entrega competitivos",
    secondary: [
      "Diseño ilimitado sin costo adicional por complejidad de arte (la sublimación permite cualquier diseño)",
      "Producción local que elimina demoras de importación y permite ajustes de último momento",
      "Precio accesible por unidad (~$20.000/prenda) para equipos con presupuesto limitado"
    ],
    jobsToBeDone: [
      "Funcional: Vestir al equipo/empresa con indumentaria resistente, cómoda y visualmente profesional",
      "Emocional: Generar sentido de pertenencia e identidad grupal a través de un uniforme único que los represente"
    ]
  },
  channels: {
    awareness: [
      "Referidos boca a boca entre equipos del mismo torneo/liga",
      "Presencia en redes sociales mostrando trabajos terminados (Instagram/Facebook)",
      "Contactos directos en empresas mineras a través de red existente"
    ],
    evaluation: [
      "Muestras físicas de trabajos anteriores",
      "Catálogo digital con diseños previos y opciones de personalización",
      "Visita a la fábrica para clientes corporativos grandes"
    ],
    purchase: [
      "WhatsApp Business para pedidos y coordinación",
      "Formulario web simple para especificaciones de diseño",
      "Visita comercial presencial para cuentas corporativas"
    ],
    delivery: [
      "Entrega directa en punto acordado (cancha, empresa, domicilio)",
      "Envío por transporte/correo para clientes fuera del área"
    ],
    afterSales: [
      "Garantía de reposición por fallas de confección o sublimado",
      "Descuento en pedidos de reposición o ampliación del plantel",
      "Registro de diseños para repetir pedidos fácilmente"
    ]
  },
  customerRelationships: {
    type: "personal",
    description: "Relación directa y personalizada con cada cliente, especialmente en la etapa de diseño donde se co-crea el producto final. El contacto es humano (WhatsApp/teléfono) y se construye confianza para pedidos recurrentes",
    retentionMechanisms: [
      "Almacenamiento del diseño original para facilitar recompras",
      "Descuentos por volumen o fidelidad (segundo pedido en adelante)",
      "Notificación proactiva antes de temporada para anticipar pedidos"
    ]
  },
  revenueStreams: [
    {
      primary: "Venta de kits deportivos completos (camiseta + short) para equipos de fútbol",
      type: "transactional",
      pricing: "$600.000 por kit de 15 jugadores (~$40.000 por conjunto completo, ~$20.000 por prenda individual)",
      secondary: [
        "Uniformes corporativos para empresas (remeras, chombas, pantalones)",
        "Pedidos especiales para empresas mineras (volúmenes más grandes, mayor ticket)",
        "Accesorios adicionales: medias, buzos, camperas de abrigo"
      ]
    }
  ],
  keyResources: {
    physical: [
      "Fábrica propia con maquinaria de confección (recta, overlock, collareta)",
      "Impresora de sublimación de gran formato",
      "Plancha térmica/calandra para transferencia",
      "Stock de telas deportivas sublimables (poliéster)",
      "Espacio físico de producción equipado"
    ],
    intellectual: [
      "Biblioteca de diseños y plantillas reutilizables",
      "Know-how técnico en sublimación y confección deportiva",
      "Base de datos de clientes y sus diseños anteriores"
    ],
    human: [
      "Operarios de confección capacitados",
      "Diseñador gráfico (interno o freelance) para arte de sublimación",
      "Responsable comercial/atención al cliente"
    ],
    financial: [
      "Capital de trabajo para compra de insumos antes del cobro",
      "Flujo de caja para cubrir costos fijos mensuales de $4.5M"
    ]
  },
  keyActivities: [
    "Diseño gráfico de artes personalizados según requerimiento del cliente",
    "Impresión por sublimación sobre papel transfer",
    "Corte y confección de prendas deportivas",
    "Transferencia térmica del diseño a la tela",
    "Control de calidad de producto terminado",
    "Gestión comercial y seguimiento de pedidos",
    "Entrega y post-venta"
  ],
  keyPartners: [
    {
      partner: "Proveedores de telas deportivas sublimables",
      relationship: "proveedor",
      value: "Suministro de materia prima principal (tela poliéster) con precios competitivos y disponibilidad constante"
    },
    {
      partner: "Proveedores de tintas y papel de sublimación",
      relationship: "proveedor",
      value: "Insumos críticos para el proceso de impresión con calidad consistente"
    },
    {
      partner: "Diseñador gráfico freelance",
      relationship: "aliado",
      value: "Capacidad de diseño adicional para picos de demanda sin costo fijo"
    },
    {
      partner: "Ligas y torneos de fútbol amateur",
      relationship: "aliado",
      value: "Canal de acceso directo a múltiples equipos, posible acuerdo de proveedor oficial"
    }
  ],
  costStructure: {
    fixedCosts: [
      "Alquiler del espacio de producción: $1.800.000/mes",
      "Sueldos de personal: $1.600.000/mes",
      "Servicios (luz, gas, internet): $330.000/mes",
      "Otros gastos fijos (mantenimiento, seguros): $770.000/mes"
    ],
    variableCosts: [
      "Tela deportiva por prenda: ~$6.000-8.000",
      "Tintas y papel de sublimación por prenda: ~$2.000-3.000",
      "Hilos y avíos de confección: ~$500-1.000",
      "Packaging y entrega: ~$1.000-2.000 por kit"
    ],
    biggestCost: "Alquiler del espacio de producción ($1.8M/mes) seguido de sueldos ($1.6M/mes) representan el 75% de los costos fijos",
    costDriven: false
  },
  summary: "El negocio es una fábrica de indumentaria deportiva personalizada que integra verticalmente diseño, sublimación y confección para ofrecer uniformes únicos a equipos de fútbol amateur y empresas. La propuesta de valor se centra en personalización total sin límites de diseño, producción local con tiempos controlados, y precios accesibles gracias a la eliminación de intermediarios. El modelo es transaccional B2B con tickets de $600.000+ por pedido, apuntando a capturar demanda recurrente (temporadas deportivas, rotación de personal). La estructura de costos fijos de $4.5M/mes requiere un volumen mínimo de ~8 kits deportivos mensuales para cubrir punto de equilibrio.",
  businessType: "B2B D2C manufacturing - Fabricación y venta directa de indumentaria personalizada",
  revenueModel: "Venta transaccional de productos manufacturados por pedido, con pricing por kit/volumen y margen sobre costo de producción",
  scalabilityScore: 5,
  scalabilityRationale: "Escalabilidad limitada por capacidad física de producción y mano de obra; crecimiento requiere inversión proporcional en maquinaria y personal, aunque hay potencial de mejora con automatización y estandarización de procesos"
}

export default function CanvasPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Business Model Canvas</h1>
          <p className="text-gray-600 mt-1">Modelo de negocio visualizado en 9 bloques</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Escalabilidad:</span>
            <div className="flex items-center gap-2">
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-emerald-500 h-2 rounded-full" 
                  style={{ width: `${(canvasData.scalabilityScore / 10) * 100}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-900">{canvasData.scalabilityScore}/10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Grid - Simulating Osterwalder's Canvas Layout */}
      <div className="grid grid-cols-10 gap-3 min-h-[600px]">
        {/* Key Partners - Column 1-2, Full Height */}
        <div className="col-span-10 md:col-span-2 bg-purple-50 border border-purple-200 rounded-xl p-4">
          <h3 className="font-semibold text-purple-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-purple-200 rounded flex items-center justify-center text-xs">🤝</span>
            Socios Clave
          </h3>
          <ul className="space-y-2 text-sm text-purple-900">
            {canvasData.keyPartners.map((partner, idx) => (
              <li key={idx} className="bg-purple-100/50 rounded p-2">
                <p className="font-medium">{partner.partner}</p>
                <p className="text-xs text-purple-700 mt-1">{partner.value}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Activities - Column 3-4, Top Half */}
        <div className="col-span-10 md:col-span-2 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-200 rounded flex items-center justify-center text-xs">⚙️</span>
            Actividades Clave
          </h3>
          <ul className="space-y-1 text-sm text-blue-900">
            {canvasData.keyActivities.map((activity, idx) => (
              <li key={idx} className="bg-blue-100/50 rounded px-2 py-1 text-xs">
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Value Propositions - Column 5-6, Full Height */}
        <div className="col-span-10 md:col-span-2 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <h3 className="font-semibold text-emerald-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-200 rounded flex items-center justify-center text-xs">🎁</span>
            Propuesta de Valor
          </h3>
          <div className="space-y-3 text-sm text-emerald-900">
            <div className="bg-emerald-100/50 rounded p-3">
              <p className="font-medium text-emerald-800">Principal:</p>
              <p className="text-xs mt-1">{canvasData.valuePropositions.main}</p>
            </div>
            <div>
              <p className="font-medium text-emerald-800 text-xs mb-2">Secundarias:</p>
              {canvasData.valuePropositions.secondary.map((prop, idx) => (
                <p key={idx} className="text-xs bg-emerald-100/30 rounded px-2 py-1 mb-1">{prop}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-emerald-800 text-xs mb-2">Jobs to be Done:</p>
              {canvasData.valuePropositions.jobsToBeDone.map((job, idx) => (
                <p key={idx} className="text-xs bg-emerald-100/30 rounded px-2 py-1 mb-1">{job}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Relationships - Column 7-8, Top Half */}
        <div className="col-span-10 md:col-span-2 bg-pink-50 border border-pink-200 rounded-xl p-4">
          <h3 className="font-semibold text-pink-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-pink-200 rounded flex items-center justify-center text-xs">💕</span>
            Relación con Clientes
          </h3>
          <div className="space-y-2 text-sm text-pink-900">
            <div className="bg-pink-100/50 rounded p-2">
              <span className="px-2 py-0.5 bg-pink-200 rounded text-xs font-medium">{canvasData.customerRelationships.type}</span>
              <p className="text-xs mt-2">{canvasData.customerRelationships.description}</p>
            </div>
            <div>
              <p className="font-medium text-xs mb-1">Retención:</p>
              {canvasData.customerRelationships.retentionMechanisms.map((mech, idx) => (
                <p key={idx} className="text-xs bg-pink-100/30 rounded px-2 py-1 mb-1">{mech}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Segments - Column 9-10, Full Height */}
        <div className="col-span-10 md:col-span-2 bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 className="font-semibold text-orange-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-orange-200 rounded flex items-center justify-center text-xs">👥</span>
            Segmentos de Clientes
          </h3>
          <div className="space-y-3 text-sm text-orange-900">
            <div className="bg-orange-100/50 rounded p-2">
              <p className="font-medium text-xs text-orange-800">Principal:</p>
              <p className="text-xs mt-1">{canvasData.customerSegments.primary}</p>
            </div>
            <div>
              <p className="font-medium text-xs text-orange-800 mb-1">Secundarios:</p>
              {canvasData.customerSegments.secondary.map((seg, idx) => (
                <p key={idx} className="text-xs bg-orange-100/30 rounded px-2 py-1 mb-1">{seg}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-xs text-orange-800 mb-1">Características:</p>
              {canvasData.customerSegments.characteristics.map((char, idx) => (
                <p key={idx} className="text-xs bg-orange-100/30 rounded px-2 py-1 mb-1">• {char}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Key Resources, Channels */}
      <div className="grid grid-cols-10 gap-3">
        {/* Key Resources */}
        <div className="col-span-10 md:col-span-4 bg-cyan-50 border border-cyan-200 rounded-xl p-4">
          <h3 className="font-semibold text-cyan-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-cyan-200 rounded flex items-center justify-center text-xs">🏭</span>
            Recursos Clave
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="font-medium text-cyan-800 text-xs mb-2">Físicos:</p>
              {canvasData.keyResources.physical.map((res, idx) => (
                <p key={idx} className="text-xs bg-cyan-100/50 rounded px-2 py-1 mb-1">{res}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-cyan-800 text-xs mb-2">Intelectuales:</p>
              {canvasData.keyResources.intellectual.map((res, idx) => (
                <p key={idx} className="text-xs bg-cyan-100/50 rounded px-2 py-1 mb-1">{res}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-cyan-800 text-xs mb-2">Humanos:</p>
              {canvasData.keyResources.human.map((res, idx) => (
                <p key={idx} className="text-xs bg-cyan-100/50 rounded px-2 py-1 mb-1">{res}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-cyan-800 text-xs mb-2">Financieros:</p>
              {canvasData.keyResources.financial.map((res, idx) => (
                <p key={idx} className="text-xs bg-cyan-100/50 rounded px-2 py-1 mb-1">{res}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="col-span-10 md:col-span-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <h3 className="font-semibold text-indigo-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-indigo-200 rounded flex items-center justify-center text-xs">📢</span>
            Canales
          </h3>
          <div className="grid grid-cols-5 gap-2 text-sm">
            <div>
              <p className="font-medium text-indigo-800 text-xs mb-2">Awareness</p>
              {canvasData.channels.awareness.map((ch, idx) => (
                <p key={idx} className="text-xs bg-indigo-100/50 rounded px-2 py-1 mb-1">{ch}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-indigo-800 text-xs mb-2">Evaluación</p>
              {canvasData.channels.evaluation.map((ch, idx) => (
                <p key={idx} className="text-xs bg-indigo-100/50 rounded px-2 py-1 mb-1">{ch}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-indigo-800 text-xs mb-2">Compra</p>
              {canvasData.channels.purchase.map((ch, idx) => (
                <p key={idx} className="text-xs bg-indigo-100/50 rounded px-2 py-1 mb-1">{ch}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-indigo-800 text-xs mb-2">Entrega</p>
              {canvasData.channels.delivery.map((ch, idx) => (
                <p key={idx} className="text-xs bg-indigo-100/50 rounded px-2 py-1 mb-1">{ch}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-indigo-800 text-xs mb-2">Post-venta</p>
              {canvasData.channels.afterSales.map((ch, idx) => (
                <p key={idx} className="text-xs bg-indigo-100/50 rounded px-2 py-1 mb-1">{ch}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Cost Structure & Revenue Streams */}
      <div className="grid grid-cols-2 gap-3">
        {/* Cost Structure */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 className="font-semibold text-red-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-red-200 rounded flex items-center justify-center text-xs">💸</span>
            Estructura de Costos
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-red-800 text-xs mb-2">Costos Fijos:</p>
              {canvasData.costStructure.fixedCosts.map((cost, idx) => (
                <p key={idx} className="text-xs bg-red-100/50 rounded px-2 py-1 mb-1">{cost}</p>
              ))}
            </div>
            <div>
              <p className="font-medium text-red-800 text-xs mb-2">Costos Variables:</p>
              {canvasData.costStructure.variableCosts.map((cost, idx) => (
                <p key={idx} className="text-xs bg-red-100/50 rounded px-2 py-1 mb-1">{cost}</p>
              ))}
            </div>
          </div>
          <div className="mt-3 p-2 bg-red-100/50 rounded">
            <p className="text-xs text-red-800"><strong>Mayor costo:</strong> {canvasData.costStructure.biggestCost}</p>
          </div>
        </div>

        {/* Revenue Streams */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="font-semibold text-green-800 text-sm mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-green-200 rounded flex items-center justify-center text-xs">💰</span>
            Fuentes de Ingresos
          </h3>
          {canvasData.revenueStreams.map((stream, idx) => (
            <div key={idx} className="text-sm text-green-900">
              <div className="bg-green-100/50 rounded p-3 mb-2">
                <p className="font-medium text-green-800">{stream.primary}</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-green-200 rounded text-xs">{stream.type}</span>
                </div>
                <p className="text-xs mt-2">{stream.pricing}</p>
              </div>
              <div>
                <p className="font-medium text-xs text-green-800 mb-1">Ingresos secundarios:</p>
                {stream.secondary.map((sec, sidx) => (
                  <p key={sidx} className="text-xs bg-green-100/30 rounded px-2 py-1 mb-1">{sec}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumen Ejecutivo</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{canvasData.summary}</p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500">Tipo de Negocio</p>
            <p className="text-gray-900 mt-1">{canvasData.businessType}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500">Modelo de Revenue</p>
            <p className="text-gray-900 mt-1">{canvasData.revenueModel}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-500">Escalabilidad</p>
            <p className="text-gray-900 mt-1">{canvasData.scalabilityRationale}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
