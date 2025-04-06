let tasks = [];
let schedules = [];
let currentSchedule = 0;
let availability = {};

const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const generateSchedulesBtn = document.getElementById('generate-schedules-btn');
const scheduleSelector = document.getElementById('schedule-selector');
const calendar = document.getElementById('calendar');
const availabilityGrid = document.getElementById('availability-grid');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

addTaskBtn.addEventListener('click', () => {
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML = `
        <input type="text" placeholder="Task Name">
        <input type="number" placeholder="Duration (hours)">
        <input type="number" placeholder="Importance (1-5)">
        <button class="remove-task-btn">Remove</button>
    `;
    taskList.appendChild(taskDiv);

    taskDiv.querySelector('.remove-task-btn').addEventListener('click', () => {
        taskDiv.remove();
    });
});

generateSchedulesBtn.addEventListener('click', () => {
    tasks = [];
    schedules = [];
    currentSchedule = 0;

    taskList.querySelectorAll('div').forEach(taskDiv => {
        const inputs = taskDiv.querySelectorAll('input');
        tasks.push({
            name: inputs[0].value,
            duration: parseInt(inputs[1].value),
            importance: parseInt(inputs[2].value),
        });
    });

    schedules = generateSchedules(tasks);
    renderSchedules();
});

function generateSchedules(tasks) {
    const sortedTasks = tasks.slice().sort((a, b) => b.importance - a.importance);
    const shuffledTasks = tasks.slice().sort(() => Math.random() - 0.5);

    return [
        scheduleTasks(sortedTasks),
        scheduleTasks(shuffledTasks),
        scheduleTasks(tasks.slice().sort(() => Math.random() - 0.5))
    ];
}

function scheduleTasks(tasks) {
    const schedule = {};
    const taskColors = ['#add8e6', '#e6bbad']; // Two shades of blue
    let colorIndex = 0;

    for (let i = 0; i < 24; i++) {
        schedule[i] = null;
    }

    for (const task of tasks) {
        let taskScheduled = false;
        for (let startHour = 0; startHour <= 24 - task.duration; startHour++) {
            let canSchedule = true;
            for (let hour = startHour; hour < startHour + task.duration; hour++) {
                if (schedule[hour] || !isTimeSlotAvailable(hour)) {
                    canSchedule = false;
                    break;
                }
            }

            if (canSchedule) {
                for (let hour = startHour; hour < startHour + task.duration; hour++) {
                    schedule[hour] = { name: task.name, color: taskColors[colorIndex] };
                }
                taskScheduled = true;
                colorIndex = (colorIndex + 1) % taskColors.length; // Alternate colors
                break;
            }
        }
        if (!taskScheduled) {
            console.log(`Task ${task.name} could not be scheduled`);
        }
    }
    return schedule;
}

function renderSchedules() {
    scheduleSelector.innerHTML = '';
    schedules.forEach((_, index) => {
        const button = document.createElement('button');
        button.classList.add('schedule-btn');
        button.textContent = `Schedule ${index + 1}`;
        button.addEventListener('click', () => {
            currentSchedule = index;
            renderCalendar();
            document.querySelectorAll('.schedule-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        scheduleSelector.appendChild(button);
    });

    if (schedules.length > 0) {
        scheduleSelector.firstChild.classList.add('active');
        renderCalendar();
    }
}

function renderCalendar() {
    calendar.innerHTML = '';

    // Header row
    const headerRow = document.createElement('div');
    headerRow.classList.add('hour-header');
    headerRow.textContent = "Time";
    calendar.appendChild(headerRow);
    for (let hour = 0; hour < 24; hour++) {
        const hourHeader = document.createElement('div');
        hourHeader.classList.add('hour-header');
        hourHeader.textContent = `${hour}:00`;
        calendar.appendChild(hourHeader);
    }

    if (schedules.length > 0) {
        const schedule = schedules[currentSchedule];
        for (let hour = 0; hour < 24; hour++) {
            const timeSlot = document.createElement('div');
            timeSlot.classList.add('time-slot');
            if (schedule[hour]) {
                timeSlot.textContent = schedule[hour].name;
                timeSlot.classList.add('task');
                timeSlot.style.backgroundColor = schedule[hour].color; // Set task color
            }
            calendar.appendChild(timeSlot);
        }
    }
}

function generateAvailabilityGrid() {
    availabilityGrid.innerHTML = '';

    // Create header row with time labels
    const headerRow = document.createElement('div');
    headerRow.classList.add('hour-header');
    headerRow.textContent = "Time";
    availabilityGrid.appendChild(headerRow);

    for (let hour = 0; hour < 24; hour++) {
        const hourHeader = document.createElement('div');
        hourHeader.classList.add('hour-header');
        hourHeader.textContent = `${hour}:00`;
        availabilityGrid.appendChild(hourHeader);
    }

    // Create checkbox row for availability
    const checkboxLabel = document.createElement('div'); // Create an empty first cell
    checkboxLabel.classList.add('hour-header');
    checkboxLabel.textContent = "";
    availabilityGrid.appendChild(checkboxLabel);

    for (let hour = 0; hour < 24; hour++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('availability-checkbox');
        checkbox.id = `availability-${hour}`;
        checkbox.checked = true; // Default to available
        availabilityGrid.appendChild(checkbox);

        checkbox.addEventListener('change', () => {
            availability[hour] = checkbox.checked;
        });
    }
}

function isTimeSlotAvailable(hour) {
    return availability[hour] !== false;
}

generateAvailabilityGrid();

// Set static button text
themeToggleBtn.textContent = 'Toggle Theme';

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});