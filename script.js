/* =========================================================
   VIBECRAFT SMART ROOM SYSTEM
========================================================= */


/* =========================================================
   ROOM DATA
========================================================= */

const rooms = [

    {
        id: "G101",
        floor: "Ground",
        capacity: 60,
        features: ["AC", "Projector", "Smart Board"],
        classes: [
            ["09:00", "10:00"],
            ["11:00", "12:00"],
            ["14:00", "15:00"]
        ]
    },

    {
        id: "G102",
        floor: "Ground",
        capacity: 40,
        features: ["AC", "Projector"],
        classes: [
            ["10:00", "11:00"],
            ["13:00", "14:00"],
            ["16:00", "17:00"]
        ]
    },

    {
        id: "G103",
        floor: "Ground",
        capacity: 80,
        features: ["AC", "Projector", "Smart Board"],
        classes: [
            ["09:00", "11:00"],
            ["12:00", "13:00"],
            ["15:00", "16:00"]
        ]
    },

    {
        id: "G104",
        floor: "Ground",
        capacity: 30,
        features: ["Projector"],
        classes: [
            ["08:00", "09:00"],
            ["11:00", "12:30"],
            ["14:00", "15:00"]
        ]
    },

    {
        id: "G105",
        floor: "Ground",
        capacity: 100,
        features: ["AC", "Projector", "Smart Board"],
        classes: [
            ["09:00", "10:00"],
            ["10:00", "12:00"],
            ["14:00", "16:00"]
        ]
    },


    {
        id: "F201",
        floor: "First",
        capacity: 50,
        features: ["AC", "Projector"],
        classes: [
            ["09:00", "10:00"],
            ["11:00", "13:00"],
            ["15:00", "16:00"]
        ]
    },

    {
        id: "F202",
        floor: "First",
        capacity: 70,
        features: ["AC", "Smart Board"],
        classes: [
            ["10:00", "11:00"],
            ["13:00", "14:00"],
            ["16:00", "17:00"]
        ]
    },

    {
        id: "F203",
        floor: "First",
        capacity: 40,
        features: ["Projector", "Smart Board"],
        classes: [
            ["08:00", "09:00"],
            ["12:00", "13:00"],
            ["15:00", "16:00"]
        ]
    },

    {
        id: "F204",
        floor: "First",
        capacity: 90,
        features: ["AC", "Projector"],
        classes: [
            ["09:00", "11:00"],
            ["13:00", "15:00"]
        ]
    },

    {
        id: "F205",
        floor: "First",
        capacity: 35,
        features: ["AC"],
        classes: [
            ["10:00", "12:00"],
            ["14:00", "15:00"],
            ["16:00", "17:00"]
        ]
    },


    {
        id: "S301",
        floor: "Second",
        capacity: 60,
        features: ["AC", "Projector"],
        classes: [
            ["09:00", "10:00"],
            ["12:00", "13:00"],
            ["15:00", "17:00"]
        ]
    },

    {
        id: "S302",
        floor: "Second",
        capacity: 45,
        features: ["Projector"],
        classes: [
            ["10:00", "11:00"],
            ["13:00", "14:00"]
        ]
    },

    {
        id: "S303",
        floor: "Second",
        capacity: 80,
        features: ["AC", "Projector", "Smart Board"],
        classes: [
            ["09:00", "12:00"],
            ["14:00", "15:00"]
        ]
    },

    {
        id: "S304",
        floor: "Second",
        capacity: 30,
        features: ["Smart Board"],
        classes: [
            ["08:00", "10:00"],
            ["12:00", "13:00"],
            ["16:00", "17:00"]
        ]
    },

    {
        id: "S305",
        floor: "Second",
        capacity: 100,
        features: ["AC", "Projector", "Smart Board"],
        classes: [
            ["10:00", "12:00"],
            ["14:00", "16:00"]
        ]
    }

];



/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showSection(sectionId) {

    document.querySelectorAll(".section")
        .forEach(section => {

            section.classList.remove("active");

        });

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (sectionId === "rooms") {

        renderRooms();

        updateDashboardStats();

    }

}



/* =========================================================
   TIME HELPERS
========================================================= */

function timeToMinutes(time) {

    const [hours, minutes] =
        time.split(":").map(Number);

    return hours * 60 + minutes;
}


function getCurrentMinutes() {

    const now = new Date();

    return (
        now.getHours() * 60 +
        now.getMinutes()
    );
}


function getCurrentSeconds() {

    const now = new Date();

    return (
        now.getHours() * 3600 +
        now.getMinutes() * 60 +
        now.getSeconds()
    );

}



/* =========================================================
   ROOM AVAILABILITY
========================================================= */

