import { PeriodSection } from "@/components/period-section";
import { groupAppointmentsByPeriod } from "@/utils/appointments-utils";
import { prisma } from "../../lib/prisma";

const appointments = [
  {
    id: '1',
    petName: 'Rex',
    description: 'Consulta',
    tutorName: 'João',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T10:00:00'),
  },
  {
    id: '2',
    petName: 'Mimi',
    tutorName: 'Maria',
    description: 'Banho',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T11:00:00'),
  },
  {
    id: '3',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T14:00:00'),
  },
  {
    id: '4',
    petName: 'Nina',
    tutorName: 'Natalia',
    description: 'Consulta',
    phone: '1234567890',
    scheduleAt: new Date('2025-08-17T19:00:00'),
  },
];



export default async function Home() {

  const appoint = await prisma.appointment.findMany()
  console.log(appoint);
  

  const periods = groupAppointmentsByPeriod(appointments)

  return (
    <div className="bg-background-primary p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-title-size text-content-primary mb-2">Sua agenda</h1>
          <p className="text-paragraph-medium-size text-content-secondary">Aqui você pode ver todos os clientes e serviços agendados para hoje.</p>
        </div>
      </div>

      <div className="pb-24 md:pb-0">
        {periods.map((period, index)=> (
          <PeriodSection period={period} key={index}/>

        ))}

      </div>
    </div>
  );
}
