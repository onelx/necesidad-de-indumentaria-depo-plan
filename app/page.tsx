import Link from 'next/link'

const businessData = {
  name: "Prendas 10",
  model: "ecommerce",
  businessType: "B2B manufacturing / D2C ecommerce híbrido",
  revenueModel: "Venta transaccional de productos manufacturados a pedido",
  ticketPromedio: "$600.000 - $1.500.000",
  customerPrimary: "Equipos de fútbol amateur y ligas barriales",
  customerSecondary: ["Empresas mineras del norte argentino", "PyMEs con uniformes corporativos"],
  valueProposition: "Indumentaria deportiva y corporativa 100% personalizada con sublimado de alta definición, fabricada localmente con control total de calidad y tiempos de entrega predecibles",
  scalabilityScore: 4,
}

const metrics = {
  cac: 80000,
  ltv: 845000,
  ltvCacRatio: 10.6,
  paybackPeriodMonths: 1,
  grossMarginPct: 40,
  breakEvenKits: 7.5,
  breakEvenMonth: 9, // realista
  investmentNeeded: 14540000,
}

const riskLevel = {
  level: "alto",
  rationale: "El negocio opera con márgenes ajustados, capacidad productiva limitada y un aumento de precio del 50% sin validación de mercado.",
  biggestThreat: "El nuevo precio de $600k puede no ser aceptado por el mercado amateur"
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value)
}

function MetricCard({ title, value, subtitle, color = "emerald" }: { title: string, value: string, subtitle?: string, color?: string }) {
  const colorClasses = {
    emerald: "bg-emerald-50 border-emerald-200",
    blue: "bg-blue-50 border-blue-200",
    amber: "bg-amber-50 border-amber-200",
    red: "bg-red-50 border-red-200",
  }
  return (
    <div className={`p-4 rounded-lg border ${colorClasses[color as keyof typeof colorClasses] || colorClasses.emerald}`}>
      <p className="text-sm text-gray-600 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  )
}

function SummaryCard({ title, items, icon }: { title: string, items: string[], icon: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-emerald-500 mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">{businessData.name}</h1>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
              {businessData.model}
            </span>
          </div>
          <p className="text-gray-600 mt-1">{businessData.businessType}</p>
        </div>
        <div className={`px-4 py-2 rounded-lg ${riskLevel.level === 'alto' ? 'bg-red-100 text-red-700' : riskLevel.level === 'medio' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
          <span className="text-sm font-medium">Nivel de Riesgo: </span>
          <span className="font-bold uppercase">{riskLevel.level}</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Métricas Clave</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <MetricCard 
            title="CAC" 
            value={formatCurrency(metrics.cac)} 
            subtitle="Costo de adquisición"
            color="blue"
          />
          <MetricCard 
            title="LTV" 
            value={formatCurrency(metrics.ltv)} 
            subtitle="Valor de por vida"
            color="emerald"
          />
          <MetricCard 
            title="LTV/CAC" 
            value={`${metrics.ltvCacRatio}x`} 
            subtitle="Ratio de rentabilidad"
            color="emerald"
          />
          <MetricCard 
            title="Payback" 
            value={`${metrics.paybackPeriodMonths} mes`} 
            subtitle="Recupero de inversión"
            color="emerald"
          />
          <MetricCard 
            title="Break-even" 
            value={`${metrics.breakEvenKits} kits/mes`} 
            subtitle={`Mes ${metrics.breakEvenMonth} (realista)`}
            color="amber"
          />
          <MetricCard 
            title="Inversión" 
            value={formatCurrency(metrics.investmentNeeded)} 
            subtitle="Para escenario realista"
            color="red"
          />
        </div>
      </div>

      {/* Risk Alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-red-500 text-xl">⚠️</span>
          <div>
            <h3 className="font-semibold text-red-800">Mayor Amenaza Identificada</h3>
            <p className="text-red-700 text-sm mt-1">{riskLevel.biggestThreat}</p>
          </div>
        </div>
      </div>

      {/* Business Summary */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumen del Modelo de Negocio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SummaryCard 
            title="Segmento de Clientes" 
            icon="👥"
            items={[
              businessData.customerPrimary,
              ...businessData.customerSecondary
            ]}
          />
          <SummaryCard 
            title="Propuesta de Valor" 
            icon="💎"
            items={[
              "Personalización 100% con sublimado HD",
              "Fabricación local con tiempos predecibles",
              "Relación directa fábrica-cliente",
              "Diseño a medida sin costo adicional"
            ]}
          />
          <SummaryCard 
            title="Modelo de Ingresos" 
            icon="💰"
            items={[
              `Ticket promedio: ${businessData.ticketPromedio}`,
              "Margen bruto: 40-50%",
              "Ciclo de recompra anual/semestral",
              "Upselling con accesorios (+20-30%)"
            ]}
          />
          <SummaryCard 
            title="Canales Principales" 
            icon="📢"
            items={[
              "Prospección en canchas de fútbol 5",
              "Contactos en empresas mineras",
              "Instagram/Facebook con portfolio",
              "WhatsApp para cotizaciones"
            ]}
          />
          <SummaryCard 
            title="Recursos Clave" 
            icon="🔧"
            items={[
              "Fábrica propia con maquinaria",
              "Impresora de sublimación",
              "Archivo digital de diseños",
              "Know-how de producción"
            ]}
          />
          <SummaryCard 
            title="Estructura de Costos" 
            icon="📊"
            items={[
              "Costos fijos: $4.500.000/mes",
              "75% en sueldos + alquiler",
              "Costo por prenda: $4.000-5.000",
              "Ciclo de caja: 45-60 días"
            ]}
          />
        </div>
      </div>

      {/* Scalability */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Escalabilidad del Modelo</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full" 
                style={{ width: `${(businessData.scalabilityScore / 10) * 100}%` }}
              />
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-900">{businessData.scalabilityScore}/10</span>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Escalabilidad limitada por capacidad física de producción y dependencia de mano de obra especializada. 
          Crecer requiere inversión en maquinaria, espacio y personal, no simplemente más marketing.
        </p>
      </div>

      {/* Navigation Cards */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Explorar Plan de Negocio</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/canvas" className="group">
            <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎯</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">Business Model Canvas</h3>
              </div>
              <p className="text-sm text-gray-600">Visualización completa de los 9 bloques del modelo de negocio</p>
            </div>
          </Link>
          <Link href="/projections" className="group">
            <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📈</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">Proyecciones Financieras</h3>
              </div>
              <p className="text-sm text-gray-600">Escenarios a 12 meses con unit economics y análisis de break-even</p>
            </div>
          </Link>
          <Link href="/validation" className="group">
            <div className="bg-white rounded-lg border border-gray-200 p-5 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">✅</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">Checklist de Validación</h3>
              </div>
              <p className="text-sm text-gray-600">Hipótesis a validar, experimentos y plan de acción</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