function getRoomStatus(room) {

    const current =
        getCurrentMinutes();

    for (const classTime of room.classes) {

        const start =
            timeToMinutes(classTime[0]);

        const end =
            timeToMinutes(classTime[1]);

        if (
            current >= start &&
            current < end
        ) {

            return {

                available: false,

                currentClass: classTime[0]
                    + " - "
                    + classTime[1],

                nextStart: null,

                minutesRemaining:
                    end - current

            };

        }

    }


    let nextClass = null;

    for (const classTime of room.classes) {

        const start =
            timeToMinutes(classTime[0]);

        if (start > current) {

            nextClass = classTime;

            break;

        }

    }


    return {

        available: true,

        currentClass: null,

        nextStart:
            nextClass
                ? nextClass[0]
                : null,

        minutesRemaining:
            nextClass
                ? timeToMinutes(nextClass[0])
                    - current
                : null

    };

}



/* =========================================================
   ROOM RENDERING
========================================================= */

function renderRooms() {

    const floor =
        document.getElementById("floorFilter").value;

    const capacity =
        document.getElementById("capacityFilter").value;

    const feature =
        document.getElementById("featureFilter").value;


    const filtered =
        rooms.filter(room => {

            if (
                floor !== "all" &&
                room.floor !== floor
            ) {

                return false;

            }


            if (
                capacity !== "all" &&
                room.capacity <
                Number(capacity)
            ) {

                return false;

            }


            if (
                feature !== "all" &&
                !room.features.includes(feature)
            ) {

                return false;

            }


            return true;

        });


    const ground =
        document.getElementById("groundRooms");

    const first =
        document.getElementById("firstRooms");

    const second =
        document.getElementById("secondRooms");


    ground.innerHTML = "";
    first.innerHTML = "";
    second.innerHTML = "";


    filtered.forEach(room => {

        const card =
            createRoomCard(room);

        if (room.floor === "Ground") {

            ground.appendChild(card);

        }

        if (room.floor === "First") {

            first.appendChild(card);

        }

        if (room.floor === "Second") {

            second.appendChild(card);

        }

    });

}


function createRoomCard(room) {

    const status =
        getRoomStatus(room);

    const div =
        document.createElement("div");

    div.className =
        "room "
        + (
            status.available
                ? "available"
                : "busy"
        );

    div.onclick =
        () => openRoom(room.id);


    div.innerHTML = `

        <div class="room-name">
            ${room.id}
        </div>

        <div class="room-floor">
            ${room.floor} Floor
            • ${room.capacity} seats
        </div>

        <div class="room-status">

            ${status.available
                ? "● AVAILABLE"
                : "● OCCUPIED"}

        </div>

    `;

    return div;

}



/* =========================================================
   SMART SEARCH
========================================================= */

function handleSearchKey(event) {

    if (event.key === "Enter") {

        smartSearch();

    }

}


function quickSearch(text) {

    document.getElementById("roomSearch")
        .value = text;

    smartSearch();

}


function smartSearch() {

    const input =
        document.getElementById("roomSearch")
            .value
            .toLowerCase()
            .trim();


    if (!input) {

        showToast(
            "Type what kind of room you need."
        );

        return;

    }


    const requestedFloor =
        detectFloor(input);

    const requestedFeature =
        detectFeature(input);

    const requestedDuration =
        detectDuration(input);


    let matches =
        rooms.filter(room => {

            const status =
                getRoomStatus(room);


            if (!status.available) {

                return false;

            }


            if (
                requestedFloor &&
                room.floor !== requestedFloor
            ) {

                return false;

            }


            if (
                requestedFeature &&
                !room.features.includes(
                    requestedFeature
                )
            ) {

                return false;

            }


            if (
                requestedDuration &&
                status.minutesRemaining !== null &&
                status.minutesRemaining <
                requestedDuration
            ) {

                return false;

            }


            if (
                input.includes("large") ||
                input.includes("big")
            ) {

                if (room.capacity < 70) {

                    return false;

                }

            }


            if (
                input.includes("small")
            ) {

                if (room.capacity > 50) {

                    return false;

                }

            }


            return true;

        });


    /*
       If there are no matches, show available
       rooms instead of leaving the user with
       an empty interface.
    */

    if (matches.length === 0) {

        matches =
            rooms.filter(room =>
                getRoomStatus(room).available
            );

        showToast(
            "No exact match. Showing available rooms."
        );

    }


    renderSearchResults(matches);

}



