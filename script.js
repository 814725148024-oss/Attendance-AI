/* =========================================================
   ATTENDANCE AI - VIBECRAFT
   Core Calculator + Charts + Leave Simulator + AI Advisor
   ========================================================= */


/* =========================================================
   1. SECTION / TIMETABLE DATA
   ========================================================= */

const timetableData = {

    "I-ECE-A": {

        subjects: {
            A: "Advanced Calculus & Complex Analysis",
            B: "Chemistry",
            C: "Electronic System & PCB Design",
            D: "Programming for Problem Solving",
            E: "Philosophy of Engineering",
            F: "General Aptitude",
            G: "Biology",
            H: "German",
            I: "Basic Civil & Mechanical Workshop"
        },

        days: {

            Monday: ["E", "E", "B", "B", "A", "", "C", "C", ""],

            Tuesday: ["C", "B", "A", "D", "D", "", "I", "I", ""],

            Wednesday: ["B", "D", "D", "", "A", "F", "F", "C", "C"],

            Thursday: ["A", "C", "B", "D", "", "H", "H", "", ""],

            Friday: ["D", "A", "C", "F", "", "E", "E", "", ""]

        }

    },


    "II-BME": {

        subjects: {
            A: "Transforms & Boundary Value Problems",
            B: "Biomedical Signals & Systems",
            C: "Biomedical Engineering / Signals",
            D: "Digital Logic for Medical Systems",
            E: "Medical Physics",
            F: "Professional Ethics",
            G: "Universal Human Values-II",
            H: "Verbal Reasoning",
            I: "Social Engineering"
        },

        days: {

            Monday: ["E", "C", "C", "", "T", "", "E", "", ""],

            Tuesday: ["C", "E", "B", "B", "A", "H", "B", "", ""],

            Wednesday: ["B", "D", "A", "A", "", "H", "G", "A", ""],

            Thursday: ["A", "E", "B", "D", "", "", "", "", ""],

            Friday: ["F", "A", "C", "D", "", "G", "", "", ""]

        }

    },


    "II-ECE-DS-A": {

        subjects: {
            A: "Transforms & Boundary Value Problems",
            B: "Solid State Devices",
            C: "Computer Organization & Architecture",
            D: "Digital Logic Design",
            E: "Electromagnetic Theory",
            F: "Professional Ethics",
            G: "Universal Human Values-II",
            H: "Verbal Reasoning",
            I: "Social Engineering"
        },

        days: {

            Monday: ["E", "A", "", "I", "G", "", "I", "", ""],

            Tuesday: ["C", "A", "B", "B", "D", "G", "B", "H", ""],

            Wednesday: ["A", "B", "A", "C", "D", "", "A", "", ""],

            Thursday: ["B", "C", "A", "F", "I", "I", "", "", ""],

            Friday: ["D", "B", "E", "C", "", "", "", "", ""]

        }

    },


    "II-ECE-DS-B": {

        subjects: {
            A: "Transforms & Boundary Value Problems",
            B: "Solid State Devices",
            C: "Computer Organization & Architecture",
            D: "Digital Logic Design",
            E: "Electromagnetic Theory",
            F: "Professional Ethics",
            G: "Universal Human Values-II",
            H: "Verbal Reasoning",
            I: "Social Engineering"
        },

        days: {

            Monday: ["I", "I", "D", "B", "", "C", "I", "", ""],

            Tuesday: ["I", "I", "G", "C", "D", "B", "E", "A", ""],

            Wednesday: ["I", "A", "I", "", "I", "A", "D", "", ""],

            Thursday: ["G", "H", "A", "C", "B", "E", "", "", ""],

            Friday: ["H", "E", "A", "B", "C", "", "", "", ""]

        }

    },


    "III-BME": {

        subjects: {
            A: "Probability & Statistics",
            B: "Microprocessors & Microcontrollers",
            C: "Biomedical Signal Processing",
            D: "Biometrics",
            E: "Modern Wireless Communication",
            F: "Principles of Medical Imaging",
            G: "Analytical Thinking",
            H: "Indian Art Form",
            I: "Community Connect"
        },

        days: {

            Monday: ["G", "G", "", "B", "B", "F", "H", "", ""],

            Tuesday: ["B", "G", "C", "D", "B", "A", "B", "", ""],

            Wednesday: ["A", "C", "A", "A", "F", "", "D", "A", ""],

            Thursday: ["A", "C", "E", "B", "", "", "", "", ""],

            Friday: ["F", "A", "D", "E", "", "", "", "", ""]

        }

    },


    "III-ECE-A": {

        subjects: {
            A: "Discrete Mathematics",
            B: "Microprocessor, Microcontroller & Interfacing",
            C: "VLSI Design & Technology",
            D: "System & Network on Chip",
            E: "Machine Learning for All",
            F: "Community Connect",
            G: "Analytical Thinking",
            H: "Indian Art Form",
            I: "VLSI / Microprocessor Laboratory"
        },

        days: {

            Monday: ["E", "B", "B", "B", "A", "G", "", "", ""],

            Tuesday: ["H", "D", "B", "B", "B", "G", "B", "", ""],

            Wednesday: ["C", "A", "A", "D", "F", "", "A", "I", "I"],

            Thursday: ["A", "E", "C", "F", "", "", "", "", ""],

            Friday: ["D", "A", "E", "C", "I", "I", "", "", ""]

        }

    },


    "III-ECE-B": {

        subjects: {
            A: "Discrete Mathematics",
            B: "Microprocessor, Microcontroller & Interfacing",
            C: "VLSI Design & Technology",
            D: "System & Network on Chip",
            E: "Machine Learning for All",
            F: "Community Connect",
            G: "Analytical Thinking",
            H: "Indian Art Form",
            I: "VLSI / Microprocessor Laboratory"
        },

        days: {

            Monday: ["I", "I", "E", "B", "B", "A", "D", "", ""],

            Tuesday: ["G", "B", "F", "B", "B", "D", "C", "", ""],

            Wednesday: ["A", "G", "I", "B", "A", "A", "H", "", ""],

            Thursday: ["I", "I", "A", "C", "E", "F", "", "", ""],

            Friday: ["C", "A", "E", "D", "", "", "", "", ""]

        }

    },


    "III-ECE-DS": {

        subjects: {
            A: "Discrete Mathematics",
            B: "Microprocessor, Microcontroller & Interfacing",
            C: "VLSI Design & Technology",
            D: "Machine Learning for All",
            E: "Project Design Management",
            F: "Community Connect",
            G: "Analytical Thinking",
            H: "Indian Art Form",
            I: "VLSI Design / Microprocessor Laboratory"
        },

        days: {

            Monday: ["E", "B", "B", "C", "A", "D", "", "", ""],

            Tuesday: ["C", "B", "B", "D", "F", "I", "B", "", ""],

            Wednesday: ["H", "B", "A", "A", "C", "", "A", "G", ""],

            Thursday: ["A", "D", "E", "F", "", "", "", "", ""],

            Friday: ["D", "A", "E", "B", "G", "I", "", "", ""]

        }

    },


    "IV-ECE-A": {

        subjects: {
            A: "Behavioural Psychology",
            B: "Wireless Communication & Antenna Systems",
            C: "Computer Communication & Network Security",
            D: "Semiconductor Memory Design",
            E: "Scripting Language for Electronic Design Automation",
            F: "Machine Learning for All",
            G: "Computer Communication & Network Security Lab"
        },

        days: {

            Monday: ["C", "C", "A", "D", "E", "F", "", "", ""],

            Tuesday: ["C", "D", "B", "B", "F", "B", "", "", ""],

            Wednesday: ["B", "G", "G", "E", "F", "", "A", "", ""],

            Thursday: ["F", "A", "E", "B", "", "", "", "", ""],

            Friday: ["C", "A", "D", "E", "", "", "", "", ""]

        }

    },


    "IV-ECE-B": {

        subjects: {
            A: "Behavioural Psychology",
            B: "Wireless Communication & Antenna Systems",
            C: "Embedded Systems",
            D: "Semiconductor Memory Design",
            E: "Scripting Language for Electronic Design Automation",
            F: "Machine Learning for All",
            G: "Computer Communication & Network Security Lab"
        },

        days: {

            Monday: ["C", "A", "A", "E", "F", "B", "", "", ""],

            Tuesday: ["C", "E", "B", "F", "B", "B", "", "", ""],

            Wednesday: ["C", "D", "E", "A", "B", "", "A", "", ""],

            Thursday: ["D", "B", "G", "A", "", "", "", "", ""],

            Friday: ["E", "D", "F", "", "", "", "", "", ""]

        }

    }

};


