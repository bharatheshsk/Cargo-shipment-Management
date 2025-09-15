
export enum ShipmentStatus {
  BOOKED = 'Booked',
  DISPATCHED = 'Dispatched',
  IN_TRANSIT = 'In Transit',
  AT_HUB = 'At Hub',
  OUT_FOR_DELIVERY = 'Out for Delivery',
  DELIVERED = 'Delivered',
  DELAYED = 'Delayed',
  CANCELLED = 'Cancelled',
}

export interface ShipmentEvent {
  timestamp: string;
  status: ShipmentStatus;
  location: string;
  notes: string;
}

export interface Shipment {
  id: string;
  origin: string;
  destination: string;
  currentLocation: string;
  status: ShipmentStatus;
  estimatedDelivery: string;
  history: ShipmentEvent[];
  cargoType: string;
  weightKg: number;
  volumeM3: number;
  customer: {
    name: string;
    contact: string;
  };
}

export enum UserRole {
  ADMIN = 'Admin',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  lastLogin: string;
}

export enum VehicleStatus {
  AVAILABLE = 'Available',
  IN_USE = 'In Use',
  MAINTENANCE = 'Maintenance',
}

export interface Vehicle {
  id: string;
  type: 'Truck' | 'Ship' | 'Van' | 'Container';
  registration: string;
  capacityKg: number;
  status: VehicleStatus;
}

export enum InvoiceStatus {
  PAID = 'Paid',
  UNPAID = 'Unpaid',
  OVERDUE = 'Overdue',
}

export interface Invoice {
  id: string;
  shipmentId: string;
  customerName: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
}