function detectFloor(text) {

    if (
        text.includes("ground") ||
        text.includes("g floor")
    ) {

        return "Ground";

    }

    if (
        text.includes("first") ||
        text.includes("1st")
    ) {

        return "First";

    }

    if (
        text.includes("second") ||
        text.includes("2nd")
    ) {

        return "Second";

    }

    return null;

}


function detectFeature(text) {

    if (
        text.includes("ac") ||
        text.includes("air condition")
    ) {

        return "AC";

    }

    if (
        text.includes("projector")
    ) {

        return "Projector";

    }

    if (
        text.includes("smart board")
    ) {

        return "Smart Board";

    }

    return null;

}


function detectDuration(text) {

    const hourMatch =
        text.match(
            /(\d+(?:\.\d+)?)\s*hour/
        );

    if (hourMatch) {

        return Math.ceil(
            Number(hourMatch[1]) * 60
        );

    }


    const minuteMatch =
        text.match(
            /(\d+)\s*minute/
        );

    if (minuteMatch) {

        return Number(
            minuteMatch[1]
        );

    }


    return null;

}



/* =========================================================
   SEARCH RESULTS
========================================================= */

function renderSearchResults(matches) {

    const grid =
        document.getElementById("resultGrid");

    const count =
        document.getElementById("resultCount");


    grid.innerHTML = "";

    count.textContent =
        matches.length
        + (
            matches.length === 1
                ? " room"
                : " rooms"
        );


    matches.forEach(room => {

        const status =
            getRoomStatus(room);

        const card =
            document.createElement("div");

        card.className =
            "result-card";


        const availableFor =
            status.nextStart
                ? "Available until "
                    + status.nextStart
                : "Available now";


        card.innerHTML = `

            <h3>
                ${room.id}
            </h3>

            <p>
                ${room.floor} Floor •
                ${room.capacity} seats
            </p>

            <div class="result-meta">

                ${room.features.map(
                    feature =>
                        `<span class="tag">
                            ${feature}
                        </span>`
                ).join("")}

            </div>

            <p>
                ✓ ${availableFor}
            </p>

            <button
                class="primary-btn"
                onclick="openRoom('${room.id}')"
            >
                View Room
            </button>

        `;

        grid.appendChild(card);

    });


    document.getElementById("searchResults")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}



/* =========================================================
   ROOM MODAL
========================================================= */

let selectedRoom = null;


function openRoom(roomId) {

    const room =
        rooms.find(
            item => item.id === roomId
        );

    if (!room) return;

    selectedRoom = room;


    const status =
        getRoomStatus(room);


    const modal =
        document.getElementById("roomModal");

    const content =
        document.getElementById(
            "modalRoomContent"
        );


    let countdownText =
        status.available
            ? "Available"
            : "Class in progress";


    if (status.available) {

        if (status.nextStart) {

            countdownText =
                "Free for "
                + formatMinutes(
                    status.minutesRemaining
                );

        } else {

            countdownText =
                "Free for the rest of the day";

        }

    } else {

        countdownText =
            "Class ends in "
            + formatMinutes(
                status.minutesRemaining
            );

    }


    content.innerHTML = `

        <p class="eyebrow">
            ${room.floor.toUpperCase()} FLOOR
        </p>

        <h2 class="modal-room-title">
            ${room.id}
        </h2>

        <span class="
            modal-status
            ${status.available
                ? "available"
                : "busy"}
        ">

            ${status.available
                ? "● AVAILABLE"
                : "● OCCUPIED"}

        </span>


        <div
            id="modalCountdown"
            class="countdown"
        >
            ${countdownText}
        </div>


        <div class="modal-info">

            <div>
                <strong>Capacity:</strong>
                ${room.capacity} students
            </div>

            <div>
                <strong>Facilities:</strong>
                ${room.features.join(", ")}
            </div>

            <div>
                <strong>Next class:</strong>
                ${
                    status.nextStart
                    || "No more classes today"
                }
            </div>

        </div>


        ${
            status.available
            ?
            `
                <button
                    class="whatsapp-btn"
                    onclick="callTheSquad()"
                >
                    WhatsApp — Call the Squad
                </button>
            `
            :
            `
                <button
                    class="primary-btn"
                    disabled
                    style="width:100%;opacity:0.5"
                >
                    Room Currently Occupied
                </button>
            `
        }

    `;


    modal.classList.add("show");

    startModalTimer();

}


function closeRoomModal() {

    document
        .getElementById("roomModal")
        .classList.remove("show");

    selectedRoom = null;

}


function closeModalOutside(event) {

    if (
        event.target.id ===
        "roomModal"
    ) {

        closeRoomModal();

    }

}



/* =========================================================
   COUNTDOWN
========================================================= */

let modalTimer = null;


