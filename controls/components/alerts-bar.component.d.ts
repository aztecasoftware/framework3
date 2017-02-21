import { Alert } from '../models/alert';
export declare class AlertsBarComponent {
    alerts: Alert[];
    dismissTimeout: number;
    showAlert(message: string, type: string): void;
    closeAlert(i: number): void;
}
