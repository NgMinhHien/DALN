document.addEventListener('DOMContentLoaded', () => {
    const roomList = document.getElementById('room-list');
    const searchForm = document.getElementById('search-form');
    const bookingForm = document.getElementById('booking-form');

    // Fetch and display rooms
    function fetchRooms() {
        fetch('/api/rooms')
            .then(response => response.json())
            .then(rooms => {
                roomList.innerHTML = '';
                rooms.forEach(room => {
                    const roomItem = document.createElement('div');
                    roomItem.className = 'room-item';
                    roomItem.innerHTML = `
                        <h3>${room.name}</h3>
                        <p>Location: ${room.location}</p>
                        <p>Price: $${room.price}</p>
                        <button onclick="bookRoom(${room.id})">Book Now</button>
                    `;
                    roomList.appendChild(roomItem);
                });
            })
            .catch(error => console.error('Error fetching rooms:', error));
    }

    // Search rooms based on criteria
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const location = document.getElementById('location').value;
        const priceRange = document.getElementById('price-range').value;

        fetch(`/api/rooms?location=${location}&priceRange=${priceRange}`)
            .then(response => response.json())
            .then(rooms => {
                roomList.innerHTML = '';
                rooms.forEach(room => {
                    const roomItem = document.createElement('div');
                    roomItem.className = 'room-item';
                    roomItem.innerHTML = `
                        <h3>${room.name}</h3>
                        <p>Location: ${room.location}</p>
                        <p>Price: $${room.price}</p>
                        <button onclick="bookRoom(${room.id})">Book Now</button>
                    `;
                    roomList.appendChild(roomItem);
                });
            })
            .catch(error => console.error('Error searching rooms:', error));
    });

    // Book a room
    window.bookRoom = function(roomId) {
        const userId = document.getElementById('user-id').value; // Assuming user ID is stored in a hidden input
        const bookingData = {
            userId: userId,
            roomId: roomId,
            startDate: document.getElementById('start-date').value,
            endDate: document.getElementById('end-date').value
        };

        fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Booking successful!');
            // Optionally refresh the room list or redirect
        })
        .catch(error => console.error('Error booking room:', error));
    };

    // Initial fetch of rooms
    fetchRooms();
});