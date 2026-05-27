'use client';

import { useState } from 'react';

const ZapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const serviceOptions = [
  'Optimización de factura de luz',
  'Optimización de factura de gas',
  'Alta de electricidad',
  'Alta de gas natural',
  'Cambio de titular',
  'Revisión de potencia',
  'Reclamación o incidencia',
  'Otro (cuéntame)',
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    factura: null,
  });

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, submit to backend/API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircleIcon />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">¡Solicitud recibida!</h3>
        <p className="text-neutral-500 max-w-sm mx-auto leading-relaxed">
          Nos pondremos en contacto contigo en menos de 24 horas con un análisis de tu situación. Gracias por confiar en nosotros.
        </p>
        <div className="mt-6 p-4 bg-brand-50 border border-brand-100 rounded-2xl max-w-xs mx-auto">
          <p className="text-sm text-brand-700 font-medium">
            Consulta tu correo {form.email && `(${form.email})`} para la confirmación.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setStep(1); setForm({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '', factura: null }); }}
          className="mt-8 text-sm text-neutral-500 hover:text-neutral-700 underline transition-colors"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map(s => (
          <div
            key={s}
            className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
              s <= step ? 'bg-brand-500' : 'bg-neutral-100'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-neutral-400 mb-6 -mt-4">
        Paso {step} de 3 — {step === 1 ? 'Tus datos' : step === 2 ? 'Tu consulta' : 'Confirmar'}
      </p>

      {/* Step 1: Basic info */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Nombre completo <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={e => update('nombre', e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={e => update('email', e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Teléfono <span className="text-neutral-400 font-normal">(opcional)</span>
            </label>
            <input
              type="tel"
              placeholder="600 000 000"
              value={form.telefono}
              onChange={e => update('telefono', e.target.value)}
              className="input-field"
            />
          </div>
          <button
            type="button"
            disabled={!form.nombre || !form.email}
            onClick={() => setStep(2)}
            className="w-full btn-primary justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
          >
            Continuar
          </button>
        </div>
      )}

      {/* Step 2: Service and message */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
              ¿En qué podemos ayudarte? <span className="text-red-400">*</span>
            </label>
            <select
              required
              value={form.servicio}
              onChange={e => update('servicio', e.target.value)}
              className="input-field appearance-none cursor-pointer"
            >
              <option value="">Selecciona un servicio…</option>
              {serviceOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Cuéntanos tu situación <span className="text-neutral-400 font-normal">(opcional)</span>
            </label>
            <textarea
              rows={4}
              placeholder="Describe brevemente tu situación: ¿qué quieres mejorar? ¿tienes algún problema concreto?"
              value={form.mensaje}
              onChange={e => update('mensaje', e.target.value)}
              className="input-field resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
              Adjunta tu factura <span className="text-neutral-400 font-normal">(opcional pero recomendado)</span>
            </label>
            <label className="flex items-center gap-3 w-full border-2 border-dashed border-neutral-200 rounded-2xl px-4 py-4 cursor-pointer hover:border-brand-300 hover:bg-brand-50/50 transition-all duration-200">
              <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-500 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">
                  {form.factura ? form.factura.name : 'Subir factura (PDF o imagen)'}
                </p>
                <p className="text-xs text-neutral-400">Esto nos permite hacer un análisis mucho más preciso</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={e => update('factura', e.target.files[0])}
              />
            </label>
          </div>
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-secondary flex-1 justify-center py-4"
            >
              Atrás
            </button>
            <button
              type="button"
              disabled={!form.servicio}
              onClick={() => setStep(3)}
              className="btn-primary flex-[2] justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Revisar y enviar
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-5 space-y-3">
            <h4 className="text-sm font-semibold text-neutral-700">Resumen de tu solicitud</h4>
            {[
              { label: 'Nombre', value: form.nombre },
              { label: 'Email', value: form.email },
              { label: 'Teléfono', value: form.telefono || '—' },
              { label: 'Servicio', value: form.servicio },
              { label: 'Factura adjunta', value: form.factura ? form.factura.name : 'No' },
            ].map(row => (
              <div key={row.label} className="flex justify-between text-sm">
                <span className="text-neutral-500">{row.label}</span>
                <span className="text-neutral-800 font-medium max-w-[60%] text-right truncate">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-brand-50 border border-brand-100 rounded-2xl">
            <p className="text-sm text-brand-700">
              <strong>¿Qué pasa ahora?</strong> Recibirás un email de confirmación y te contactaremos en menos de 24 horas con un análisis personalizado.
            </p>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-secondary flex-1 justify-center py-4"
            >
              Modificar
            </button>
            <button
              type="submit"
              className="btn-primary flex-[2] justify-center py-4"
            >
              <ZapIcon />
              Enviar solicitud
            </button>
          </div>
          <p className="text-center text-xs text-neutral-400">
            Al enviar aceptas nuestra{' '}
            <a href="/politica-de-privacidad" className="underline hover:text-neutral-600">política de privacidad</a>
          </p>
        </div>
      )}
    </form>
  );
}
