export const parking_lot = {
	id: 1,
	name: 'Henry',
	levels: 2,
	price_per_hour: 100.00
};

export const levels = [
	{
		id: 1,
		name: 'Zótano',
		quantity_parking_spaces: 10,
		quantity_parking_spaces_cars: 5,
		quantity_parking_spaces_motorcycles: 5,
		parking_lots_id: 1
	},
	{
		id: 2,
		name: 'Piso 1',
		quantity_parking_spaces: 2,
		quantity_parking_spaces_cars: 1,
		quantity_parking_spaces_motorcycles: 1,
		parking_lots_id: 1
	}
];

export const parking_spaces = [
	{
		id: 1,
		parking_space_label: 1,
		parking_space_status: 'available',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 2,
		parking_space_label: 2,
		parking_space_status: 'occupied',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 3,
		parking_space_label: 3,
		parking_space_status: 'reserved',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 4,
		parking_space_label: 4,
		parking_space_status: 'available',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 5,
		parking_space_label: 5,
		parking_space_status: 'occupied',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 6,
		parking_space_label: 6,
		parking_space_status: 'reserved',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 7,
		parking_space_label: 7,
		parking_space_status: 'occupied',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 8,
		parking_space_label: 8,
		parking_space_status: 'reserved',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 9,
		parking_space_label: 9,
		parking_space_status: 'available',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 10,
		parking_space_label: 10,
		parking_space_status: 'occupied',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 11,
		parking_space_label: 1,
		parking_space_status: 'available',
		vehicle_type: 'motorcycle',
		levels_id: 2
	},
	{
		id: 12,
		parking_space_label: 2,
		parking_space_status: 'occupied',
		vehicle_type: 'motorcycle',
		levels_id: 2
	}
];

export const reservations = [
	{
		id: 1,
		total_price: 2000.00,
		payment_status: 'accepted',
		parking_spaces_id: 2
	},
	{
		id: 2,
		total_price: 2000.00,
		payment_status: 'accepted',
		parking_spaces_id: 4
	}
];