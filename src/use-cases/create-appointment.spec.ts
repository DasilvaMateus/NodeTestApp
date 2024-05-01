import { describe, it, expect } from "vitest";
import { CreatAppointment } from "./create-appointment";
import { Appointment } from "../enities/appointment";

describe('Create Appointmet tests', () => {
    it('should be able to  create an appointment', () => {
        const createAppointment = new CreatAppointment()

        const startsAt = new Date()
        const endsAt = new Date()

        startsAt.setDate(endsAt.getDate() + 1)
        endsAt.setDate(endsAt.getDate() + 2)

        expect(createAppointment.execute({
            customer: 'Natananel',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment)
    })
})