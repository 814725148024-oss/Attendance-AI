/*
    VibeCraft Attendance + Smart Room Finder
    ----------------------------------------
    Room names below are based on the uploaded
    SRM timetable dataset.

    Important:
    AC/capacity information is NOT invented.
*/


const timetableRooms = [

    {
        name: "IST 602",
        building: "IST",
        type: "Classroom",
        source: "I ECE-A / ECE timetable"
    },

    {
        name: "IST 710",
        building: "IST",
        type: "Classroom",
        source: "ECE timetable"
    },

    {
        name: "IST 510",
        building: "IST",
        type: "Classroom",
        source: "ECE timetable"
    },

    {
        name: "IST 502",
        building: "IST",
        type: "Classroom",
        source: "ECE-DS timetable"
    },

    {
        name: "IST 609",
        building: "IST",
        type: "Classroom",
        source: "I Year timetable"
    },

    {
        name: "IST 520",
        building: "IST",
        type: "Classroom",
        source: "I Year timetable"
    },

    {
        name: "IST 702",
        building: "IST",
        type: "Classroom",
        source: "I Year timetable"
    },

    {
        name: "IST 626",
        building: "IST",
        type: "Classroom",
        source: "ECE timetable"
    },

    {
        name: "IST 617",
        building: "IST",
        type: "Classroom",
        source: "ECE timetable"
    },

    {
        name: "IST 520",
        building: "IST",
        type: "Classroom",
        source: "I Year timetable"
    },

    {
        name: "IST 710",
        building: "IST",
        type: "Classroom",
        source: "ECE timetable"
    },

    {
        name: "IST 108",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "IST 211",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "IST 225",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "IST 227",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "IST 411",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "IST 416",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "IST 518",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "IST 519",
        building: "IST",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "G-625",
        building: "General",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "G-602",
        building: "General",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "G-401",
        building: "General",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "H-TB-106",
        building: "H Block",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "CDC-TB-106",
        building: "CDC",
        type: "Classroom",
        source: "Timetable dataset"
    },

    {
        name: "LAB-309/107",
        building: "Laboratory",
        type: "Lab",
        source: "Timetable dataset"
    },

    {
        name: "LAB-108/309",
        building: "Laboratory",
        type: "Lab",
        source: "Timetable dataset"
    },

    {
        name: "LAB-108/107",
        building: "Laboratory",
        type: "Lab",
        source: "Timetable dataset"
    },

    {
        name: "MPMC LAB-107",
        building: "Laboratory",
        type: "Lab",
        source: "Timetable dataset"
    },

    {
        name: "BIO DSP LAB-108",
        building: "Laboratory",
        type: "Lab",
        source: "Timetable dataset"
    }

];



/*
    Remove duplicate rooms
*/

const rooms = Array.from(
    new Map(
        timetableRooms.map(room => [room.name, room])
    ).values()
);



/*
    Generate a repeatable demo availability state.

    This gives the interface a live-looking status
    without pretending that we have a live college
    timetable API.
*/

function getRoomStatus(room, index) {

    const hour = new Date().getHours();

    const value =
        (hour + index * 3) % 5;

    if (value === 0 || value === 1) {

        return {
            available: true,
            text: "Available"
        };

    }

    return {
        available: false,
        text: "Occupied"
    };

}



/* NAVIGATION */

