export interface Tracking {
    id: number;
    viaje_id: number;
    vehiculo_id: number;
    temperatura: number;
    humedad: number;
    time_transmission: Date;
    time_reception: Date;
    secuencia_id: number;
}

export interface truck {
    id: number;
    truck_id: number;
    viaje_id: number;
    matricula: string;
    description: string;
    temperatura: string;
    humedad: string;
    time_transmission: Date;
}