import Link from 'next/link'

// Datos embebidos del negocio
const businessData = {
  name: "Indumentaria Deportiva Personalizada",
  model: "ecommerce",
  businessType: "B2B D2C manufacturing",
  customer: "Equipos de fútbol amateur + empresas que necesitan uniformes corporativos",
  pricing: "$600.000 por kit de equipo (15 camisetas + 15 shorts)",
  pricePerItem: "~$20.000 por prenda",
}

const canvasData = {
  summary: "El negocio es una fábrica de indumentaria deportiva personalizada que integra verticalmente diseño, sublimación y confección para ofrecer uniformes únicos a equipos de fútbol amateur y empresas. La propuesta de valor se centra en personalización total sin límites de diseño, producción local con tiempos controlados, y precios accesibles gracias a la eliminación de intermediarios.",
  scalabilityScore: 5,
  scalabilityRationale: "Escalabilidad limitada por capacidad física de producción y mano de obra; crecimiento requiere inversión proporcional en maquinaria y personal.",
  revenueModel: "Venta transaccional de productos manufacturados por pedido, con pricing por kit/volumen y margen sobre costo de producción",
}

const projectionsData = {
  currency: "ARS",
  unitEconomics: {
    cac: 150000,
    ltv: 900000,
    ltvCacRatio: 6,
    paybackPeriodMonths: 1,
    grossMarginPct: 50,
  },
  recommended: {
    name: "realista",
    breakEvenMonth: 8,
    month12MRR: 13800000,
    totalInvestmentNeeded: 13000000,
  }
}

const validationData = {
  overallRisk: "alto",
  biggestThreat: "Estás apostando a que el mercado acepte un precio premium sin tener evidencia de que alguien esté dispuesto a pagarlo — y si no lo pagan, no tenés margen para competir con los talleres locales.",
  hypothesesCount: 6,
  criticalHypotheses: 2,
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function getRiskColor(risk: string): string {
  switch (risk.toLowerCase()) {
    case 'alto': return 'bg-red-100 text-red-800'
    case 'medio': return 'bg-yellow-100 text-yellow-800'
    case 'bajo': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{businessData.name}</h1>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                {businessData.model}
              </span>
            </div>
            <p className="text-gray-600">{businessData.businessType}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Nivel de riesgo:</span>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getRiskColor(validationData.overallRisk)}`}>
              {validationData.overallRisk.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">CAC</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(projectionsData.unitEconomics.cac)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">LTV</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(projectionsData.unitEconomics.ltv)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">LTV/CAC</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{projectionsData.unitEconomics.ltvCacRatio}x</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Margen Bruto</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{projectionsData.unitEconomics.grossMarginPct}%</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Break-even</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">Mes {projectionsData.recommended.breakEvenMonth}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Inversión Req.</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(projectionsData.recommended.totalInvestmentNeeded)}</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Business Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumen del Negocio</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{canvasData.summary}</p>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Cliente Objetivo</p>
              <p className="text-gray-900">{businessData.customer}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Pricing</p>
              <p className="text-gray-900">{businessData.pricing}</p>
              <p className="text-sm text-gray-500">{businessData.pricePerItem}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Modelo de Revenue</p>
              <p className="text-gray-900">{canvasData.revenueModel}</p>
            </div>
          </div>
        </div>

        {/* Risk Alert & Scalability */}
        <div className="space-y-6">
          {/* Risk Alert */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Mayor Amenaza Identificada</h3>
                <p className="text-red-700">{validationData.biggestThreat}</p>
              </div>
            </div>
          </div>

          {/* Scalability Score */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Escalabilidad</h3>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-emerald-500 h-3 rounded-full" 
                  style={{ width: `${(canvasData.scalabilityScore / 10) * 100}%` }}
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">{canvasData.scalabilityScore}/10</span>
            </div>
            <p className="text-sm text-gray-600">{canvasData.scalabilityRationale}</p>
          </div>

          {/* Validation Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado de Validación</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-gray-900">{validationData.hypothesesCount}</p>
                <p className="text-sm text-gray-500">Hipótesis a validar</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">{validationData.criticalHypotheses}</p>
                <p className="text-sm text-red-700">Críticas (red flags)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/canvas" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">Business Model Canvas</h3>
              <p className="text-sm text-gray-500 mt-1">Ver los 9 bloques del modelo</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link href="/projections" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">Proyecciones Financieras</h3>
              <p className="text-sm text-gray-500 mt-1">Escenarios a 12 meses</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <Link href="/validation" className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">Checklist de Validación</h3>
              <p className="text-sm text-gray-500 mt-1">Hipótesis y experimentos</p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* MRR Projection Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Proyección MRR (Escenario Realista)</h2>
          <Link href="/projections" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            Ver detalles →
          </Link>
        </div>
        <div className="flex items-end justify-between h-32 gap-2">
          {[3000000, 3600000, 4200000, 4800000, 6000000, 7200000, 8400000, 9000000, 10200000, 11400000, 12600000, 13800000].map((mrr, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-1">
              <div 
                className={`w-full rounded-t ${index < 7 ? 'bg-red-400' : 'bg-emerald-400'}`}
                style={{ height: `${(mrr / 15000000) * 100}%` }}
              />
              <span className="text-xs text-gray-500">M{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded" />
            <span className="text-sm text-gray-600">Pérdida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded" />
            <span className="text-sm text-gray-600">Ganancia</span>
          </div>
        </div>
      </div>
    </div>
  )
}