function startModalTimer() {

    clearInterval(modalTimer);


    modalTimer =
        setInterval(() => {

            if (!selectedRoom) {

                clearInterval(modalTimer);

                return;

            }


            const status =
                getRoomStatus(
                    selectedRoom
                );


            const element =
                document.getElementById(
                    "modalCountdown"
                );


            if (!element) return;


            if (status.available) {

                if (status.nextStart) {

                    element.textContent =
                        "Free for "
                        + formatMinutes(
                            status.minutesRemaining
                        );

                } else {

                    element.textContent =
                        "Free for the rest of the day";

                }

            } else {

                element.textContent =
                    "Class ends in "
                    + formatMinutes(
                        status.minutesRemaining
                    );

            }

        }, 1000);

}


function formatMinutes(minutes) {

    if (
        minutes === null ||
        minutes === undefined
    ) {

        return "--";

    }


    const totalSeconds =
        Math.max(
            0,
            Math.floor(minutes * 60)
        );


    const hours =
        Math.floor(
            totalSeconds / 3600
        );

    const mins =
        Math.floor(
            (totalSeconds % 3600)
            / 60
        );

    const secs =
        totalSeconds % 60;


    return [

        String(hours).padStart(2, "0"),

        String(mins).padStart(2, "0"),

        String(secs).padStart(2, "0")

    ].join(":");

}



/* =========================================================
   CALL THE SQUAD
========================================================= */

function callTheSquad() {

    if (!selectedRoom) return;


    const status =
        getRoomStatus(selectedRoom);


    const message =
        `📍 Heading to ${selectedRoom.id}. ` +
        `It's free now on the ${selectedRoom.floor} floor. ` +
        `${
            status.nextStart
                ? "It's free until "
                    + status.nextStart
                    + "."
                : "It's available now."
        } ` +
        `Come fast!`;


    const whatsappURL =
        "https://wa.me/?text="
        + encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}



/* =========================================================
   DASHBOARD STATISTICS
========================================================= */

function updateDashboardStats() {

    const available =
        rooms.filter(
            room =>
                getRoomStatus(room).available
        ).length;


    const occupied =
        rooms.length - available;


    document.getElementById(
        "availableCount"
    ).textContent = available;


    document.getElementById(
        "occupiedCount"
    ).textContent = occupied;

}



/* =========================================================
   ATTENDANCE
========================================================= */

let attendanceRecords =
    JSON.parse(
        localStorage.getItem(
            "vibecraftAttendance"
        )
    ) || [];


function markAttendance() {

    const student =
        document.getElementById(
            "studentName"
        ).value.trim();


    const subject =
        document.getElementById(
            "subjectName"
        ).value.trim();


    const status =
        document.getElementById(
            "attendanceStatus"
        ).value;


    if (!student || !subject) {

        showToast(
            "Please enter student name and subject."
        );

        return;

    }


    const record = {

        student,

        subject,

        status,

        date:
            new Date()
                .toLocaleDateString()

    };


    attendanceRecords.push(record);


    localStorage.setItem(
        "vibecraftAttendance",
        JSON.stringify(
            attendanceRecords
        )
    );


    document.getElementById(
        "studentName"
    ).value = "";


    document.getElementById(
        "subjectName"
    ).value = "";


    renderAttendance();

    showToast(
        "Attendance saved successfully."
    );

}


function renderAttendance() {

    const table =
        document.getElementById(
            "attendanceTable"
        );


    table.innerHTML = "";


    attendanceRecords
        .slice()
        .reverse()
        .forEach(record => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${escapeHTML(
                        record.student
                    )}
                </td>

                <td>
                    ${escapeHTML(
                        record.subject
                    )}
                </td>

                <td>
                    ${record.status}
                </td>

                <td>
                    ${record.date}
                </td>

            `;


            table.appendChild(row);

        });


    const present =
        attendanceRecords.filter(
            r => r.status === "Present"
        ).length;


    const absent =
        attendanceRecords.filter(
            r => r.status === "Absent"
        ).length;


    const total =
        present + absent;


    const percentage =
        total
            ? Math.round(
                (present / total) * 100
            )
            : 0;


    document.getElementById(
        "presentCount"
    ).textContent = present;


    document.getElementById(
        "absentCount"
    ).textContent = absent;


    document.getElementById(
        "attendancePercentage"
    ).textContent =
        percentage + "%";

}



/* =========================================================
   SECURITY HELPER
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}



/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}



/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderRooms();

        renderAttendance();

        updateDashboardStats();


        /*
           Refresh room availability every 30 seconds.
        */

        setInterval(() => {

            renderRooms();

            updateDashboardStats();

        }, 30000);

    }
);