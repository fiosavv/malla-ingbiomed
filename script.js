// script.js

const ramos = {
  "Cálculo I": ["Cálculo II", "Fundamentos de economía para ingeniería"],
  "Álgebra I": ["Álgebra II"],
  "Física I": ["Física II"],
  "Introducción al diseño en ingeniería": ["Fundamentos de programación para ingeniería"],
  "Introducción a la ingeniería biomédica": [],
  "Cálculo II": ["Cálculo III", "Electricidad y magnetismo para ingeniería", "Análisis estadístico para ingeniería", "Ecuaciones diferenciales y métodos numéricos para biomédica"],
  "Álgebra II": ["Ecuaciones diferenciales y métodos numéricos para biomédica"],
  "Física II": ["Electricidad y magnetismo para ingeniería", "Análisis estadístico para ingeniería"],
  "Fundamentos de programación para ingeniería": ["Métodos de programación interdisciplinaria"],
  "Biología Celular": ["Biología Molecular", "Fisiología"],

  "Inglés I": ["Inglés II"],
  "Cálculo III": [],
  "Electricidad y magnetismo para ingeniería": ["Redes eléctricas interdisciplinaria", "Biomateriales"],
  "Fundamentos de economía para ingeniería": ["Taller de diseño en ingeniería", "Ingeniería económica interdisciplinaria"],
  "Análisis estadístico para ingeniería": ["Bioestadisticas", "Procesamiento de señales biológicas"],
  "Biología Molecular": ["Bioinformatica"],

  "Inglés II": ["Inglés III"],
  "Taller de diseño en ingeniería": [],
  "Métodos de programación interdisciplinaria": ["Analisis de algoritmos y estructura de datos interdisciplinaria"],
  "Ingeniería económica interdisciplinaria": ["Evaluacion de proyectos"],
  "Fisiología": ["Bioetica", "Fisiologia II"],
  "Ecuaciones diferenciales y métodos numéricos para biomédica": ["Redes eléctricas interdisciplinaria"],

  "Inglés III": ["Inglés IV"],
  "Bioestadisticas": ["Electivo I"],
  "Bioetica": [],
  "Redes eléctricas interdisciplinaria": ["Sistemas electrónicos interdisciplinaria", "Control de sistemas", "Sistemas digitales y microcontroladores"],
  "Fisiologia II": ["Electromedicina", "Biomecanica", "Mediciones fisiológicas y bioseguridad"],
  "Analisis de algoritmos y estructura de datos interdisciplinaria": ["Ingenieria de software interdisciplinaria", "Bioinformatica"],

  "Inglés IV": [],
  "Procesamiento de señales biológicas": ["Topico de especialidad I", "Topico de especialidad II"],
  "Biomateriales": ["Biomecanica"],
  "Sistemas electrónicos interdisciplinaria": ["Electromedicina", "Mediciones fisiológicas y bioseguridad"],
  "Control de sistemas": [],
  "Ingenieria de software interdisciplinaria": ["Informatica en salud"],

  "Electromedicina": ["Bioinstrumentacion", "Topico de especialidad II"],
  "Biomecanica": ["Topico de especialidad II", "Topico de especialidad III", "Electivo I", "Topico de especialidad IV", "Topico de especialidad V"],
  "Sistemas digitales y microcontroladores": [],
  "Mediciones fisiológicas y bioseguridad": ["Ingenieria clínica"],
  "Evaluacion de proyectos": ["Ingenieria clínica", "Bioinstrumentacion", "Analisis de sistemas de salud"],

  "Ingenieria clínica": ["Gestion de operaciones en salud", "Topico de especialidad III", "Electivo I"],
  "Bioinstrumentacion": ["Topico de especialidad II", "Topico de especialidad III", "Electivo I", "Topico de especialidad V"],
  "Informatica de Salud": ["Topico de especialidad I", "Topico de especialidad II", "Topico de especialidad III", "Electivo I", "Topico de especialidad V", "Topico de especialidad VI"],
  "Bioinformatica": ["Topico de especialidad V"],
  "Analisis de sistemas de salud": [],

  "Gestion de operaciones en salud": ["Topico de especialidad IV", "Topico de especialidad V"],
  "Topico de especialidad I": ["Topico de especialidad IV"],
  "Topico de especialidad II": [],
  "Topico de especialidad III": [],
  "Electivo I": ["Desarrollo e innovación en ingeniería biomédica", "Electivo II"],

  "Topico de especialidad IV": [],
  "Topico de especialidad V": [],
  "Topico de especialidad VI": [],
  "Desarrollo e innovación en ingeniería biomédica": [],
  "Electivo II": ["Trabajo de Titulacion"],

  "Trabajo de Titulacion": []
};

const estado = {};
const mallaDiv = document.getElementById("malla");

Object.keys(ramos).forEach(nombre => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = nombre;
  div.dataset.nombre = nombre;
  mallaDiv.appendChild(div);
  estado[nombre] = { aprobado: false, div: div, desbloqueado: false };
});

function desbloquear(nombre) {
  const ramo = estado[nombre];
  if (!ramo.aprobado && !ramo.desbloqueado) {
    ramo.div.classList.remove("bloqueado");
    ramo.div.addEventListener("click", () => aprobar(nombre));
    ramo.desbloqueado = true;
  }
}

function aprobar(nombre) {
  const ramo = estado[nombre];
  if (!ramo.aprobado) {
    ramo.aprobado = true;
    ramo.div.classList.add("aprobado");
    ramos[nombre].forEach(destino => desbloquear(destino));
  }
}

// Desbloquear ramos iniciales (sin prerrequisitos)
[
  "Cálculo I", "Álgebra I", "Física I", 
  "Introducción al diseño en ingeniería", 
  "Introducción a la ingeniería biomédica", 
  "Biología Celular", "Inglés I"
].forEach(nombre => desbloquear(nombre));

