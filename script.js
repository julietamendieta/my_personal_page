const jobs = [
    {
        name: "Empleada de comercio",
        company: "Abracadabra Boutique",
        timePeriod: "2012-presente",
        description: "Empresa familiar de venta de indumentaria, calzado, marroquinería, accesorios y decoración.",
        job: "Cobro con distintos medios de pago y facturación, atención al público, paso a empleados y proveedores, manejo y cierre de caja.<br>Control de stock, cálculo y actualización de precios y etiquetado de mercadería, incluyendo su ingreso al sistema online (IPN)."
    },
    {
        name: "Docente ad honorem",
        company: "Facultad de Farmacia y Bioquímica - UBA",
        timePeriod: "Agosto 2018- Diciembre 2019",
        description: "Cátedra de Citogenética humana y genética toxicológica.",
        job: "Ayudante de aula y de laboratorio: dictado de clases y seminarios, toma y corrección de exámenes y/o trabajos prácticos, <br>preparación de trabajos prácticos. Tareas de investigación y desarrollo para la cátedra."
    },
    {
        name: "Docente ad honorem",
        company: "Facultad de Farmacia y Bioquímica - UBA",
        timePeriod: "Agosto 2015- Diciembre 2016",
        description: "Cátedra de Fisiopatología.",
        job: "Ayudante de aula y de laboratorio: preparación de trabajos prácticos. Tareas de investigación y desarrollo para la cátedra."
    }
]

const education = [
    {
        institution: "Coderhouse",
        degree: "Curso de JavaScript.",
        period: "2024",
        description: ""
    },
    {
        institution: "Coderhouse",
        degree: "Curso de Desarrollo Web.",
        period: "2024",
        description: ""
    },
    {
        institution: "Coderhouse",
        degree: "Curso de Python.",
        period: "2023",
        description: ""
    },
    {
        institution: "Coderhouse",
        degree: "Curso de Data Analytics.",
        period: "2023",
        description: ""
    },
    {
        institution: "Coderhouse",
        degree: "Curso de Tableau.",
        period: "2023",
        description: ""
    },
    {
        institution: "Coderhouse",
        degree: "Curso de Procesamiento de Datos en Excel.",
        period: "2023",
        description: ""
    },
    {
        institution: "Coderhouse",
        degree: "Curso de Diseño UX/UI.",
        period: "2022",
        description: ""
    },
    {
        institution: "Facultad de Farmacia y Bioquímica - UBA",
        degree: "Bioquímica",
        period: "2012-2020",
        description: "3 finales pendientes."
    },
    {
        institution: "Facultad de Farmacia y Bioquímica - UBA",
        degree: "Farmacia",
        period: "2012-2020",
        description: "1 año pendiente."
    },
    
]

const softSkills = [
    "Proactividad",
    "Compromiso",
    "Responsabilidad",
    "Trabajo en equipo",
    "Creatividad",
    "Trabajo bajo presión"
    ]

const skills = [
    "Inglés competencia bilingüe.",
    "Italiano competencia básica",
    "Diseño UX/UI: uso de Figma y presentación en Behance.",
    "Procesamiento y análisis de datos.",
    "Manejo de paquete Office avanzado (Word, Power Point, Excel)",
    "Tableau.",
    "Power BI",
    "SQL Server (básico/intermedio)",
    "VSC",
    "Git/GitHub"
]


let jobsBox = document.getElementById('jobsBox')
let educationBox = document.getElementById('educationBox')
let softSkillsBox = document.getElementById('softSkillsBox')
let skillsBox = document.getElementById('skillsBox')


for(const job of jobs){
    jobsBox.innerHTML +=`
    <div class="jobBox">
        <h3>${job.company}</h3>
        <h4>${job.description}</h4>
        <h4>${job.name}</h4>
        <p>${job.timePeriod}</p>
        <p>Tareas: ${job.job}</p>
    </div>
    `
}

for(const study of education){
    educationBox.innerHTML +=`
    <div class="studiesBox">
        <h3>${study.institution}</h3>
        <h4>${study.degree}</h4>
        <p>${study.period}</p>
        <p>${study.description}</p>
    </div>
    `
}

for(const softSkill of softSkills){
    softSkillsBox.innerHTML +=`
    <div class="softSkillBox">
        <p>${softSkill}</p>
    </div>
    `
}

for(const skill of skills){
    skillsBox.innerHTML +=`
    <div class="skillBox">
        <p>${skill}</p>
    </div>
    `
}