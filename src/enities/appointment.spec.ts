import { expect, test } from "vitest";
import { Appointment } from "./appointment";

test('create an appointment', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() + 1)

    const appointment = new Appointment({
        customer: ' Mateus Natanael',
        startsAt: new Date(),
        endsAt: new Date(),
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('Mateus Natanael')
    expect(appointment.customer).not.toEqual('Jonh Doe')
});

test('cannot create an appointment (invalid date)', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() - 1)

    expect(() => {
        return new Appointment({
            customer: ' Mateus Natanael',
            startsAt,
            endsAt,
        })
    }).toThrow()

});

test('cannot create an appointment before now (invalid date)', () => {
    const startsAt = new Date()
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate() - 1)
    endsAt.setDate(endsAt.getDate() + 3)

    expect(() => {
        return new Appointment({
            customer: ' Mateus Natanael',
            startsAt,
            endsAt,
        })
    }).toThrow()

});