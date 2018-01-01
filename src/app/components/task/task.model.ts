
import { User } from "../user/user.model"

export class Task {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    priority: string;
    status: string;
    users: User[];
}