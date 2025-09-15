
import { Shipment, ShipmentStatus, User, UserRole, Vehicle, VehicleStatus, Invoice, InvoiceStatus, ShipmentEvent } from './types';

export const MOCK_SHIPMENTS: Shipment[] = [
  {
    id: 'TRK123456789',
    origin: 'New York, USA',
    destination: 'London, UK',
    currentLocation: 'In transit over Atlantic Ocean',
    status: ShipmentStatus.IN_TRANSIT,
    estimatedDelivery: '2024-08-15',
    cargoType: 'Electronics',
    weightKg: 5000,
    volumeM3: 25,
    customer: {
      name: 'Global Tech Inc.',
      contact: 'contact@globaltech.com',
    },
    history: [
      { timestamp: '2024-08-01 10:00', status: ShipmentStatus.BOOKED, location: 'New York, USA', notes: 'Booking confirmed.' },
      { timestamp: '2024-08-02 14:30', status: ShipmentStatus.DISPATCHED, location: 'New York Port', notes: 'Departed from origin port.' },
      { timestamp: '2024-08-08 09:00', status: ShipmentStatus.IN_TRANSIT, location: 'Atlantic Ocean', notes: 'Mid-transit check-in.' },
    ],
  },
  {
    id: 'TRK987654321',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, USA',
    currentLocation: 'Los Angeles Port',
    status: ShipmentStatus.DELIVERED,
    estimatedDelivery: '2024-07-30',
     cargoType: 'Apparel',
    weightKg: 12000,
    volumeM3: 60,
    customer: {
        name: 'Fashion Forward',
        contact: 'logistics@fashionforward.com',
    },
    history: [
      { timestamp: '2024-07-10 11:00', status: ShipmentStatus.BOOKED, location: 'Shanghai, China', notes: 'Booking complete.' },
      { timestamp: '2024-07-12 18:00', status: ShipmentStatus.DISPATCHED, location: 'Shanghai Port', notes: 'Left Shanghai.' },
      { timestamp: '2024-07-28 08:00', status: ShipmentStatus.AT_HUB, location: 'Los Angeles Port', notes: 'Arrived at destination port.' },
      { timestamp: '2024-07-29 10:00', status: ShipmentStatus.OUT_FOR_DELIVERY, location: 'Los Angeles, USA', notes: 'On its way to the warehouse.' },
      { timestamp: '2024-07-29 16:45', status: ShipmentStatus.DELIVERED, location: 'Customer Warehouse', notes: 'Signed and delivered.' },
    ],
  },
];

export const MOCK_USERS: User[] = [
    { id: 'usr_001', name: 'Alice Johnson', email: 'alice.j@cargotracker.com', role: UserRole.ADMIN, lastLogin: '2024-08-10 09:15' },
    { id: 'usr_002', name: 'Bob Williams', email: 'bob.w@cargotracker.com', role: UserRole.STAFF, lastLogin: '2024-08-10 11:30' },
    { id: 'usr_003', name: 'Charlie Brown', email: 'charlie.b@globaltech.com', role: UserRole.CUSTOMER, lastLogin: '2024-08-09 14:00' },
    { id: 'usr_004', name: 'Diana Miller', email: 'diana.m@cargotracker.com', role: UserRole.STAFF, lastLogin: '2024-08-10 08:45' },
    { id: 'usr_005', name: 'Ethan Davis', email: 'ethan.d@fashionforward.com', role: UserRole.CUSTOMER, lastLogin: '2024-08-08 17:20' },
];

export const MOCK_STAFF: User[] = MOCK_USERS.filter(u => u.role === UserRole.STAFF || u.role === UserRole.ADMIN);
export const MOCK_CUSTOMERS: User[] = MOCK_USERS.filter(u => u.role === UserRole.CUSTOMER);


export const MOCK_VEHICLES: Vehicle[] = [
    { id: 'veh_T01', type: 'Truck', registration: 'TRUCK-001', capacityKg: 20000, status: VehicleStatus.AVAILABLE },
    { id: 'veh_S01', type: 'Ship', registration: 'CARGO-SHIP-A', capacityKg: 500000, status: VehicleStatus.IN_USE },
    { id: 'veh_V01', type: 'Van', registration: 'VAN-DEL-05', capacityKg: 1500, status: VehicleStatus.AVAILABLE },
    { id: 'veh_C01', type: 'Container', registration: 'CONT-XYZ-123', capacityKg: 25000, status: VehicleStatus.IN_USE },
    { id: 'veh_T02', type: 'Truck', registration: 'TRUCK-002', capacityKg: 20000, status: VehicleStatus.MAINTENANCE },
];

export const MOCK_INVOICES: Invoice[] = [
    { id: 'INV-2024-001', shipmentId: 'TRK123456789', customerName: 'Global Tech Inc.', amount: 15000.00, issueDate: '2024-08-03', dueDate: '2024-09-02', status: InvoiceStatus.UNPAID },
    { id: 'INV-2024-002', shipmentId: 'TRK987654321', customerName: 'Fashion Forward', amount: 22500.00, issueDate: '2024-07-15', dueDate: '2024-08-14', status: InvoiceStatus.PAID },
    { id: 'INV-2024-003', shipmentId: 'TRK555555555', customerName: 'Agro Exports', amount: 8000.00, issueDate: '2024-06-20', dueDate: '2024-07-20', status: InvoiceStatus.OVERDUE },
];
