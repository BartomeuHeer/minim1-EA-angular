import { User } from "./user.interface"

export interface Complaint{
    _id: string,
	creator: User,
	userComplainted: User,
	dayOfCreation: Date
	description:string
}