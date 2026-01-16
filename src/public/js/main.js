// Dữ liệu mẫu các phòng trọ
const sampleRooms = [
    {
        id: 1,
        name: 'Phòng Trọ Cao Cấp Quận 1',
        location: 'Quận 1, TP.HCM',
        price: 3500000,
        area: '25m²',
        facilities: 'Wifi, Điều hòa, Máy giặt',
        image: 'https://via.placeholder.com/300x200?text=Phong+1'
    },
    {
        id: 2,
        name: 'Phòng Trọ Sinh Viên Quận Thủ Đức',
        location: 'Quận Thủ Đức, TP.HCM',
        price: 2000000,
        area: '20m²',
        facilities: 'Wifi, Giường, Tủ lạnh',
        image: 'https://via.placeholder.com/300x200?text=Phong+2'
    },
    {
        id: 3,
        name: 'Phòng Trọ Giá Rẻ Quận Bình Thạnh',
        location: 'Quận Bình Thạnh, TP.HCM',
        price: 1800000,
        area: '18m²',
        facilities: 'Wifi, Điều hòa',
        image: 'https://via.placeholder.com/300x200?text=Phong+3'
    },
    {
        id: 4,
        name: 'Phòng Trọ Hiện Đại Quận 7',
        location: 'Quận 7, TP.HCM',
        price: 4000000,
        area: '30m²',
        facilities: 'Wifi, Điều hòa, Bếp riêng, Máy giặt',
        image: 'https://via.placeholder.com/300x200?text=Phong+4'
    },
    {
        id: 5,
        name: 'Phòng Trọ Gần Đại Học',
        location: 'Quận 9, TP.HCM',
        price: 2200000,
        area: '22m²',
        facilities: 'Wifi, Giường, Bàn học',
        image: 'https://via.placeholder.com/300x200?text=Phong+5'
    },
    {
        id: 6,
        name: 'Phòng Trọ Yên Tĩnh Quận 3',
        location: 'Quận 3, TP.HCM',
        price: 2800000,
        area: '24m²',
        facilities: 'Wifi, Điều hòa, Tủ lạnh',
        image: 'https://via.placeholder.com/300x200?text=Phong+6'
    },
    {
        id: 7,
        name: 'Phòng Trọ Sinh Viên Cầu Giấy',
        location: 'Quận Cầu Giấy, Hà Nội',
        price: 2500000,
        area: '22m²',
        facilities: 'Wifi, Điều hòa, Bàn học',
        image: 'https://via.placeholder.com/300x200?text=Phong+7'
    },
    {
        id: 8,
        name: 'Phòng Trọ Gần ĐH Bách Khoa',
        location: 'Quận Hai Bà Trưng, Hà Nội',
        price: 2300000,
        area: '20m²',
        facilities: 'Wifi, Giường, Tủ quần áo',
        image: 'https://via.placeholder.com/300x200?text=Phong+8'
    },
    {
        id: 9,
        name: 'Phòng Trọ Trung Tâm Đống Đa',
        location: 'Quận Đống Đa, Hà Nội',
        price: 2700000,
        area: '23m²',
        facilities: 'Wifi, Điều hòa, Tủ lạnh, Bàn làm việc',
        image: 'https://via.placeholder.com/300x200?text=Phong+9'
    },
    {
        id: 10,
        name: 'Phòng Trọ Thanh Xuân Giá Tốt',
        location: 'Quận Thanh Xuân, Hà Nội',
        price: 2100000,
        area: '19m²',
        facilities: 'Wifi, Điều hòa, Giường',
        image: 'https://via.placeholder.com/300x200?text=Phong+10'
    },
    {
        id: 11,
        name: 'Phòng Trọ Cao Cấp Hoàn Kiếm',
        location: 'Quận Hoàn Kiếm, Hà Nội',
        price: 3800000,
        area: '28m²',
        facilities: 'Wifi, Điều hòa, Bếp riêng, Máy giặt',
        image: 'https://via.placeholder.com/300x200?text=Phong+11'
    },
    {
        id: 12,
        name: 'Phòng Trọ Long Biên Tiện Nghi',
        location: 'Quận Long Biên, Hà Nội',
        price: 1900000,
        area: '21m²',
        facilities: 'Wifi, Điều hòa, Tủ lạnh',
        image: 'https://via.placeholder.com/300x200?text=Phong+12'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const roomList = document.getElementById('room-list');
    const roomItems = document.getElementById('room-items');
    const searchForm = document.getElementById('search-form');
    const bookingForm = document.getElementById('booking-form');

    // Hàm hiển thị phòng
    function displayRooms(rooms) {
        const container = roomItems || roomList;
        if (!container) return;

        container.innerHTML = '';
        
        if (rooms.length === 0) {
            container.innerHTML = '<p style="text-align: center; padding: 20px;">Không tìm thấy phòng phù hợp</p>';
            return;
        }

        rooms.forEach(room => {
            const roomItem = document.createElement('div');
            roomItem.className = 'room';
            roomItem.innerHTML = `
                <img src="${room.image}" alt="${room.name}" style="width: 100%; border-radius: 5px; margin-bottom: 10px;">
                <h3>${room.name}</h3>
                <p><strong>Địa điểm:</strong> ${room.location}</p>
                <p><strong>Giá:</strong> ${room.price.toLocaleString('vi-VN')} VNĐ/tháng</p>
                <p><strong>Diện tích:</strong> ${room.area}</p>
                <p><strong>Tiện nghi:</strong> ${room.facilities}</p>
                <button class="button" onclick="bookRoom(${room.id})">Đặt Phòng Ngay</button>
            `;
            container.appendChild(roomItem);
        });
    }

    // Fetch and display rooms from API (fallback to sample data)
    function fetchRooms() {
        // Thử gọi API, nếu không thành công thì dùng dữ liệu mẫu
        fetch('/api/rooms')
            .then(response => response.json())
            .then(rooms => {
                displayRooms(rooms);
            })
            .catch(error => {
                console.log('Sử dụng dữ liệu mẫu:', error);
                displayRooms(sampleRooms);
            });
    }

    // Search rooms based on criteria
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const location = document.getElementById('search-location').value.toLowerCase();
            const maxPrice = parseInt(document.getElementById('search-price').value) || Infinity;

            // Tìm kiếm trong dữ liệu mẫu
            const filteredRooms = sampleRooms.filter(room => {
                const matchLocation = !location || room.location.toLowerCase().includes(location);
                const matchPrice = room.price <= maxPrice;
                return matchLocation && matchPrice;
            });

            displayRooms(filteredRooms);

            // Cuộn đến phần danh sách phòng
            const roomsSection = document.getElementById('rooms');
            if (roomsSection) {
                roomsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Book a room
    window.bookRoom = function(roomId) {
        const room = sampleRooms.find(r => r.id === roomId);
        if (room) {
            alert(`Bạn đã chọn đặt phòng: ${room.name}\nGiá: ${room.price.toLocaleString('vi-VN')} VNĐ/tháng\n\nVui lòng điền thông tin đặt phòng!`);
            window.location.href = 'booking.html?roomId=' + roomId;
        }
    };

    // Initial fetch of rooms
    fetchRooms();
});