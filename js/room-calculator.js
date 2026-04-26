let rooms = [];

function loadRooms() {
    const saved = localStorage.getItem('roomList');
    if (saved) {
        rooms = JSON.parse(saved);
        renderRooms();
    }
}

function saveRooms() {
    localStorage.setItem('roomList', JSON.stringify(rooms));
}

function addRoom() {
    const nameInput = document.getElementById('room-name');
    const lengthInput = document.getElementById('room-length');
    const widthInput = document.getElementById('room-width');
    const heightInput = document.getElementById('room-height');
    
    const name = nameInput.value.trim();
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    
    if (!name || isNaN(length) || isNaN(width) || isNaN(height)) {
        alert('Please enter room name and all measurements');
        return;
    }
    
    if (length <= 0 || width <= 0 || height <= 0) {
        alert('All measurements must be greater than 0');
        return;
    }
    
    const area = length * width;
    const perimeter = (length * 2) + (width * 2);
    const cubic = length * width * height;
    
    rooms.push({
        name,
        length,
        width,
        height,
        area,
        perimeter,
        cubic
    });
    
    saveRooms();
    renderRooms();
    
    nameInput.value = '';
    lengthInput.value = '';
    widthInput.value = '';
    heightInput.value = '';
    nameInput.focus();
}

function removeRoom(index) {
    rooms.splice(index, 1);
    saveRooms();
    renderRooms();
}

function clearRooms() {
    if (confirm('Clear all rooms?')) {
        rooms = [];
        saveRooms();
        renderRooms();
    }
}

function renderRooms() {
    const container = document.getElementById('rooms-list');
    container.innerHTML = '';
    
    rooms.forEach((room, index) => {
        const div = document.createElement('div');
        div.className = 'room-card';
        div.innerHTML = `
            <div class="room-header">
                <span class="room-name">${room.name}</span>
                <button class="remove-btn" onclick="removeRoom(${index})">×</button>
            </div>
            <div class="room-measurements">
                ${room.length} × ${room.width} × ${room.height}
            </div>
            <div class="room-stats">
                <div class="stat">
                    <span class="stat-label">Area</span>
                    <span class="stat-value">${room.area.toFixed(2)} sq ft</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Perimeter</span>
                    <span class="stat-value">${room.perimeter.toFixed(2)} ft</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Cubic</span>
                    <span class="stat-value">${room.cubic.toFixed(2)} cu ft</span>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadRooms();
    
    document.getElementById('add-room-btn').addEventListener('click', addRoom);
    document.getElementById('clear-btn').addEventListener('click', clearRooms);
    
    document.getElementById('room-height').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addRoom();
        }
    });
});