/* =========================================================
   2. GLOBAL VARIABLES
   ========================================================= */

let selectedSection = "";
let attendanceData = {};
let attendanceChart = null;


/* =========================================================
   3. INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    setToday();

    setDefaultPlanningDate();

    initializeEmptyDashboard();

    document.getElementById("sectionSelect").value = "";

});


/* =========================================================
   4. DATE FUNCTIONS
   ========================================================= */

function getTodayISO() {

    const now = new Date();

    const year = now.getFullYear();

    const month = String(now.getMonth() + 1).padStart(2, "0");

    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function setToday() {

    const today = getTodayISO();

    document.getElementById("currentDate").value = today;

    document.getElementById("todayDate").textContent =
        formatDate(today);
}


function setDefaultPlanningDate() {

    const today = new Date();

    const future = new Date(today);

    future.setDate(today.getDate() + 30);

    document.getElementById("planningDate").value =
        dateToISO(future);
}


function dateToISO(date) {

    return date.toISOString().split("T")[0];

}


function formatDate(value) {

    if (!value) return "--";

    const date = new Date(value + "T00:00:00");

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

}


/* =========================================================
   5. NAVIGATION
   ========================================================= */

function showSection(id, button) {

    document.querySelectorAll(".page-section")
        .forEach(section => section.classList.remove("active"));

    document.getElementById(id)
        .classList.add("active");

    document.querySelectorAll(".nav-item")
        .forEach(item => item.classList.remove("active"));

    if (button) {
        button.classList.add("active");
    }

    const titles = {

        dashboard: "Attendance Dashboard",

        calculator: "Core Attendance Calculator",

        subjects: "Subject Attendance",

        simulator: "OD & Medical Leave Simulator",

        timetable: "Section Timetable"

    };

    document.getElementById("pageTitle").textContent =
        titles[id] || "Attendance AI";

    if (id === "subjects") {
        renderFullSubjects();
    }

}


function showSectionById(id) {

    const button = [...document.querySelectorAll(".nav-item")]
        .find(btn => btn.getAttribute("onclick")?.includes(`'${id}'`));

    showSection(id, button);

}


/* =========================================================
   6. SECTION LOADING
   ========================================================= */

function loadSection() {

    selectedSection =
        document.getElementById("sectionSelect").value;

    if (!selectedSection) return;

    const data = timetableData[selectedSection];

    attendanceData = {};

    Object.keys(data.subjects).forEach(slot => {

        attendanceData[slot] = {

            name: data.subjects[slot],

            attended: 0,

            total: 0

        };

    });

    renderCalculatorSubjects();

    updateSimulatorSubjects();

    renderTimetableFromSection(selectedSection);

}


/* =========================================================
   7. SUBJECT INPUTS
   ========================================================= */

function renderCalculatorSubjects() {

    const container =
        document.getElementById("calculatorSubjects");

    container.innerHTML = "";

    Object.entries(attendanceData).forEach(([slot, subject]) => {

        const div = document.createElement("div");

        div.className = "attendance-input";

        div.innerHTML = `

            <h4>${subject.name}</h4>

            <div class="input-pair">

                <div>
                    <label>Classes Attended</label>

                    <input
                        type="number"
                        min="0"
                        value="${subject.attended}"
                        id="attended-${slot}"
                        onchange="updateAttendance('${slot}')"
                    >
                </div>

                <div>
                    <label>Total Conducted</label>

                    <input
                        type="number"
                        min="0"
                        value="${subject.total}"
                        id="total-${slot}"
                        onchange="updateAttendance('${slot}')"
                    >
                </div>

            </div>
        `;

        container.appendChild(div);

    });

}


function updateAttendance(slot) {

    if (!attendanceData[slot]) return;

    let attended =
        Number(document.getElementById(`attended-${slot}`).value);

    let total =
        Number(document.getElementById(`total-${slot}`).value);

    if (attended < 0) attended = 0;

    if (total < 0) total = 0;

    if (attended > total) {
        attended = total;

        document.getElementById(`attended-${slot}`).value =
            attended;
    }

    attendanceData[slot].attended = attended;

    attendanceData[slot].total = total;

    updateDashboard();

}


/* =========================================================
   8. DEMO DATA
   ========================================================= */

function loadDemoData() {

    if (!selectedSection) {

        alert("Please select a section first.");

        return;

    }

    const demo = {

        A: [42, 52],

        B: [36, 50],

        C: [40, 48],

        D: [45, 55],

        E: [33, 45],

        F: [28, 34],

        G: [31, 38],

        H: [24, 30],

        I: [18, 22]

    };


    Object.entries(attendanceData).forEach(([slot]) => {

        const values =
            demo[slot] || [30, 40];

        attendanceData[slot].attended =
            values[0];

        attendanceData[slot].total =
            values[1];

    });


    renderCalculatorSubjects();

    updateDashboard();

}


/* =========================================================
   9. CALCULATIONS
   ========================================================= */

function percentage(attended, total) {

    if (total <= 0) return 0;

    return (attended / total) * 100;

}


function requiredClassesForTarget(
    attended,
    total,
    target
) {

    /*
       Find x such that:

       (attended + x) / (total + x) >= target

       x >= (target*total - attended) / (1-target)
    */

    if (total === 0) return 0;

    if (percentage(attended, total) >= target) {
        return 0;
    }

    const x =
        Math.ceil(
            ((target * total) - attended) /
            (1 - target)
        );

    return Math.max(0, x);

}


function maxPossiblePercentage(
    attended,
    total,
    remaining
) {

    return percentage(
        attended + remaining,
        total + remaining
    );

}


function classesCanMiss(
    attended,
    total,
    target
) {

    /*
        Find maximum x such that:

        attended / (total + x) >= target
    */

    if (total === 0) return 0;

    if (percentage(attended, total) < target) {
        return -1;
    }

    const x =
        Math.floor(
            (attended / target) - total
        );

    return Math.max(0, x);

}


/* =========================================================
   10. TIMETABLE COUNTING
   ========================================================= */

function getDayName(date) {

    return date.toLocaleDateString("en-US", {
        weekday: "long"
    });

}


function countClasses(
    section,
    startDate,
    endDate
) {

    const sectionData =
        timetableData[section];

    if (!sectionData) {

        return {};

    }


    const counts = {};

    Object.keys(sectionData.subjects)
        .forEach(slot => counts[slot] = 0);


    let current =
        new Date(startDate + "T00:00:00");

    const end =
        new Date(endDate + "T00:00:00");


    while (current <= end) {

        const day =
            getDayName(current);

        const schedule =
            sectionData.days[day];


        if (schedule) {

            schedule.forEach(slot => {

                if (
                    slot &&
                    counts.hasOwnProperty(slot)
                ) {

                    counts[slot]++;

                }

            });

        }


        current.setDate(
            current.getDate() + 1
        );

    }


    return counts;

}


/* =========================================================
   11. CORE CALCULATOR
   ========================================================= */

function runCoreCalculation() {

    if (!selectedSection) {

        alert("Please select your class section.");

        return;

    }


    const planningDate =
        document.getElementById("planningDate").value;

    const semesterEnd =
        document.getElementById("semesterEnd").value;

    const currentDate =
        document.getElementById("currentDate").value;


    if (!planningDate) {

        alert("Please select a planning date.");

        return;

    }


    if (planningDate < currentDate) {

        alert("Planning date must be after today.");

        return;

    }


    if (semesterEnd < planningDate) {

        alert("Semester end must be after the planning date.");

        return;

    }


    if (Object.keys(attendanceData).length === 0) {

        alert("Enter your current attendance first.");

        return;

    }


    const remainingToPlanning =
        countClasses(
            selectedSection,
            currentDate,
            planningDate
        );


    const remainingSemester =
        countClasses(
            selectedSection,
            currentDate,
            semesterEnd
        );


    renderCalculatorResults(
        remainingToPlanning,
        remainingSemester
    );


    checkDetention(
        remainingToPlanning
    );

}


/* =========================================================
   12. CALCULATOR RESULTS
   ========================================================= */

function renderCalculatorResults(
    remainingToPlanning,
    remainingSemester
) {

    const container =
        document.getElementById("calculatorResults");

    let html = "";

    let totalRemaining = 0;

    let totalRequired75 = 0;

    let totalRequired90 = 0;


    Object.entries(attendanceData)
        .forEach(([slot, subject]) => {

            const current =
                percentage(
                    subject.attended,
                    subject.total
                );


            const remaining =
                remainingSemester[slot] || 0;

            const required75 =
                requiredClassesForTarget(
                    subject.attended,
                    subject.total,
                    0.75
                );

            const required90 =
                requiredClassesForTarget(
                    subject.attended,
                    subject.total,
                    0.90
                );


            const maximum =
                maxPossiblePercentage(
                    subject.attended,
                    subject.total,
                    remaining
                );


            const canRecover =
                maximum >= 75;


            totalRemaining += remaining;

            if (required75 > 0)
                totalRequired75 += required75;

            if (required90 > 0)
                totalRequired90 += required90;


            html += `

                <div class="target-card
                    ${canRecover ? "safe-target" : "impossible"}">

                    <span class="target-title">
                        ${subject.name}
                    </span>

                    <strong>
                        ${current.toFixed(1)}%
                    </strong>

                    <small>
                        ${remaining} scheduled classes remaining
                    </small>

                    <br>

                    <small>
                        75% target:
                        ${
                            canRecover
                            ? `${required75} classes needed`
                            : "Mathematically impossible"
                        }
                    </small>

                    <br>

                    <small>
                        90% target:
                        ${
                            maximum >= 90
                            ? `${required90} classes needed`
                            : "Cannot reach 90% with remaining classes"
                        }
                    </small>

                </div>

            `;

        });


    const planningTotal =
        Object.values(remainingToPlanning)
            .reduce(
                (sum, value) => sum + value,
                0
            );


    html = `

        <div class="target-card safe-target">

            <span class="target-title">
                TOTAL SEMESTER CLASSES REMAINING
            </span>

            <strong>${totalRemaining}</strong>

            <small>
                Based on the selected section timetable
            </small>

        </div>

        <div class="target-card ninety-target">

            <span class="target-title">
                CLASSES BETWEEN TODAY & PLANNING DATE
            </span>

            <strong>${planningTotal}</strong>

            <small>
                Planning date:
                ${formatDate(
                    document.getElementById("planningDate").value
                )}
            </small>

        </div>

        ${html}

    `;


    container.innerHTML = html;

}


/* =========================================================
   13. IRREVERSIBLE DETENTION
   ========================================================= */

function checkDetention(remainingToPlanning) {

    const alertBox =
        document.getElementById("detentionAlert");

    const text =
        document.getElementById("detentionText");


    let impossibleSubjects = [];


    Object.entries(attendanceData)
        .forEach(([slot, subject]) => {

            const remaining =
                remainingToPlanning[slot] || 0;


            const maximum =
                maxPossiblePercentage(
                    subject.attended,
                    subject.total,
                    remaining
                );


            if (
                subject.total > 0 &&
                percentage(
                    subject.attended,
                    subject.total
                ) < 75 &&
                maximum < 75
            ) {

                impossibleSubjects.push(
                    `${subject.name} (${maximum.toFixed(1)}% maximum)`
                );

            }

        });


    if (impossibleSubjects.length > 0) {

        alertBox.classList.remove("hidden");

        text.textContent =
            "Recovery to 75% is mathematically impossible by the selected planning date for: " +
            impossibleSubjects.join(", ") +
            ". Attend every remaining class and contact your institution if an official attendance remedy is available.";

    } else {

        alertBox.classList.add("hidden");

    }

}


/* =========================================================
   14. DASHBOARD
   ========================================================= */

function updateDashboard() {

    const subjects =
        Object.values(attendanceData);


    if (subjects.length === 0) {

        initializeEmptyDashboard();

        return;

    }


    let attended = 0;

    let total = 0;


    subjects.forEach(subject => {

        attended += Number(subject.attended);

        total += Number(subject.total);

    });


    const overall =
        percentage(attended, total);


    document.getElementById("overallAttendance")
        .textContent =
        overall.toFixed(1) + "%";


    document.getElementById("heroPercentage")
        .textContent =
        overall.toFixed(1) + "%";


    document.getElementById("healthPercentage")
        .textContent =
        overall.toFixed(1) + "%";


    document.getElementById("classesAttended")
        .textContent =
        attended;


    document.getElementById("classesMissed")
        .textContent =
        Math.max(0, total - attended);


    let status = "Safe";

    if (overall < 65) {

        status = "Danger";

    } else if (overall < 75) {

        status = "Warning";

    }


    document.getElementById("overallStatus")
        .textContent =
        status;


    updateHealthRing(overall);

    renderDashboardSubjects();

    renderFullSubjects();

    renderChart();

    updateSimulatorSubjects();

}


/* =========================================================
   15. HEALTH RING
   ========================================================= */

function updateHealthRing(value) {

    const ring =
        document.getElementById("healthRing");


    const safeValue =
        Math.max(0, Math.min(100, value));


    ring.style.background =
        `conic-gradient(
            var(--primary) ${safeValue * 3.6}deg,
            #edf0f6 ${safeValue * 3.6}deg
        )`;

}


/* =========================================================
   16. DASHBOARD SUBJECTS
   ========================================================= */

function renderDashboardSubjects() {

    const container =
        document.getElementById("dashboardSubjects");

    container.innerHTML = "";


    Object.entries(attendanceData)
        .forEach(([slot, subject]) => {

            const value =
                percentage(
                    subject.attended,
                    subject.total
                );


            const color =
                value >= 75
                ? "var(--green)"
                : value >= 65
                ? "var(--orange)"
                : "var(--red)";


            container.innerHTML += `

                <div class="subject-row">

                    <div class="subject-name">

                        <strong>${subject.name}</strong>

                        <small>
                            ${subject.attended}/${subject.total}
                            classes attended
                        </small>

                    </div>

                    <div class="subject-percentage">
                        ${value.toFixed(1)}%
                    </div>

                    <div class="progress">

                        <div
                            class="progress-bar"
                            style="
                                width:${Math.min(value,100)}%;
                                background:${color};
                            "
                        ></div>

                    </div>

                    <div></div>

                </div>

            `;

        });

}


/* =========================================================
   17. CHART
   ========================================================= */

function renderChart() {

    const canvas =
        document.getElementById("attendanceChart");

    if (!canvas) return;


    const labels =
        Object.values(attendanceData)
            .map(subject => shortenName(subject.name));


    const values =
        Object.values(attendanceData)
            .map(subject =>
                percentage(
                    subject.attended,
                    subject.total
                )
            );


    if (attendanceChart) {

        attendanceChart.destroy();

    }


    attendanceChart =
        new Chart(canvas, {

            type: "bar",

            data: {

                labels,

                datasets: [{

                    label: "Attendance %",

                    data: values,

                    borderRadius: 7,

                    backgroundColor: "#315efb"

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        max: 100,

                        ticks: {
                            callback: value => value + "%"
                        }

                    }

                }

            }

        });

}


function shortenName(name) {

    if (name.length <= 18)
        return name;

    return name.substring(0, 17) + "...";

}


/* =========================================================
   18. FULL SUBJECTS
   ========================================================= */

function renderFullSubjects() {

    const container =
        document.getElementById("fullSubjectList");

    if (!container) return;


    if (Object.keys(attendanceData).length === 0) {

        container.innerHTML = `

            <div class="panel">

                <div class="empty-state">

                    <div class="empty-icon">📚</div>

                    <h3>No attendance data</h3>

                    <p>
                        Select a section and enter attendance data
                        in the Core Calculator.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    Object.entries(attendanceData)
        .forEach(([slot, subject]) => {

            const value =
                percentage(
                    subject.attended,
                    subject.total
                );


            const status =
                value >= 75
                ? "Safe"
                : value >= 65
                ? "Warning"
                : "Danger";


            container.innerHTML += `

                <div class="subject-card">

                    <div class="subject-card-top">

                        <div>

                            <small>Subject</small>

                            <h3>${subject.name}</h3>

                        </div>

                        <div class="big-percentage">
                            ${value.toFixed(1)}%
                        </div>

                    </div>


                    <div class="progress">

                        <div
                            class="progress-bar"
                            style="
                                width:${Math.min(value,100)}%;
                                background:
                                ${
                                    value >= 75
                                    ? "var(--green)"
                                    : value >= 65
                                    ? "var(--orange)"
                                    : "var(--red)"
                                };
                            "
                        ></div>

                    </div>


                    <div class="subject-stats">

                        <div class="subject-stat">
                            <span>Attended</span>
                            <strong>${subject.attended}</strong>
                        </div>

                        <div class="subject-stat">
                            <span>Conducted</span>
                            <strong>${subject.total}</strong>
                        </div>

                        <div class="subject-stat">
                            <span>Status</span>
                            <strong>${status}</strong>
                        </div>

                    </div>

                </div>

            `;

        });

}


/* =========================================================
   19. LEAVE SIMULATOR
   ========================================================= */

function updateSimulatorSubjects() {

    const select =
        document.getElementById("simSubject");

    if (!select) return;


    select.innerHTML = "";


    Object.entries(attendanceData)
        .forEach(([slot, subject]) => {

            select.innerHTML += `

                <option value="${slot}">
                    ${subject.name}
                </option>

            `;

        });


    simulateLeave();

}


function simulateLeave() {

    if (Object.keys(attendanceData).length === 0) {

        return;

    }


    const slot =
        document.getElementById("simSubject").value;


    const leaveType =
        document.getElementById("leaveType").value;


    const days =
        Math.max(
            0,
            Number(
                document.getElementById("leaveDays").value
            )
        );


    const subject =
        attendanceData[slot];


    if (!subject) return;


    let newAttended =
        subject.attended;


    let newTotal =
        subject.total + days;


    /*
       Prototype institutional assumption:

       OD = attended/eligible
       Medical Leave = attended/eligible
       Normal Leave = absent

       Your institution's actual policy can be changed here.
    */

    if (
        leaveType === "od" ||
        leaveType === "medical"
    ) {

        newAttended += days;

    }


    const projected =
        percentage(
            newAttended,
            newTotal
        );


    document.getElementById("projectedPercentage")
        .textContent =
        projected.toFixed(1) + "%";


    const message =
        document.getElementById("simulationStatus");


    message.className =
        "result-message";


    if (projected >= 75) {

        message.classList.add("safe");

        if (leaveType === "normal") {

            message.textContent =
                `${days} normal leave class(es) would change ${subject.name} to ${projected.toFixed(1)}%. You remain at or above 75%.`;

        } else {

            message.textContent =
                `${days} ${leaveType === "od" ? "OD" : "medical leave"} class(es) are treated as eligible attendance in this simulator. Projected attendance: ${projected.toFixed(1)}%.`;

        }

    } else {

        message.classList.add("danger");

        message.textContent =
            `Warning: projected ${subject.name} attendance is ${projected.toFixed(1)}%, below the 75% threshold.`;

    }

}


/* =========================================================
   20. TIMETABLE
   ========================================================= */

function renderTimetable() {

    const section =
        document.getElementById("timetableSelect").value;

    if (!section) return;

    renderTimetableFromSection(section);

}


function renderTimetableFromSection(section) {

    const container =
        document.getElementById("timetableContainer");

    if (!container) return;


    const data =
        timetableData[section];


    if (!data) return;


    const periods =
        [1,2,3,4,5,6,7,8,9];


    let html = `

        <table class="timetable">

            <thead>

                <tr>

                    <th>Day</th>

                    ${periods.map(p =>
                        `<th>Period ${p}</th>`
                    ).join("")}

                </tr>

            </thead>

            <tbody>

    `;


    Object.entries(data.days)
        .forEach(([day, slots]) => {

            html += `<tr>`;

            html += `<td>${day}</td>`;


            periods.forEach((period, index) => {

                const slot =
                    slots[index] || "";


                if (slot && data.subjects[slot]) {

                    html += `

                        <td>

                            <div class="slot">

                                ${slot}<br>

                                ${shortenName(
                                    data.subjects[slot]
                                )}

                            </div>

                        </td>

                    `;

                } else {

                    html += `<td>—</td>`;

                }

            });


            html += `</tr>`;

        });


    html += `

            </tbody>

        </table>

    `;


    container.innerHTML = html;

}


/* =========================================================
   21. CHATBOT
   ========================================================= */

function toggleChat() {

    document
        .getElementById("chatWindow")
        .classList.toggle("open");

}


function handleChatKey(event) {

    if (event.key === "Enter") {

        sendChat();

    }

}


function useSuggestion(text) {

    document.getElementById("chatInput").value =
        text;

    sendChat();

}


function sendChat() {

    const input =
        document.getElementById("chatInput");

    const text =
        input.value.trim();


    if (!text) return;


    addChatMessage(text, "user");

    input.value = "";


    setTimeout(() => {

        const reply =
            generateAdvisorResponse(text);

        addChatMessage(reply, "bot");

    }, 300);

}


function addChatMessage(text, type) {

    const messages =
        document.getElementById("chatMessages");


    const div =
        document.createElement("div");


    div.className =
        `message ${type}`;


    div.innerHTML =
        text.replace(/\n/g, "<br>");


    messages.appendChild(div);


    messages.scrollTop =
        messages.scrollHeight;

}


/* =========================================================
   22. AI ADVISOR LOGIC
   ========================================================= */

function generateAdvisorResponse(question) {

    const q =
        question.toLowerCase();


    if (Object.keys(attendanceData).length === 0) {

        return `
            I need your attendance data first.
            <br><br>
            Go to <b>Core Calculator</b>, select your section,
            and enter your current attendance.
        `;

    }


    /* FIND SUBJECT */

    let foundSlot = null;


    Object.entries(attendanceData)
        .forEach(([slot, subject]) => {

            const words =
                subject.name
                    .toLowerCase()
                    .split(/\s+/);


            if (
                q.includes(subject.name.toLowerCase()) ||
                words.some(
                    word =>
                        word.length > 4 &&
                        q.includes(word)
                )
            ) {

                foundSlot = slot;

            }

        });


    /* LOWEST */

    if (
        q.includes("lowest") ||
        q.includes("worst") ||
        q.includes("least")
    ) {

        let lowest = null;


        Object.entries(attendanceData)
            .forEach(([slot, subject]) => {

                const value =
                    percentage(
                        subject.attended,
                        subject.total
                    );


                if (
                    !lowest ||
                    value < lowest.value
                ) {

                    lowest = {

                        slot,

                        value,

                        name: subject.name

                    };

                }

            });


        return `
            Your lowest attendance is
            <b>${lowest.name}</b> at
            <b>${lowest.value.toFixed(1)}%</b>.
            <br><br>
            ${
                lowest.value < 75
                ? "⚠️ This subject is currently below the 75% threshold."
                : "You are currently above the 75% threshold."
            }
        `;

    }


    /* SPECIFIC SUBJECT */

    if (foundSlot) {

        const subject =
            attendanceData[foundSlot];


        const current =
            percentage(
                subject.attended,
                subject.total
            );


        /* LEAVE QUESTION */

        const numberMatch =
            q.match(/\d+/);


        if (
            numberMatch &&
            (
                q.includes("leave") ||
                q.includes("miss") ||
                q.includes("sick") ||
                q.includes("absent")
            )
        ) {

            const days =
                Number(numberMatch[0]);


            const projected =
                percentage(
                    subject.attended,
                    subject.total + days
                );


            return `
                If you miss <b>${days}</b> more
                ${days === 1 ? "class" : "classes"} in
                <b>${subject.name}</b>:
                <br><br>
                Current: <b>${current.toFixed(1)}%</b>
                <br>
                Projected: <b>${projected.toFixed(1)}%</b>
                <br><br>
                ${
                    projected < 75
                    ? "🚨 Warning: this would put you below 75%."
                    : "✅ You would remain at or above 75%."
                }
            `;

        }


        /* 90% */

        if (
            q.includes("90") ||
            q.includes("ninety")
        ) {

            const required =
                requiredClassesForTarget(
                    subject.attended,
                    subject.total,
                    .90
                );


            if (current >= 90) {

                return `
                    Your <b>${subject.name}</b>
                    attendance is already
                    <b>${current.toFixed(1)}%</b>.
                    You are currently above 90%.
                `;

            }


            return `
                Your current
                <b>${subject.name}</b> attendance is
                <b>${current.toFixed(1)}%</b>.
                <br><br>
                You need to attend approximately
                <b>${required}</b> consecutive classes
                to reach 90%, assuming no additional absences.
            `;

        }


        /* 75% */

        const required75 =
            requiredClassesForTarget(
                subject.attended,
                subject.total,
                .75
            );


        const miss =
            classesCanMiss(
                subject.attended,
                subject.total,
                .75
            );


        return `
            <b>${subject.name}</b> attendance:
            <b>${current.toFixed(1)}%</b>.
            <br><br>
            To reach 75%:
            <b>${required75}</b> additional attended classes
            are required, assuming no further absence.
            <br><br>
            ${
                current >= 75
                ? `You can currently miss approximately <b>${miss}</b> more class(es) before falling below 75%.`
                : "You are already below 75%, so avoid additional absences while recovering."
            }
        `;

    }


    /* GENERAL 90% */

    if (
        q.includes("90") ||
        q.includes("ninety")
    ) {

        const results = [];


        Object.values(attendanceData)
            .forEach(subject => {

                const current =
                    percentage(
                        subject.attended,
                        subject.total
                    );


                const required =
                    requiredClassesForTarget(
                        subject.attended,
                        subject.total,
                        .90
                    );


                results.push(
                    `${subject.name}: ${current.toFixed(1)}% → ${required} classes`
                );

            });


        return `
            To reach 90% in your subjects:
            <br><br>
            ${results.join("<br>")}
            <br><br>
            These calculations assume you attend every required class and do not add new absences.
        `;

    }


    /* GENERAL */

    if (
        q.includes("attendance") ||
        q.includes("percentage") ||
        q.includes("overall")
    ) {

        const values =
            Object.values(attendanceData);


        const totalAttended =
            values.reduce(
                (sum, item) =>
                    sum + item.attended,
                0
            );


        const totalClasses =
            values.reduce(
                (sum, item) =>
                    sum + item.total,
                0
            );


        const overall =
            percentage(
                totalAttended,
                totalClasses
            );


        return `
            Your overall attendance is
            <b>${overall.toFixed(1)}%</b>.
            <br><br>
            ${
                overall >= 75
                ? "✅ Your overall attendance is currently at or above 75%."
                : "⚠️ Your overall attendance is currently below 75%."
            }
        `;

    }


    return `
        I can calculate your attendance using the
        data currently stored in your dashboard.
        <br><br>

        Try asking:
        <br>
        • What is my Chemistry attendance?
        <br>
        • If I take 3 days leave, what happens?
        <br>
        • How many classes do I need for 90%?
        <br>
        • Which subject has the lowest attendance?
        <br>
        • What is my overall attendance?
    `;

}


/* =========================================================
   23. EMPTY DASHBOARD
   ========================================================= */

function initializeEmptyDashboard() {

    document.getElementById("overallAttendance")
        .textContent = "--%";

    document.getElementById("heroPercentage")
        .textContent = "--%";

    document.getElementById("healthPercentage")
        .textContent = "--%";

    document.getElementById("classesAttended")
        .textContent = "0";

    document.getElementById("classesMissed")
        .textContent = "0";

    document.getElementById("overallStatus")
        .textContent = "Waiting";

    document.getElementById("dashboardSubjects")
        .innerHTML = `

            <div class="empty-state small">

                <div class="empty-icon">📊</div>

                <h3>No attendance data yet</h3>

                <p>
                    Select your section and enter attendance
                    in the Core Calculator.
                </p>

            </div>

        `;

    renderFullSubjects();

}