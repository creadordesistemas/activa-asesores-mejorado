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
  'Optimización de factura de luz (Gratis)',
  'Optimización de factura de gas (Gratis)',
  'Alta de electricidad (gestión sin coste)',
  'Alta de gas natural (gestión sin coste)',
  'Cambio de titular (Gratis)',
  'Revisión de potencia (gestión sin coste)',
  'Reclamación o incidencia (Gratis)',
  'Otro (cuéntame)',
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    factura: null,
    website: '', // honeypot
  });

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = new FormData();
      data.append('nombre', form.nombre);
      data.append('email', form.email);
      data.append('telefono', form.telefono);
      data.append('servicio', form.servicio);
      data.append('mensaje', form.mensaje);
      data.append('website', form.website); // honeypot
      if (form.factura) {
        data.append('factura', form.factura);
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || 'Hubo un error al enviar tu solicitud. Inténtalo de nuevo.');
      }
    } catch (err) {
      console.error(err);
      setError('No se pudo establecer conexión con el servidor. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircleIcon />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">¡Solicitud recibida!</h3>
        <p className="text-neutral-500 max-w-sm mx-auto leading-relaxed text-sm">
          Nos pondremos en contacto contigo en menos de 24 horas laborables con un análisis totalmente gratuito de tu situación. Gracias por confiar en nosotros.
        </p>
        <div className="mt-6 p-4 bg-brand-50 border border-brand-100 rounded-2xl max-w-xs mx-auto">
          <p className="text-sm text-brand-700 font-medium">
            Consulta tu correo {form.email && `(${form.email})`} para la confirmación.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setStep(1); setError(''); setForm({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '', factura: null, website: '' }); }}
          className="mt-8 text-sm text-neutral-500 hover:text-neutral-700 underline transition-colors"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {/* Campo Honeypot invisible para humanos pero detectable por bots */}
      <div className="absolute opacity-0 w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <label htmlFor="website">No rellenar este campo</label>
        <input
          id="website"
          type="text"
          name="website"
          value={form.website}
          onChange={e => update('website', e.target.value)}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

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
        Paso {step} de 3 — {step === 1 ? 'Tus datos' : step === 2 ? 'Tu consulta' : 'Confirmar estudio gratuito'}
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
              className="input-field appearance-none cursor-pointer text-sm"
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
              className="input-field resize-none text-sm"
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
                <p className="text-xs text-neutral-400">Esto nos permite hacer un análisis de ahorro exacto</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={e => {
                  const file = e.target.files[0];
                  if (file && file.size > 50 * 1024 * 1024) {
                    setError('El archivo supera el tamaño máximo permitido de 50 MB.');
                    update('factura', null);
                  } else {
                    setError('');
                    update('factura', file);
                  }
                }}
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
              { label: 'Coste del estudio', value: '€0 · Nuestra gestión es gratuita' },
            ].map(row => (
              <div key={row.label} className="flex justify-between text-sm">
                <span className="text-neutral-500">{row.label}</span>
                <span className={`font-medium max-w-[60%] text-right truncate ${row.label === 'Coste del estudio' ? 'text-brand-600 font-bold' : 'text-neutral-800'}`}>{row.value}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-brand-50 border border-brand-100 rounded-2xl">
            <p className="text-xs text-brand-700 leading-relaxed">
              <strong>¿Qué pasa ahora?</strong> Te asignaremos un asesor energético real que revisará tu caso y te contactará en menos de 24 horas laborables con las mejores opciones de ahorro.
            </p>
          </div>

          {error && (
            <div className="p-3 text-xs bg-red-50 text-red-600 rounded-xl border border-red-100 text-center font-medium">
              {error}
            </div>
          )}

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={loading}
              className="btn-secondary flex-1 justify-center py-4"
            >
              Modificar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex-[2] justify-center py-4 disabled:opacity-50"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                <>
                  <ZapIcon />
                  Solicitar análisis sin coste
                </>
              )}
            </button>
          </div>
          <p className="text-center text-[11px] text-neutral-400">
            Al enviar aceptas nuestra{' '}
            <a href="/politica-de-privacidad" className="underline hover:text-neutral-600">política de privacidad</a>
          </p>
        </div>
      )}
    </form>
  );
}
