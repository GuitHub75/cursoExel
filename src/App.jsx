import React, { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [unlockedSteps, setUnlockedSteps] = useState([0]);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showExam, setShowExam] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [examFinished, setExamFinished] = useState(false);
  const [score, setScore] = useState(0);

 const steps = [
  { 
    title: "Introducción a Excel con Erick Escobar", 
    description: "Conoce la interfaz de Excel, sus principales funciones y cómo se organiza la información en hojas de cálculo. Todo esto lo aprenderas con Erick Escobar", 
    video: "https://www.youtube.com/embed/5N5CcAptck4", 
    key: "Inicio12",
    resources: [
      { name: "Precentacion completa de introducción a Excel", url: "https://gamma.app/docs/Excel-Basico-Clase2-95bpciyapfllznk" },
    ]
  },
  {
    title: "Opciones de Inicio con Dereck Flores",
    description: "Aprende a crear, guardar y abrir archivos en Excel, además de explorar plantillas útiles para diferentes necesidades. Todo esto lo aprenderas con Dereck Flores",
    video: "https://www.youtube.com/embed/HPy2gUWzLUk",
    key: "formulas2324",
    resources: [
      { name: "Video Tutorial - Opciones de Inicio", url: "https://www.youtube.com/watch?v=HPy2gUWzLUk&feature=youtu.be" },
    ]
  },
  { 
    title: "Fórmulas Básicas con Alex Fuentes", 
    description: "Aprende a usar fórmulas simples para sumar, sacar promedio, MIN y MAX para automatizar cálculos en tus hojas. Todo esto lo aprenderas con Alex Fuentes", 
    video: "https://www.youtube.com/embed/e81PUasG8Hw", 
    key: "Insertar2019",
    resources: [
      { name: "Video Tutorial - Fórmulas en Excel", url: "https://youtu.be/e81PUasG8Hw" },
      { name: "Archivo de Práctica", url: "https://docs.google.com/spreadsheets/d/1Q_R8AFc8e9ljHtKvuqPz6dRFftnFM72z/edit?usp=sharing&ouid=106510904715986070006&rtpof=true&sd=true" }
    ]
  },
  { 
    title: "Opciones Insertar con Dereck Flores", 
    description: "Descubre las opciones de insertar en Excel. Todo esto lo aprenderas con Dereck Flores", 
    video: "https://www.youtube.com/embed/Zk5yAoQY77w", 
    key: "excel_format",
    resources: [
      { name: "Video Tutorial - Opciones Insertar", url: "https://youtu.be/Zk5yAoQY77w" },
    ]
  } /*,
  { 
    title: "Tema 4: Funciones Avanzadas", 
    description: "Explora funciones como SI, BUSCARV, BUSCARX y concatenación para hacer tus hojas más inteligentes.", 
    video: "https://www.youtube.com/embed/XLgBnp3kUfw", 
    key: "excel_advanced",
    resources: [
      { name: "Función BUSCARV", url: "https://support.microsoft.com/es-es/office/funcion-buscarv-0bbc8083-26fe-4963-8ab8-93a18ad188a1" },
      { name: "Función SI Anidada", url: "https://support.microsoft.com/es-es/office/funcion-si-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2" }
    ]
  },
  { 
    title: "Tema 5: Gráficos en Excel", 
    description: "Aprende a crear gráficos de barras, líneas, circulares y personalizados para visualizar tus datos.", 
    video: "https://www.youtube.com/embed/4Uj0PFSbTQE", 
    key: "excel_charts",
    resources: [
      { name: "Crear Gráficos en Excel", url: "https://support.microsoft.com/es-es/office/crear-un-gr%C3%A1fico-desde-el-principio-hasta-el-final-0baf399e-dd61-4e18-8a73-b3fd5d5680c2" },
      { name: "Tipos de Gráficos", url: "https://support.microsoft.com/es-es/office/tipos-de-gr%C3%A1ficos-disponibles-en-office-a6182418-848e-4f9f-9845-58f8719216f8" }
    ]
  },
  { 
    title: "Tema 6: Tablas Dinámicas", 
    description: "Domina las tablas dinámicas para resumir y analizar grandes cantidades de información fácilmente.", 
    video: "https://www.youtube.com/embed/9NUjHBNWe9M", 
    key: "excel_pivots",
    resources: [
      { name: "Crear Tablas Dinámicas", url: "https://support.microsoft.com/es-es/office/crear-una-tabla-din%C3%A1mica-para-analizar-datos-de-una-hoja-de-c%C3%A1lculo-27c4b46b-9fd1-4c1d-ab00-9c853987dc6c" },
      { name: "Filtros en Tablas Dinámicas", url: "https://support.microsoft.com/es-es/office/filtrar-datos-en-una-tabla-din%C3%A1mica-cc1ed287-3a9a-4b9d-a379-14daea36eaca" }
    ]
  },
  { 
    title: "Tema 7: Validación de Datos", 
    description: "Controla la entrada de datos usando validaciones, listas desplegables y reglas personalizadas.", 
    video: "https://www.youtube.com/embed/1k8yM7Xh7ns", 
    key: "excel_validation",
    resources: [
      { name: "Validación de Datos", url: "https://support.microsoft.com/es-es/office/aplicar-validaci%C3%B3n-de-datos-a-las-celdas-29fecbcc-d1b9-42c1-9d76-eff3ce5f7249" },
      { name: "Listas Desplegables", url: "https://support.microsoft.com/es-es/office/crear-una-lista-desplegable-7693307a-59ef-400a-b769-c5402dce407b" }
    ]
  },
  { 
    title: "Tema 8: Macros y Automatización", 
    description: "Introducción a las macros para automatizar tareas repetitivas usando VBA en Excel.", 
    video: "https://www.youtube.com/embed/1v6ZWR7wF3U", 
    key: "excel_macros",
    resources: [
      { name: "Introducción a VBA", url: "https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-vba-en-excel-9e767d2c-9424-4f2f-b7e0-af6a0b5c2a73" },
      { name: "Grabar Macros", url: "https://support.microsoft.com/es-es/office/grabar-una-macro-974ef220-f716-4e01-b015-3ea70e64937b" }
    ]
  },
  { 
    title: "Tema 9: Análisis de Datos", 
    description: "Usa herramientas como Filtros Avanzados, Segmentaciones y Power Query para analizar información eficientemente.", 
    video: "https://www.youtube.com/embed/WkZ_SJY6vZg", 
    key: "excel_analysis",
    resources: [
      { name: "Power Query", url: "https://support.microsoft.com/es-es/office/introducci%C3%B3n-a-power-query-6e92e2f4-2079-4e1f-bad5-89f6269cd605" },
      { name: "Filtros Avanzados", url: "https://support.microsoft.com/es-es/office/filtrar-por-uso-de-criterios-avanzados-4c9222fe-8529-4cd7-a898-3f16abdff32b" }
    ]
  },
  { 
    title: "Tema 10: Proyecto Final en Excel", 
    description: "Integra todo lo aprendido creando un proyecto completo que combine fórmulas, gráficos y tablas dinámicas.", 
    video: "https://www.youtube.com/embed/C7Fk6RZtYck", 
    key: "excel_final",
    resources: [
      { name: "Plantillas de Proyectos", url: "https://templates.office.com/es-es/proyectos" },
      { name: "Mejores Prácticas", url: "https://support.microsoft.com/es-es/office/mejores-pr%C3%A1cticas-para-crear-una-hoja-de-c%C3%A1lculo-4b0ad287-36a1-4a8b-a287-9c45bb0e9a43" }
    ]
  }*/
];

  // Preguntas del examen directamente en el código (SIN fetch)
  const examQuestions = [
    { 
      question: "¿Cuál es la principal ventaja de usar React?", 
      options: ["Es más rápido que JavaScript", "Permite crear componentes reutilizables", "No necesita HTML"], 
      answer: 1 
    },
    { 
      question: "¿Qué significa JSX en React?", 
      options: ["JavaScript XML", "Java Syntax Extension", "JSON eXtended"], 
      answer: 0 
    },
    { 
      question: "¿Cuál es la forma correcta de definir un estado en un componente funcional?", 
      options: ["this.state = {}", "useState()", "setState()"], 
      answer: 1 
    },
    { 
      question: "¿Qué hook se usa para efectos secundarios?", 
      options: ["useState", "useEffect", "useContext"], 
      answer: 1 
    },
    { 
      question: "¿Cuál es la extensión típica de archivos React?", 
      options: [".js", ".jsx", ".react"], 
      answer: 1 
    },
    { 
      question: "¿Qué es un prop en React?", 
      options: ["Una función", "Un dato que se pasa entre componentes", "Un tipo de variable"], 
      answer: 1 
    },
    { 
      question: "¿Cuál es la forma correcta de manejar eventos en React?", 
      options: ["onclick", "onClick", "onPress"], 
      answer: 1 
    },
    { 
      question: "¿Qué es el Virtual DOM?", 
      options: ["Una copia en memoria del DOM real", "Un navegador virtual", "Un tipo de componente"], 
      answer: 0 
    },
    { 
      question: "¿Cuál es la diferencia entre props y state?", 
      options: ["No hay diferencia", "Props son inmutables, state es mutable", "State es más rápido"], 
      answer: 1 
    },
    { 
      question: "¿Qué comando se usa para crear una nueva aplicación React?", 
      options: ["npm create react-app", "npx create-react-app", "npm install react"], 
      answer: 1 
    }
  ];

  const handleNextClick = () => {
    if (currentStep === 9) {
      return;
    }
    setShowKeyInput(true);
    setErrorMessage('');
  };

  const validateKey = () => {
    const correctKey = steps[currentStep].key;
    if (keyInput === correctKey) {
      const nextStep = currentStep + 1;
      setUnlockedSteps([...unlockedSteps, nextStep]);
      setCurrentStep(nextStep);
      setShowKeyInput(false);
      setKeyInput('');
      setErrorMessage('');
    } else {
      setErrorMessage('Clave incorrecta. Inténtalo de nuevo.');
    }
  };

  // Función simple SIN fetch
  const startExam = () => {
    setQuestions(examQuestions); // Usa las preguntas hardcodeadas
    setShowExam(true);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    let correctAnswers = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setExamFinished(true);
  };

  const goToStep = (stepIndex) => {
    if (unlockedSteps.includes(stepIndex)) {
      setCurrentStep(stepIndex);
      setShowKeyInput(false);
      setErrorMessage('');
      setKeyInput('');
    }
  };

  const resetExam = () => {
    setShowExam(false);
    setExamFinished(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setScore(0);
  };

  // Vista del examen finalizado
  if (showExam && examFinished) {
    const passed = score >= Math.ceil(questions.length * 0.7);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className={`text-8xl ${passed ? 'text-green-500' : 'text-red-500'}`}>
                {passed ? '🎉' : '📚'}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {passed ? '¡Examen Completado!' : '¡Sigue Practicando!'}
            </h1>
            
            <div className={`text-6xl font-bold mb-4 ${passed ? 'text-green-500' : 'text-red-500'}`}>
              {score}/{questions.length}
            </div>
            
            <p className={`text-xl mb-6 ${passed ? 'text-green-600' : 'text-red-600'}`}>
              {passed ? 
                `¡Felicidades! Aprobaste con ${score}/${questions.length} puntos` : 
                `Obtuviste ${score}/${questions.length} puntos. Necesitas ${Math.ceil(questions.length * 0.7)} para aprobar.`
              }
            </p>
            
            <div className="flex gap-4 justify-center">
              <button 
                onClick={resetExam}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md"
              >
                🏠 Volver al Curso
              </button>
              
              {!passed && (
                <button 
                  onClick={() => {
                    setExamFinished(false);
                    setCurrentQuestion(0);
                    setSelectedAnswers({});
                    setScore(0);
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md"
                >
                  🔄 Reintentar Examen
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vista del examen en progreso
  if (showExam) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">🎯 Examen Final</h2>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                  <span className="text-lg font-semibold">
                    {currentQuestion + 1}/{questions.length}
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {questions.length > 0 && (
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 leading-relaxed">
                    {questions[currentQuestion]?.question}
                  </h3>
                  
                  <div className="space-y-4">
                    {questions[currentQuestion]?.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-200 transform hover:scale-[1.02] ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-4 ${
                            selectedAnswers[currentQuestion] === index
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-lg">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextQuestion}
                    disabled={selectedAnswers[currentQuestion] === undefined}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      selectedAnswers[currentQuestion] !== undefined
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {currentQuestion === questions.length - 1 ? 
                      '🏁 Finalizar Examen' : 
                      'Siguiente Pregunta →'
                    }
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Vista principal del curso
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="mb-4">
            <span className="text-6xl">🚀</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
           Curso Excel por GRUPO 2 Lic. Sistemas
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Aprende Excel con Alex y Arriel
          </p>
        </div>

        <div className="mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Progreso del Curso</h3>
                <p className="text-sm text-gray-600">Completa todos los temas para acceder al examen</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round((unlockedSteps.length / 10) * 100)}%
                </div>
                <div className="text-sm text-gray-500">
                  {unlockedSteps.length}/10 completados
                </div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-4 rounded-full transition-all duration-700"
                style={{ width: `${(unlockedSteps.length / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                📋 Temario del Curso
              </h3>
              
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`w-full text-left p-4 rounded-xl text-sm transition-all duration-200 ${
                      currentStep === index
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                        : unlockedSteps.includes(index)
                        ? 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-2 border-gray-200'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed border-2 border-gray-100'
                    }`}
                    disabled={!unlockedSteps.includes(index)}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">
                        {unlockedSteps.includes(index) ? 
                          (currentStep === index ? '▶️' : '✅') : 
                          '🔒'
                        }
                      </span>
                      <div>
                        <div className="font-medium">Tema {index + 1}</div>
                        <div className="text-xs opacity-75">
                          {step.title.replace(`Tema ${index + 1}: `, '')}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 border-b">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-700 text-lg">
                  {steps[currentStep].description}
                </p>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{paddingTop: '56.25%'}}>
                    <iframe
                      src={steps[currentStep].video}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title={`Video: ${steps[currentStep].title}`}
                    ></iframe>
                  </div>
                </div>

                {/* Sección de Recursos Adicionales */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">📚</span>
                      <h3 className="text-2xl font-bold text-gray-800">Recursos Adicionales</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Enlaces útiles para profundizar en este tema:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {steps[currentStep].resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white hover:bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-lg p-4 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">🔗</span>
                            <div>
                              <h4 className="font-semibold text-gray-800 text-sm">
                                {resource.name}
                              </h4>
                              <p className="text-xs text-gray-500 truncate">
                                {resource.url}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {!showKeyInput ? (
                  <div className="text-center">
                    {currentStep === 9 ? (
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                        <div className="text-6xl mb-4">🎯</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          ¡Hora del Examen Final!
                        </h3>
                        <button
                          onClick={startExam}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg"
                        >
                          🚀 Iniciar Examen Final
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={handleNextClick}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg"
                      >
                        ✨ Continuar al Siguiente Tema →
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-yellow-200">
                    <div className="text-center mb-6">  
                      <div className="text-5xl mb-3">🔐</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        ¡Tema Completado!
                      </h3>
                    </div>
                    
                    <div className="max-w-md mx-auto">
                      <div className="flex gap-3 mb-4">
                        <input
                          type="text"
                          value={keyInput}
                          onChange={(e) => setKeyInput(e.target.value)}
                          placeholder="Clave del video..."
                          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          onKeyPress={(e) => e.key === 'Enter' && validateKey()}
                        />
                        <button
                          onClick={validateKey}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition duration-200"
                        >
                          🔓 Validar
                        </button>
                      </div>
                      
                      {errorMessage && (
                        <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-xl mb-4">
                          <div className="font-semibold">❌ {errorMessage}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;