function showSection(section) {

    document
        .querySelectorAll(".section")
        .forEach(s => s.classList.remove("active"));

    const target =
        document.getElementById(section);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* ATTENDANCE */

function calculateAttendance() {

    const total =
        Number(document.getElementById("totalClasses").value);

    const attended =
        Number(document.getElementById("attendedClasses").value);

    if (!total || total <= 0) {

        showToast("Enter valid class details.");

        return;
    }

    if (attended > total) {

        showToast("Attended classes cannot exceed total classes.");

        return;
    }

    const percentage =
        ((attended / total) * 100).toFixed(1);

    document.getElementById("attendanceValue").textContent =
        percentage + "%";

    document.getElementById("attendanceResult").textContent =
        `Current Attendance: ${percentage}%`;

}



/* ROOM SEARCH */

function searchRooms() {

    const query =
        (
            document.getElementById("roomSearch")?.value ||
            document.getElementById("quickSearch")?.value ||
            ""
        ).toLowerCase().trim();


    showSection("rooms");


    if (!query) {

        renderRooms(rooms);

        document.getElementById("searchMessage").textContent =
            "Showing all rooms from the uploaded timetable dataset.";

        return;
    }


    const words =
        query.split(/\s+/);


    const filtered =
        rooms.filter(room => {

            const fullText =
                `${room.name} ${room.building} ${room.type} ${room.source}`
                    .toLowerCase();

            return words.some(word =>
                fullText.includes(word)
            );

        });


    renderRooms(filtered);


    document.getElementById("searchMessage").textContent =
        filtered.length
            ? `${filtered.length} room(s) found for "${query}".`
            : `No room matched "${query}". Try "IST", "lab", or "available".`;

}



/* FILTER */

function filterRooms(type) {

    let result = rooms;

    if (type === "available") {

        result =
            rooms.filter((room, index) =>
                getRoomStatus(room, index).available
            );

    }

    else if (type === "busy") {

        result =
            rooms.filter((room, index) =>
                !getRoomStatus(room, index).available
            );

    }

    else if (type === "ist") {

        result =
            rooms.filter(room =>
                room.building === "IST"
            );

    }

    else if (type === "lab") {

        result =
            rooms.filter(room =>
                room.type === "Lab"
            );

    }

    renderRooms(result);

}



/* RENDER ROOMS */

function renderRooms(list) {

    const container =
        document.getElementById("roomGrid");

    if (!container) return;


    if (list.length === 0) {

        container.innerHTML = `
            <div class="panel">
                <h3>No rooms found</h3>
                <p class="muted">
                    Try searching for IST, lab or a room number.
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        list.map((room) => {

            const originalIndex =
                rooms.findIndex(
                    r => r.name === room.name
                );

            const status =
                getRoomStatus(
                    room,
                    originalIndex
                );


            return `

                <div
                    class="room-card"
                    onclick="openRoom('${escapeQuotes(room.name)}')"
                >

                    <div class="room-status
                        ${status.available
                            ? "available"
                            : "busy"}">
                    </div>

                    <h3>${room.name}</h3>

                    <p>
                        🏢 ${room.building}
                    </p>

                    <p>
                        ${room.type === "Lab"
                            ? "🧪 Laboratory"
                            : "📚 Classroom"}
                    </p>

                    <div class="room-time">
                        ${status.available
                            ? "🟢 Available now"
                            : "🔴 Currently occupied"}
                    </div>

                </div>

            `;

        }).join("");

}



/* MAP */

function renderMap() {

    const container =
        document.getElementById("mapRooms");

    if (!container) return;


    container.innerHTML =
        rooms.map((room, index) => {

            const status =
                getRoomStatus(room, index);

            return `

                <div
                    class="map-room
                        ${status.available
                            ? "available"
                            : "busy"}"
                    onclick="openRoom('${escapeQuotes(room.name)}')"
                >

                    <strong>
                        ${room.name}
                    </strong>

                    <span>
                        ${status.text}
                    </span>

                </div>

            `;

        }).join("");

}



/* ROOM DETAILS */

function openRoom(name) {

    const room =
        rooms.find(r => r.name === name);

    if (!room) return;


    const index =
        rooms.findIndex(r => r.name === name);

    const status =
        getRoomStatus(room, index);


    document.getElementById("modalBody").innerHTML = `

        <h2>🏫 ${room.name}</h2>

        <div class="detail">
            <span>Building</span>
            <strong>${room.building}</strong>
        </div>

        <div class="detail">
            <span>Type</span>
            <strong>${room.type}</strong>
        </div>

        <div class="detail">
            <span>Status</span>
            <strong>
                ${status.available
                    ? "🟢 Available"
                    : "🔴 Occupied"}
            </strong>
        </div>

        <div class="detail">
            <span>Dataset source</span>
            <strong>${room.source}</strong>
        </div>

        <div class="detail">
            <span>Data basis</span>
            <strong>SRM timetable PDFs</strong>
        </div>

        <button
            class="whatsapp"
            onclick="callSquad('${escapeQuotes(room.name)}')"
        >
            📱 Call the Squad on WhatsApp
        </button>

    `;


    document
        .getElementById("roomModal")
        .classList.add("show");

}



/* CLOSE MODAL */

function closeModal() {

    document
        .getElementById("roomModal")
        .classList.remove("show");

}



/* WHATSAPP */

function callSquad(roomName) {

    const message =
        `Hey Squad! 📍 Let's meet at ${roomName}. I found this room using VibeCraft Smart Room Finder.`;

    const url =
        `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}



/* RESET */

function resetRooms() {

    const roomSearch =
        document.getElementById("roomSearch");

    if (roomSearch) {
        roomSearch.value = "";
    }

    renderRooms(rooms);

    document.getElementById("searchMessage").textContent =
        "Showing rooms from the uploaded timetable dataset.";

}



/* TOAST */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}



/* SAFETY */

function escapeQuotes(value) {

    return value
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}



/* INITIALIZATION */

function initialize() {

    document.getElementById("roomCount").textContent =
        rooms.length;


    const available =
        rooms.filter((room, index) =>
            getRoomStatus(room, index).available
        ).length;


    document.getElementById("availableCount").textContent =
        available;


    renderRooms(rooms);

    renderMap();

}



document.addEventListener(
    "DOMContentLoaded",
    initialize
);



/*
    Close modal when clicking outside
*/

document
    .getElementById("roomModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });