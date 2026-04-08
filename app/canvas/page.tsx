const canvasData = {
  customerSegments: {
    primary: "Equipos de fútbol amateur y ligas barriales que necesitan uniformes personalizados para competir, típicamente grupos de 15-25 jugadores organizados por un delegado o capitán que gestiona la compra colectiva",
    secondary: [
      "Empresas mineras del norte argentino que requieren uniformes de trabajo resistentes y con identidad corporativa",
      "PyMEs y empresas medianas que necesitan uniformes corporativos para personal operativo, recepción o eventos"
    ],
    characteristics: [
      "Compran en lotes (mínimo 15 unidades por pedido)",
      "Decisión de compra grupal o institucional, no individual",
      "Valoran personalización (nombres, números, logos) sobre precio",
      "Ciclo de recompra anual o semestral",
      "Sensibles al tiempo de entrega (necesitan antes de torneos o temporadas)"
    ]
  },
  valuePropositions: {
    main: "Indumentaria deportiva y corporativa 100% personalizada con sublimado de alta definición, fabricada localmente con control total de calidad y tiempos de entrega predecibles",
    secondary: [
      "Diseño a medida sin costo adicional - el cliente puede traer su idea o co-crear con nosotros",
      "Producción propia que permite ajustes rápidos y reposiciones sin demoras de importación",
      "Relación directa fábrica-cliente sin intermediarios, con mejor precio por volumen"
    ],
    jobsToBeDone: [
      "Funcional: Vestir a todo el equipo/empresa con uniformes idénticos, personalizados y de calidad consistente",
      "Emocional: Sentir orgullo e identidad grupal al usar indumentaria que representa al equipo/empresa",
      "Social: Proyectar imagen profesional y organizada ante rivales, clientes o público"
    ]
  },
  channels: {
    awareness: [
      "Prospección directa en canchas de fútbol 5 y ligas barriales los fines de semana",
      "Contactos personales en empresas mineras (canal actual más fuerte)",
      "Instagram/Facebook mostrando trabajos terminados con fotos de equipos reales",
      "Referidos de clientes satisfechos (boca a boca)"
    ],
    evaluation: [
      "WhatsApp para enviar catálogo digital y cotizaciones personalizadas",
      "Muestras físicas de tela y calidad de sublimado",
      "Portfolio de trabajos anteriores con fotos y testimonios",
      "Visita a la fábrica para clientes corporativos grandes"
    ],
    purchase: [
      "Pedido vía WhatsApp con seña del 50%",
      "Transferencia bancaria o efectivo",
      "Formulario web simple para especificaciones (talles, nombres, números)"
    ],
    delivery: [
      "Entrega en mano en zona local",
      "Envío por transporte/correo para clientes del interior",
      "Retiro en fábrica con verificación conjunta de calidad"
    ],
    afterSales: [
      "Garantía de reposición por fallas de sublimado o confección",
      "Reposiciones rápidas de prendas adicionales (mismo diseño en stock digital)",
      "Grupo de WhatsApp para clientes recurrentes con ofertas de temporada"
    ]
  },
  customerRelationships: {
    type: "personal",
    description: "Relación directa y personalizada donde cada cliente tiene contacto con el dueño o encargado comercial vía WhatsApp. Se co-crea el diseño, se hacen ajustes según feedback y se mantiene comunicación durante todo el proceso de producción.",
    retentionMechanisms: [
      "Archivo digital del diseño para reposiciones instantáneas sin rehacer arte",
      "Descuento del 10% en segunda compra anual",
      "Prioridad de producción para clientes recurrentes en temporada alta",
      "Recordatorio proactivo antes de inicio de torneos/temporadas"
    ]
  },
  revenueStreams: {
    primary: "Venta de kits deportivos personalizados para equipos de fútbol",
    pricing: "$600.000 por kit estándar (15 camisetas + 15 shorts). Precio unitario ~$20.000/prenda. Margen estimado 40-50%",
    secondary: [
      "Uniformes corporativos para empresas (pedidos de 50-200 unidades, ticket promedio $1.5-3M)",
      "Reposiciones individuales para clientes existentes ($25.000-30.000 por prenda suelta)",
      "Accesorios complementarios: medias, buzos, camperas (upselling 20-30% del pedido base)"
    ]
  },
  keyResources: {
    physical: [
      "Fábrica propia con espacio de producción",
      "Maquinaria de confección: recta industrial, overlock, collareta",
      "Impresora de sublimación de gran formato",
      "Plancha térmica o calandra para transferencia",
      "Stock de telas deportivas sublimables (poliéster deportivo)",
      "Stock de insumos: hilos, elásticos, etiquetas"
    ],
    intellectual: [
      "Archivo digital de diseños de clientes (activo de retención)",
      "Know-how de sublimación y gestión de color",
      "Plantillas de moldes por talle optimizadas",
      "Base de datos de clientes con historial de pedidos"
    ],
    human: [
      "Operarios de confección capacitados (mínimo 2-3)",
      "Diseñador gráfico (puede ser freelance o interno)",
      "Responsable comercial/ventas con habilidades de relacionamiento",
      "Dueño/gerente con visión integral del negocio"
    ],
    financial: [
      "Capital de trabajo para compra de tela e insumos (ciclo de caja ~30-45 días)",
      "Seña del 50% que financia parcialmente la producción"
    ]
  },
  keyActivities: [
    "Diseño gráfico personalizado según requerimientos del cliente",
    "Impresión de sublimado en papel transfer",
    "Corte de telas según moldes y talles",
    "Confección de prendas (costura, terminaciones)",
    "Transferencia térmica del sublimado a la tela",
    "Control de calidad pre-entrega",
    "Gestión comercial: prospección, cotización, seguimiento de pedidos",
    "Coordinación logística de entregas"
  ],
  keyPartners: [
    { partner: "Proveedor de telas deportivas sublimables", value: "Suministro constante de materia prima de calidad consistente" },
    { partner: "Proveedor de tintas y papel de sublimación", value: "Insumos especializados que determinan la calidad del estampado" },
    { partner: "Diseñador gráfico freelance", value: "Capacidad extra de diseño en temporadas altas" },
    { partner: "Servicio de transporte/correo", value: "Entrega a clientes del interior del país" },
    { partner: "Ligas de fútbol amateur locales", value: "Canal de acceso directo a equipos que necesitan uniformes" }
  ],
  costStructure: {
    fixedCosts: [
      "Alquiler del espacio de producción: $1.800.000/mes",
      "Sueldos de operarios y personal: $1.600.000/mes",
      "Servicios (luz, gas, internet): $330.000/mes",
      "Otros gastos fijos: $770.000/mes",
      "Total fijo mensual: $4.500.000"
    ],
    variableCosts: [
      "Tela deportiva sublimable: ~$3.000-4.000 por prenda",
      "Tintas y papel de sublimación: ~$500-800 por prenda",
      "Hilos e insumos de confección: ~$200-400 por prenda",
      "Embalaje y envío: variable según destino"
    ],
    biggestCost: "Sueldos y alquiler representan el 75% del costo fijo"
  },
  summary: "Prendas 10 es una fábrica de indumentaria deportiva y corporativa que produce internamente prendas personalizadas con sublimado, vendiendo principalmente a equipos de fútbol amateur y empresas que necesitan uniformes.",
  scalabilityScore: 4,
  scalabilityRationale: "Escalabilidad limitada por capacidad física de producción y dependencia de mano de obra especializada; crecer requiere inversión en maquinaria, espacio y personal."
}

function CanvasBlock({ title, children, className = "", color = "gray" }: { title: string, children: React.ReactNode, className?: string, color?: string }) {
  const colorClasses = {
    gray: "bg-gray-50 border-gray-200",
    emerald: "bg-emerald-50 border-emerald-200",
    blue: "bg-blue-50 border-blue-200",
    amber: "bg-amber-50 border-amber-200",
    purple: "bg-purple-50 border-purple-200",
    pink: "bg-pink-50 border-pink-200",
    cyan: "bg-cyan-50 border-cyan-200",
    orange: "bg-orange-50 border-orange-200",
    lime: "bg-lime-50 border-lime-200",
  }
  return (
    <div className={`rounded-lg border-2 p-4 ${colorClasses[color as keyof typeof colorClasses]} ${className}`}>
      <h3 className="font-semibold text-gray-800 text-sm mb-3 uppercase tracking-wide">{title}</h3>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  )
}

function ListItems({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-1.5">
          <span className="text-emerald-500 mt-0.5 text-xs">▪</span>
          <span className="text-xs leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CanvasPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Business Model Canvas</h1>
        <p className="text-gray-600 mt-1">Visualización de los 9 bloques del modelo de negocio de Prendas 10</p>
      </div>

      {/* Canvas Grid */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 overflow-x-auto">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-5 gap-3">
            {/* Row 1 */}
            <CanvasBlock title="Socios Clave" color="purple" className="row-span-2">
              <div className="space-y-3">
                {canvasData.keyPartners.map((partner, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-xs text-purple-800">{partner.partner}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{partner.value}</p>
                  </div>
                ))}
              </div>
            </CanvasBlock>

            <CanvasBlock title="Actividades Clave" color="cyan">
              <ListItems items={canvasData.keyActivities.slice(0, 5)} />
            </CanvasBlock>

            <CanvasBlock title="Propuesta de Valor" color="emerald" className="row-span-2">
              <div className="space-y-3">
                <p className="text-xs font-medium text-emerald-800">{canvasData.valuePropositions.main}</p>
                <div className="border-t border-emerald-200 pt-2">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Jobs to be Done:</p>
                  <ListItems items={canvasData.valuePropositions.jobsToBeDone} />
                </div>
              </div>
            </CanvasBlock>

            <CanvasBlock title="Relaciones con Clientes" color="pink">
              <div className="space-y-2">
                <p className="text-xs"><span className="font-medium">Tipo:</span> {canvasData.customerRelationships.type}</p>
                <p className="text-xs">{canvasData.customerRelationships.description.slice(0, 150)}...</p>
              </div>
            </CanvasBlock>

            <CanvasBlock title="Segmentos de Clientes" color="blue" className="row-span-2">
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-blue-800 mb-1">Primario:</p>
                  <p className="text-xs">{canvasData.customerSegments.primary}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-800 mb-1">Secundarios:</p>
                  <ListItems items={canvasData.customerSegments.secondary} />
                </div>
              </div>
            </CanvasBlock>

            {/* Row 2 */}
            <CanvasBlock title="Recursos Clave" color="amber">
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-amber-800">Físicos:</p>
                  <ListItems items={canvasData.keyResources.physical.slice(0, 3)} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-800">Humanos:</p>
                  <ListItems items={canvasData.keyResources.human.slice(0, 2)} />
                </div>
              </div>
            </CanvasBlock>

            <CanvasBlock title="Canales" color="orange">
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-orange-800">Awareness:</p>
                  <ListItems items={canvasData.channels.awareness.slice(0, 2)} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-orange-800">Compra:</p>
                  <ListItems items={canvasData.channels.purchase.slice(0, 2)} />
                </div>
              </div>
            </CanvasBlock>

            {/* Row 3 - Cost & Revenue */}
            <CanvasBlock title="Estructura de Costos" color="gray" className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Costos Fijos:</p>
                  <ListItems items={canvasData.costStructure.fixedCosts.slice(0, 4)} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-1">Costos Variables:</p>
                  <ListItems items={canvasData.costStructure.variableCosts} />
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-2 italic">{canvasData.costStructure.biggestCost}</p>
            </CanvasBlock>

            <CanvasBlock title="Fuentes de Ingresos" color="lime" className="col-span-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-lime-800 mb-1">Principal:</p>
                  <p className="text-xs">{canvasData.revenueStreams.primary}</p>
                  <p className="text-xs mt-1 text-gray-600">{canvasData.revenueStreams.pricing}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-lime-800 mb-1">Secundarias:</p>
                  <ListItems items={canvasData.revenueStreams.secondary} />
                </div>
              </div>
            </CanvasBlock>
          </div>
        </div>
      </div>

      {/* Scalability Score */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Score de Escalabilidad</h2>
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500 rounded-full transition-all"
                style={{ width: `${(canvasData.scalabilityScore / 10) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-amber-600">{canvasData.scalabilityScore}</span>
            <span className="text-xl text-gray-400">/10</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">{canvasData.scalabilityRationale}</p>
      </div>

      {/* Summary */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-emerald-800 mb-3">Resumen Ejecutivo</h2>
        <p className="text-emerald-700">{canvasData.summary}</p>
      </div>

      {/* Detailed Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Características del Segmento</h3>
          <ul className="space-y-2">
            {canvasData.customerSegments.characteristics.map((char, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-blue-500">✓</span>
                {char}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Mecanismos de Retención</h3>
          <ul className="space-y-2">
            {canvasData.customerRelationships.retentionMechanisms.map((mech, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-pink-500">♥</span>
                {mech}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Recursos Intelectuales</h3>
          <ul className="space-y-2">
            {canvasData.keyResources.intellectual.map((res, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-amber-500">💡</span>
                {res}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-gray-900 mb-3">Post-Venta y Retención</h3>
          <ul className="space-y-2">
            {canvasData.channels.afterSales.map((as, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-orange-500">🔄</span>
                {as}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
