import { Appointment } from "../enities/appointment";

interface CreateAppointmentRequest {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

type CreateAppointmentResponse = Appointment


export class CreatAppointment {
    async execute(request: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
        const appointment = new Appointment(request)
    }
}