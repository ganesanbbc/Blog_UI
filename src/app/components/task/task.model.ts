
import { User } from "../user/user.model"

export class Task {
    id: number;
    name: string;
    desc: string;
    startDate: string;
    endDate: string;
    priority: string;
    status: string;
    users: User[];
}