/* ─────────────────────────────────────────
   DREAMCAR — script.js
───────────────────────────────────────── */

// MODELOS POR MARCA
// Añade o edita modelos aquí
const modelos = {
  'Audi':      ['A1','A1 Sportback','A3','A3 Sportback','A4','A5','A6','Q3','Q5','Q7','TT','RS3','RS6'],
  'BMW':       ['Serie 1','Serie 2','Serie 3','Serie 4','Serie 5','X1','X3','X5','M2','M3','M4','M5'],
  'Mercedes':  ['Clase A','Clase B','Clase C','Clase E','GLA','GLC','GLE','AMG A45','CLA','CLS'],
  'Volkswagen':['Golf','Golf GTI','Golf R','Polo','Passat','Tiguan','T-Roc','ID.3','ID.4','Scirocco'],
  'SEAT':      ['Ibiza','León','León Cupra','Arona','Ateca','Tarraco','Mii'],
  'Cupra':     ['Formentor','Leon','Leon VZ','Born','Ateca','Terramar'],
  'Ford':      ['Fiesta','Focus','Focus ST','Focus RS','Puma','Kuga','Mustang','Mustang Mach-E'],
  'Honda':     ['Civic','Civic Type R','Jazz','HR-V','CR-V','Accord'],
  'Toyota':    ['Corolla','Yaris','Yaris GR','GR Yaris','C-HR','RAV4','Supra','86'],
  'Hyundai':   ['i20','i20 N','i30','i30 N','i30 Fastback','Tucson','Kona','Ioniq 5'],
  'Alfa Romeo':['Giulia','Giulia Quadrifoglio','Stelvio','Giulietta','Tonale','Brera'],
  'Skoda':     ['Octavia','Octavia RS','Fabia','Kodiaq','Karoq','Scala','Enyaq'],
  'Renault':   ['Clio','Clio RS','Megane','Megane RS','Captur','Arkana','Zoe'],
  'Peugeot':   ['208','208 GT','308','308 GT','2008','3008','5008','RCZ'],
  'Kia':       ['Stonic','Ceed','Ceed GT','ProCeed','Sportage','EV6','Niro'],
  'Opel':      ['Corsa','Astra','Astra GSe','Mokka','Crossland','Grandland'],
};

// SELECTOR DE COCHE
const selMarca  = document.getElementById('smarca');
const selModelo = document.getElementById('smodelo');

if(selMarca){
  selMarca.addEventListener('change', function(){
    selModelo.innerHTML = '<option value="">Selecciona modelo</option>';
    const lista = modelos[this.value] || [];
    lista.forEach(m => {
      const o = document.createElement('option');
      o.textContent = m;
      selModelo.appendChild(o);
    });
  });
}

function buscar(){
  const marca  = selMarca  ? selMarca.value  : '';
  const modelo = selModelo ? selModelo.value : '';
  if(!marca){ alert('Elige tu marca primero'); return; }
  // TODO: aquí irá la redirección a la página de resultados
  // window.location.href = `resultados.html?marca=${marca}&modelo=${modelo}`;
  alert('Buscando piezas para: ' + marca + (modelo && modelo !== 'Selecciona modelo' ? ' ' + modelo : ''));
}

// TABS DE CATEGORÍA
function tab(btn){
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  btn.classList.add('on');
  // TODO: aquí filtrará los productos por categoría
}

// CARRITO (base)
let carrito = [];

function añadirAlCarrito(nombre, precio){
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito(){
  const btn = document.querySelector('.nav-cart');
  if(btn) btn.textContent = `Carrito (${carrito.length})`;
}
