if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/../sw.js')
    .then(reg => console.log('SW: Registrado. Scope: ', reg.scope))
    .catch(err => console.warn('SW: Error al Registrar. Error: ', err))
}