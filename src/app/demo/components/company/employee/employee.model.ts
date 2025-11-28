export interface Employee {
    id?: string;
    name: string;
    position: string;
    department: string;
    salary: number;
    description?: string | null;
    onlineStatus: boolean;
    photoBase64?: string;     // raw base64
    photoMimeType?: string;   // e.g. "image/png"
    photoFileName?: string;   // optional
}
export interface OnlineOption {
    value: boolean;
    label: string;
}
