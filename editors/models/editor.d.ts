export interface IEditor {
    dirty: boolean;
    canceled: boolean;
    showAlert(message: string, type: string): void;
}
