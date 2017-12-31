
import { User } from "../user/user.model"

export class Project {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    priority: string;
    status: string;
    users: User[];
}