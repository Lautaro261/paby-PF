export const parking_lot = {
	id: 1,
	name: 'Henry',
	floors: 2,
	fee: 100.00
};

export const levels = [
	{
		id: 1,
		name: 'Zótano',
		amount: 10,
		quantity_parking_spaces_cars: 5,
		quantity_parking_spaces_motorcycles: 5,
		parking_lots_id: 1
	},
	{
		id: 2,
		name: 'Piso 1',
		amount: 2,
		quantity_parking_spaces_cars: 1,
		quantity_parking_spaces_motorcycles: 1,
		parking_lots_id: 1
	}
];

export const parking_spaces = [
	{
		id: 1,
		zone_number: 1,
		zone_status: 'available',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 2,
		zone_number: 2,
		zone_status: 'occupied',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 3,
		zone_number: 3,
		zone_status: 'reserved',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 4,
		zone_number: 4,
		zone_status: 'available',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 5,
		zone_number: 5,
		zone_status: 'occupied',
		vehicle_type: 'car',
		levels_id: 1
	},
	{
		id: 6,
		zone_number: 6,
		zone_status: 'reserved',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 7,
		zone_number: 7,
		zone_status: 'occupied',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 8,
		zone_number: 8,
		zone_status: 'reserved',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 9,
		zone_number: 9,
		zone_status: 'available',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 10,
		zone_number: 10,
		zone_status: 'occupied',
		vehicle_type: 'motorcycle',
		levels_id: 1
	},
	{
		id: 11,
		zone_number: 1,
		zone_status: 'available',
		vehicle_type: 'motorcycle',
		levels_id: 2
	},
	{
		id: 12,
		zone_number: 2,
		zone_status: 'occupied',
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